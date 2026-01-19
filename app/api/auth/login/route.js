import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { comparePassword, generateToken } from '@/lib/auth'

export async function POST(request) {
  try {
    await connectDB()
    
    const body = await request.json()
    const { email, password, role } = body

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Normalize email (lowercase and trim) to match database
    const normalizedEmail = email.toLowerCase().trim()

    // Find user
    const user = await User.findOne({ email: normalizedEmail })
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check if user is active
    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 403 }
      )
    }

    // Check role if specified
    if (role && user.role !== role) {
      return NextResponse.json(
        { error: 'Invalid role for this account' },
        { status: 403 }
      )
    }

    // Verify password
    if (password) {
      if (!user.password) {
        return NextResponse.json(
          { error: 'Please login with Google or reset your password' },
          { status: 401 }
        )
      }

      const isValidPassword = await comparePassword(password, user.password)
      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Invalid email or password' },
          { status: 401 }
        )
      }
    } else {
      if (!user.googleId) {
        return NextResponse.json(
          { error: 'Password is required' },
          { status: 400 }
        )
      }
    }

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
      teacherInfo: user.role === 'teacher' ? user.teacherInfo : undefined,
      studentInfo: user.role === 'student' ? user.studentInfo : undefined,
    }

    return NextResponse.json({
      user: userResponse,
      token,
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to login' },
      { status: 500 }
    )
  }
}




