import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Course from '@/models/Course'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/courses - Get all courses with filters
export async function GET(request) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const subject = searchParams.get('subject')
    const category = searchParams.get('category')
    const teacher = searchParams.get('teacher')
    const level = searchParams.get('level')
    let status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    // Get token for teacher filter
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    let decoded = null
    if (token) {
      decoded = verifyToken(token)
    }

    // Build query
    const query = { isActive: true }
    if (subject) query.subject = subject
    if (category) query.category = category
    if (teacher === 'me' && decoded && decoded.role === 'teacher') {
      query.teacher = decoded.userId
    } else if (teacher && teacher !== 'me') {
      query.teacher = teacher
    }
    if (level) query.level = level
    if (status && status !== 'all') {
      query.status = status
    } else if (!status) {
      query.status = 'published' // Default to published for public access
    }

    const courses = await Course.find(query)
      .populate('teacher', 'firstName lastName avatar teacherInfo')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await Course.countDocuments(query)

    return NextResponse.json({
      courses,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Get courses error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}

// POST /api/courses - Create new course
export async function POST(request) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'teacher') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { title, description, subject, category, price, level, language, thumbnail } = body

    if (!title || !description || !subject || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const course = await Course.create({
      title,
      description,
      teacher: decoded.userId,
      subject,
      category,
      price: price || 0,
      level: level || 'beginner',
      language: language || 'English',
      thumbnail: thumbnail || '',
      status: 'pending',
    })

    await course.populate('teacher', 'firstName lastName avatar')

    return NextResponse.json({ course }, { status: 201 })
  } catch (error) {
    console.error('Create course error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create course' },
      { status: 500 }
    )
  }
}

