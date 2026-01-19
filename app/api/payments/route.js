import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Payment from '@/models/Payment'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/payments - Get payment history
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
    }

    const payments = await Payment.find(query)
      .populate('course', 'title thumbnail')
      .populate('student', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({ payments })
  } catch (error) {
    console.error('Get payments error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch payments' },
      { status: 500 }
    )
  }
}

// POST /api/payments - Create payment
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
    const { course, amount, paymentMethod, transactionId, paymentProvider, providerTransactionId } = body

    if (!amount || !paymentMethod || !transactionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const payment = await Payment.create({
      student: decoded.userId,
      course: course || null,
      amount,
      paymentMethod,
      transactionId,
      paymentProvider: paymentProvider || 'stripe',
      providerTransactionId: providerTransactionId || null,
      status: 'completed',
    })

    await payment.populate('course', 'title')
    await payment.populate('student', 'firstName lastName')

    return NextResponse.json({ payment }, { status: 201 })
  } catch (error) {
    console.error('Create payment error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create payment' },
      { status: 500 }
    )
  }
}




