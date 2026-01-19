import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Course from '@/models/Course'
import Payment from '@/models/Payment'
import Booking from '@/models/Booking'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/admin/analytics - Get platform analytics
export async function GET(request) {
  try {
    await connectDB()
    
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Get stats
    const [
      totalStudents,
      totalTeachers,
      totalCourses,
      totalEnrollments,
      totalRevenue,
      totalBookings,
      activeCourses,
      pendingApprovals,
    ] = await Promise.all([
      User.countDocuments({ role: 'student', isActive: true }),
      User.countDocuments({ role: 'teacher', isActive: true }),
      Course.countDocuments({ isActive: true }),
      Course.aggregate([
        { $match: { isActive: true } },
        { $group: { _id: null, total: { $sum: '$totalEnrollments' } } }
      ]),
      Payment.aggregate([
        { $match: { status: 'completed' } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      Booking.countDocuments({ status: 'scheduled' }),
      Course.countDocuments({ status: 'published', isActive: true }),
      Course.countDocuments({ status: 'pending' }) + 
      User.countDocuments({ role: 'teacher', 'teacherInfo.isApproved': false }),
    ])

    const analytics = {
      users: {
        totalStudents,
        totalTeachers,
        totalUsers: totalStudents + totalTeachers,
      },
      courses: {
        total: totalCourses,
        active: activeCourses,
        totalEnrollments: totalEnrollments[0]?.total || 0,
        pendingApprovals,
      },
      revenue: {
        total: totalRevenue[0]?.total || 0,
        currency: 'USD',
      },
      bookings: {
        total: totalBookings,
      },
    }

    return NextResponse.json({ analytics })
  } catch (error) {
    console.error('Get analytics error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}




