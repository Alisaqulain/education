import { NextResponse } from 'next/server'
import { generateToken, verifyToken } from '@/lib/auth'

// Test JWT authentication
export async function GET(request) {
  try {
    const testUserId = 'test_123456'
    const testRole = 'student'

    // Generate token
    const token = generateToken(testUserId, testRole)

    // Verify token
    const decoded = verifyToken(token)

    if (!decoded) {
      throw new Error('Token verification returned null')
    }

    return NextResponse.json({
      success: true,
      message: 'JWT authentication working!',
      test: {
        original: {
          userId: testUserId,
          role: testRole,
        },
        decoded: {
          userId: decoded.userId,
          role: decoded.role,
        },
        tokenValid: decoded.userId === testUserId && decoded.role === testRole,
      },
      token: {
        generated: true,
        length: token.length,
        preview: token.substring(0, 30) + '...',
      },
      environment: {
        jwtSecretProvided: !!process.env.JWT_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Auth test error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: 'JWT authentication test failed',
        details: {
          jwtSecretProvided: !!process.env.JWT_SECRET,
          jwtSecretLength: process.env.JWT_SECRET?.length || 0,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

