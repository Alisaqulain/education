import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { getAuthToken, verifyToken } from '@/lib/auth'

// PUT /api/admin/teachers/[id]/approve - Approve teacher
export async function PUT(request, { params }) {
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

    const { id } = params
    const teacher = await User.findById(id)

    if (!teacher || teacher.role !== 'teacher') {
      return NextResponse.json(
        { error: 'Teacher not found' },
        { status: 404 }
      )
    }

    teacher.teacherInfo.isApproved = true
    teacher.teacherInfo.isVerified = true
    await teacher.save()

    return NextResponse.json({
      message: 'Teacher approved successfully',
      teacher: {
        id: teacher._id,
        email: teacher.email,
        isApproved: teacher.teacherInfo.isApproved,
      },
    })
  } catch (error) {
    console.error('Approve teacher error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to approve teacher' },
      { status: 500 }
    )
  }
}




