import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import { getAuthToken, verifyToken } from '@/lib/auth'

// PUT /api/admin/courses/[id]/reject - Reject course
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
    const body = await request.json()
    const { reason } = body

    const course = await Course.findById(id)

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    course.status = 'rejected'
    await course.save()

    return NextResponse.json({
      message: 'Course rejected',
      course: {
        id: course._id,
        title: course.title,
        status: course.status,
      },
    })
  } catch (error) {
    console.error('Reject course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to reject course' },
      { status: 500 }
    )
  }
}




