import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { hashPassword } from '@/lib/auth'

// One-time admin setup endpoint
// POST /api/admin/setup
export async function POST(request) {
  try {
    await connectDB()

    const body = await request.json()
    const { email, password, firstName, lastName, secretKey } = body

    // Simple secret key check (you can change this)
    const ADMIN_SETUP_SECRET = process.env.ADMIN_SETUP_SECRET || 'admin-setup-secret-key-change-in-production'

    if (secretKey !== ADMIN_SETUP_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid secret key' },
        { status: 403 }
      )
    }

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email })
    
    if (existingAdmin) {
      // Update existing user to admin
      if (existingAdmin.role !== 'admin') {
        existingAdmin.role = 'admin'
        await existingAdmin.save()
      }

      // Update password
      const hashedPassword = await hashPassword(password)
      existingAdmin.password = hashedPassword
      existingAdmin.emailVerified = true
      existingAdmin.isActive = true
      await existingAdmin.save()

      return NextResponse.json({
        message: 'Admin account updated successfully',
        user: {
          id: existingAdmin._id,
          email: existingAdmin.email,
          firstName: existingAdmin.firstName,
          lastName: existingAdmin.lastName,
          role: existingAdmin.role,
        },
      })
    }

    // Create new admin
    const hashedPassword = await hashPassword(password)

    const admin = await User.create({
      email,
      password: hashedPassword,
      role: 'admin',
      firstName,
      lastName,
      emailVerified: true,
      isActive: true,
    })

    return NextResponse.json({
      message: 'Admin account created successfully',
      user: {
        id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role,
      },
    }, { status: 201 })
  } catch (error) {
    console.error('Admin setup error:', error)
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Admin account with this email already exists' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: error.message || 'Failed to create admin account' },
      { status: 500 }
    )
  }
}




