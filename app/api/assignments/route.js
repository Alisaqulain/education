import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Assignment from '@/models/Assignment'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/assignments - Get assignments
export async function GET(request) {
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

    const { searchParams } = new URL(request.url)
    const courseId = searchParams.get('course')
    const studentId = searchParams.get('student')

    const query = { isActive: true }

    if (decoded.role === 'teacher') {
      query.teacher = decoded.userId
    } else if (decoded.role === 'student') {
      query.assignedTo = decoded.userId
    }

    if (courseId) query.course = courseId

    const assignments = await Assignment.find(query)
      .populate('course', 'title')
      .populate('teacher', 'firstName lastName')
      .sort({ dueDate: 1 })
      .lean()

    return NextResponse.json({ assignments })
  } catch (error) {
    console.error('Get assignments error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch assignments' },
      { status: 500 }
    )
  }
}

// POST /api/assignments - Create assignment
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
    const { course, title, description, instructions, dueDate, maxScore, assignedTo } = body

    if (!course || !title || !description || !dueDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const assignment = await Assignment.create({
      course,
      teacher: decoded.userId,
      title,
      description,
      instructions: instructions || '',
      dueDate: new Date(dueDate),
      maxScore: maxScore || 100,
      assignedTo: assignedTo || [],
    })

    await assignment.populate('course', 'title')
    await assignment.populate('teacher', 'firstName lastName')

    return NextResponse.json({ assignment }, { status: 201 })
  } catch (error) {
    console.error('Create assignment error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create assignment' },
      { status: 500 }
    )
  }
}




