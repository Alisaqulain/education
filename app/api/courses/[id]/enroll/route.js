import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import User from '@/models/User'
import { getAuthToken, verifyToken } from '@/lib/auth'

// POST /api/courses/[id]/enroll - Enroll in course
export async function POST(request, { params }) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'student') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { id } = params
    const course = await Course.findById(id)

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    if (course.status !== 'published') {
      return NextResponse.json(
        { error: 'Course is not available for enrollment' },
        { status: 400 }
      )
    }

    const student = await User.findById(decoded.userId)

    // Check if already enrolled
    if (student.studentInfo.enrolledCourses.includes(course._id)) {
      return NextResponse.json(
        { error: 'Already enrolled in this course' },
        { status: 400 }
      )
    }

    // Add to enrolled courses
    student.studentInfo.enrolledCourses.push(course._id)
    await student.save()

    // Add student to course
    if (!course.enrolledStudents.includes(decoded.userId)) {
      course.enrolledStudents.push(decoded.userId)
      course.totalEnrollments += 1
      await course.save()
    }

    return NextResponse.json({ 
      message: 'Successfully enrolled in course',
      course: {
        id: course._id,
        title: course.title,
      }
    })
  } catch (error) {
    console.error('Enroll course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to enroll in course' },
      { status: 500 }
    )
  }
}




