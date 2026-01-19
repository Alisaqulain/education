import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/admin/students - Get all students
export async function GET(request) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const students = await User.find({ role: 'student' })
      .select('-password -teacherInfo')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ students })
  } catch (error) {
    console.error('Get students error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch students' },
      { status: 500 }
    )
  }
}




