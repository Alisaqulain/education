import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Message from '@/models/Message'
import { getAuthToken, verifyToken } from '@/lib/auth'

// GET /api/messages - Get messages/conversations
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
    const conversationId = searchParams.get('conversationId')
    const otherUserId = searchParams.get('otherUser')

    if (conversationId) {
      // Get messages for a specific conversation
      const messages = await Message.find({ conversationId })
        .populate('sender', 'firstName lastName avatar')
        .populate('recipient', 'firstName lastName avatar')
        .sort({ createdAt: 1 })
        .lean()

      // Mark as read
      await Message.updateMany(
        { 
          conversationId,
          recipient: decoded.userId,
          isRead: false
        },
        { 
          isRead: true,
          readAt: new Date()
        }
      )

      return NextResponse.json({ messages })
    } else if (otherUserId) {
      // Get or create conversation ID
      const conversationId = [decoded.userId, otherUserId].sort().join('_')
      
      const messages = await Message.find({ conversationId })
        .populate('sender', 'firstName lastName avatar')
        .populate('recipient', 'firstName lastName avatar')
        .sort({ createdAt: 1 })
        .lean()

      return NextResponse.json({ messages, conversationId })
    } else {
      // Get all conversations for user
      const messages = await Message.find({
        $or: [
          { sender: decoded.userId },
          { recipient: decoded.userId }
        ]
      })
        .populate('sender', 'firstName lastName avatar')
        .populate('recipient', 'firstName lastName avatar')
        .sort({ createdAt: -1 })
        .lean()

      // Group by conversation
      const conversations = {}
      messages.forEach(msg => {
        const otherUser = msg.sender._id.toString() === decoded.userId 
          ? msg.recipient 
          : msg.sender
        const convId = [decoded.userId, otherUser._id.toString()].sort().join('_')
        
        if (!conversations[convId]) {
          conversations[convId] = {
            conversationId: convId,
            otherUser,
            lastMessage: msg,
            unreadCount: 0,
          }
        }
        
        if (!msg.isRead && msg.recipient._id.toString() === decoded.userId) {
          conversations[convId].unreadCount++
        }
      })

      return NextResponse.json({ 
        conversations: Object.values(conversations)
      })
    }
  } catch (error) {
    console.error('Get messages error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

// POST /api/messages - Send message
export async function POST(request) {
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
    const { recipient, content, attachments, relatedCourse, relatedBooking } = body

    if (!recipient || !content) {
      return NextResponse.json(
        { error: 'Recipient and content are required' },
        { status: 400 }
      )
    }

    const conversationId = [decoded.userId, recipient].sort().join('_')

    const message = await Message.create({
      sender: decoded.userId,
      recipient,
      conversationId,
      content,
      attachments: attachments || [],
      relatedCourse: relatedCourse || null,
      relatedBooking: relatedBooking || null,
    })

    await message.populate('sender', 'firstName lastName avatar')
    await message.populate('recipient', 'firstName lastName avatar')

    return NextResponse.json({ message }, { status: 201 })
  } catch (error) {
    console.error('Send message error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    )
  }
}




