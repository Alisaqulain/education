import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

// Simple connection test
export async function GET(request) {
  try {
    // Test MongoDB connection
    const db = await connectDB()
    
    // Try a simple query to ensure database is accessible
    const userCount = await User.countDocuments({})
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful!',
      database: {
        name: db.connection?.name || 'Connected',
        readyState: db.connection?.readyState || 0,
        readyStateText: getReadyStateText(db.connection?.readyState),
      },
      test: {
        userCount,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Connection test error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: 'MongoDB connection failed',
        details: {
          mongoUriProvided: !!process.env.MONGODB_URI,
          mongoUriLength: process.env.MONGODB_URI?.length || 0,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

function getReadyStateText(state) {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  }
  return states[state] || 'unknown'
}

