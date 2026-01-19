import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Assignment from '@/models/Assignment'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/assignments/[id] - Get assignment by ID
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)

    const { id } = params
    const assignment = await Assignment.findById(id)
      .populate('course', 'title teacher')
      .populate('teacher', 'firstName lastName')
      .populate('submissions.student', 'firstName lastName avatar')
      .lean()

    if (!assignment) {
      return NextResponse.json(
        { error: 'Assignment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ assignment })
  } catch (error) {
    console.error('Get assignment error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch assignment' },
      { status: 500 }
    )
  }
}




