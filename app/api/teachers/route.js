import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

// GET /api/teachers - Get all teachers
export async function GET(request) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const subject = searchParams.get('subject')
    const approved = searchParams.get('approved') !== 'false'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    const query = { 
      role: 'teacher',
      isActive: true,
    }

    if (approved) {
      query['teacherInfo.isApproved'] = true
    }

    if (subject) {
      query['teacherInfo.subjects'] = subject
    }

    const teachers = await User.find(query)
      .select('-password -studentInfo')
      .sort({ 'teacherInfo.rating.average': -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    const total = await User.countDocuments(query)

    return NextResponse.json({
      teachers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Get teachers error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch teachers' },
      { status: 500 }
    )
  }
}




