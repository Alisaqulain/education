import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/courses/[id] - Get course by ID
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const { id } = params
    const course = await Course.findById(id)
      .populate('teacher', 'firstName lastName avatar teacherInfo')
      .populate('reviews.student', 'firstName lastName avatar')
      .lean()

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ course })
  } catch (error) {
    console.error('Get course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch course' },
      { status: 500 }
    )
  }
}

// PUT /api/courses/[id] - Update course
export async function PUT(request, { params }) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { id } = params
    const course = await Course.findById(id)

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Check if user is the teacher or admin
    if (course.teacher.toString() !== decoded.userId && decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    Object.assign(course, body)

    await course.save()
    await course.populate('teacher', 'firstName lastName avatar')

    return NextResponse.json({ course })
  } catch (error) {
    console.error('Update course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update course' },
      { status: 500 }
    )
  }
}

// DELETE /api/courses/[id] - Delete course
export async function DELETE(request, { params }) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { id } = params
    const course = await Course.findById(id)

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Check if user is the teacher or admin
    if (course.teacher.toString() !== decoded.userId && decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    course.isActive = false
    await course.save()

    return NextResponse.json({ message: 'Course deleted successfully' })
  } catch (error) {
    console.error('Delete course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to delete course' },
      { status: 500 }
    )
  }
}




