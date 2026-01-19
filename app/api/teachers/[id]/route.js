import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Course from '@/models/Course'

// GET /api/teachers/[id] - Get teacher by ID with courses
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const { id } = params
    const teacher = await User.findById(id)
      .select('-password -studentInfo')
      .lean()

    if (!teacher || teacher.role !== 'teacher') {
      return NextResponse.json(
        { error: 'Teacher not found' },
        { status: 404 }
      )
    }

    // Get teacher's courses
    const courses = await Course.find({ 
      teacher: id,
      status: 'published',
      isActive: true,
    })
      .select('title description thumbnail price rating subject category')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ 
      teacher,
      courses,
    })
  } catch (error) {
    console.error('Get teacher error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch teacher' },
      { status: 500 }
    )
  }
}




