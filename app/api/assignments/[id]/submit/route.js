import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Assignment from '@/models/Assignment'
import { getAuthToken, verifyToken } from '@/lib/auth'

// POST /api/assignments/[id]/submit - Submit assignment
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
    const assignment = await Assignment.findById(id)

    if (!assignment) {
      return NextResponse.json(
        { error: 'Assignment not found' },
        { status: 404 }
      )
    }

    const body = await request.json()
    const { files, textAnswer } = body

    // Check if already submitted
    const existingSubmission = assignment.submissions.find(
      sub => sub.student.toString() === decoded.userId
    )

    if (existingSubmission) {
      // Update existing submission
      existingSubmission.files = files || []
      existingSubmission.textAnswer = textAnswer || ''
      existingSubmission.submittedAt = new Date()
      existingSubmission.status = 'submitted'
    } else {
      // Create new submission
      assignment.submissions.push({
        student: decoded.userId,
        files: files || [],
        textAnswer: textAnswer || '',
        status: 'submitted',
      })
    }

    await assignment.save()
    await assignment.populate('submissions.student', 'firstName lastName')

    return NextResponse.json({ 
      message: 'Assignment submitted successfully',
      assignment 
    })
  } catch (error) {
    console.error('Submit assignment error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to submit assignment' },
      { status: 500 }
    )
  }
}




