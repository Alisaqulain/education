import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { hashPassword, generateToken } from '@/lib/auth'

export async function POST(request) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { email, password, firstName, lastName, role, phone, googleId } = body

    // Validation
    if (!email || !firstName || !lastName || !role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Normalize email (lowercase and trim) to match database
    const normalizedEmail = email.toLowerCase().trim()

    // Check if user exists
    const existingUser = await User.findOne({ email: normalizedEmail })
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      )
    }

    // Hash password if provided
    let hashedPassword = null
    if (password) {
      hashedPassword = await hashPassword(password)
    }

    // Create user
    const userData = {
      email: normalizedEmail,
      firstName,
      lastName,
      role,
      password: hashedPassword,
      googleId: googleId || null,
      emailVerified: googleId ? true : false,
    }

    if (phone) userData.phone = phone

    const user = await User.create(userData)

    // Generate token
    const token = generateToken(user._id.toString(), user.role)

    // Return user without password
    const userResponse = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatar: user.avatar,
    }

    return NextResponse.json(
      { user: userResponse, token },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to register user' },
      { status: 500 }
    )
  }
}




