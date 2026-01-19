import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { getAuthToken, verifyToken } from '@/lib/auth'

// PUT /api/admin/teachers/[id]/reject - Reject teacher
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

    teacher.teacherInfo.isApproved = false
    teacher.isActive = false
    await teacher.save()

    return NextResponse.json({
      message: 'Teacher rejected',
      teacher: {
        id: teacher._id,
        email: teacher.email,
        isApproved: teacher.teacherInfo.isApproved,
      },
    })
  } catch (error) {
    console.error('Reject teacher error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to reject teacher' },
      { status: 500 }
    )
  }
}




