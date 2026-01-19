import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Booking from '@/models/Booking'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/bookings - Get bookings
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

    const query = {}
    if (decoded.role === 'student') {
      query.student = decoded.userId
    } else if (decoded.role === 'teacher') {
      query.teacher = decoded.userId
    }

    const bookings = await Booking.find(query)
      .populate('student', 'firstName lastName avatar')
      .populate('teacher', 'firstName lastName avatar')
      .populate('course', 'title')
      .sort({ date: 1, startTime: 1 })
      .lean()

    return NextResponse.json({ bookings })
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

// POST /api/bookings - Create booking
export async function POST(request) {
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

    const body = await request.json()
    const { teacher, course, date, startTime, endTime, duration, sessionType, amount } = body

    if (!teacher || !date || !startTime || !endTime || !duration) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const booking = await Booking.create({
      student: decoded.userId,
      teacher,
      course: course || null,
      date: new Date(date),
      startTime,
      endTime,
      duration,
      sessionType: sessionType || 'regular',
      amount: amount || 0,
      status: 'scheduled',
    })

    await booking.populate('teacher', 'firstName lastName avatar')
    await booking.populate('course', 'title')

    return NextResponse.json({ booking }, { status: 201 })
  } catch (error) {
    console.error('Create booking error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create booking' },
      { status: 500 }
    )
  }
}




