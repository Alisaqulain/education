import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Notification from '@/models/Notification'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/notifications - Get notifications
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
    const unreadOnly = searchParams.get('unread') === 'true'
    const limit = parseInt(searchParams.get('limit') || '50')

    const query = { user: decoded.userId }
    if (unreadOnly) {
      query.isRead = false
    }

    const notifications = await Notification.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean()

    const unreadCount = await Notification.countDocuments({
      user: decoded.userId,
      isRead: false,
    })

    return NextResponse.json({ 
      notifications,
      unreadCount,
    })
  } catch (error) {
    console.error('Get notifications error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch notifications' },
      { status: 500 }
    )
  }
}

// POST /api/notifications/[id]/read - Mark notification as read
export async function PUT(request) {
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

    const body = await request.json()
    const { notificationId, markAllRead } = body

    if (markAllRead) {
      await Notification.updateMany(
        { user: decoded.userId, isRead: false },
        { isRead: true, readAt: new Date() }
      )
      return NextResponse.json({ message: 'All notifications marked as read' })
    } else if (notificationId) {
      const notification = await Notification.findOne({
        _id: notificationId,
        user: decoded.userId,
      })

      if (!notification) {
        return NextResponse.json(
          { error: 'Notification not found' },
          { status: 404 }
        )
      }

      notification.isRead = true
      notification.readAt = new Date()
      await notification.save()

      return NextResponse.json({ message: 'Notification marked as read' })
    } else {
      return NextResponse.json(
        { error: 'notificationId or markAllRead required' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Mark notification read error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update notification' },
      { status: 500 }
    )
  }
}




