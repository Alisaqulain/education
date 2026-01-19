import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { getAuthToken, verifyToken } from '@/lib/auth'

export async function GET(request) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    const user = await User.findById(decoded.userId).select('-password')
    
    if (!user || !user.isActive) {
      return NextResponse.json(
        { error: 'User not found or inactive' },
        { status: 404 }
      )
    }

    const userResponse = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatar: user.avatar,
      phone: user.phone,
      teacherInfo: user.role === 'teacher' ? user.teacherInfo : undefined,
      studentInfo: user.role === 'student' ? user.studentInfo : undefined,
      createdAt: user.createdAt,
    }

    return NextResponse.json({ user: userResponse })
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to get user' },
      { status: 500 }
    )
  }
}




