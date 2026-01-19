import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import { generateToken, verifyToken } from '@/lib/auth'

export async function GET(request) {
  const results = {
    timestamp: new Date().toISOString(),
    tests: {},
    success: true,
    errors: [],
  }

  // Test 1: Environment Variables
  try {
    const hasMongoUri = !!process.env.MONGODB_URI
    const hasJwtSecret = !!process.env.JWT_SECRET

    results.tests.environmentVariables = {
      MONGODB_URI: hasMongoUri ? '✓ Set' : '✗ Missing',
      JWT_SECRET: hasJwtSecret ? '✓ Set' : '✗ Missing',
      status: hasMongoUri && hasJwtSecret ? 'PASS' : 'FAIL',
    }

    if (!hasMongoUri || !hasJwtSecret) {
      results.success = false
      results.errors.push('Missing environment variables')
    }
  } catch (error) {
    results.tests.environmentVariables = {
      status: 'FAIL',
      error: error.message,
    }
    results.success = false
    results.errors.push(`Environment check failed: ${error.message}`)
  }

  // Test 2: MongoDB Connection
  try {
    const startTime = Date.now()
    await connectDB()
    const connectionTime = Date.now() - startTime

    results.tests.mongodbConnection = {
      status: 'PASS',
      message: 'Successfully connected to MongoDB',
      connectionTime: `${connectionTime}ms`,
      mongoUriLength: process.env.MONGODB_URI?.length || 0,
    }
  } catch (error) {
    results.tests.mongodbConnection = {
      status: 'FAIL',
      error: error.message,
      message: 'Failed to connect to MongoDB',
    }
    results.success = false
    results.errors.push(`MongoDB connection failed: ${error.message}`)
  }

  // Test 3: JWT Token Generation
  try {
    const testUserId = 'test_user_id'
    const testRole = 'student'
    const token = generateToken(testUserId, testRole)

    results.tests.jwtGeneration = {
      status: 'PASS',
      message: 'JWT token generated successfully',
      tokenLength: token.length,
      tokenPreview: token.substring(0, 20) + '...',
    }
  } catch (error) {
    results.tests.jwtGeneration = {
      status: 'FAIL',
      error: error.message,
      message: 'Failed to generate JWT token',
    }
    results.success = false
    results.errors.push(`JWT generation failed: ${error.message}`)
  }

  // Test 4: JWT Token Verification
  try {
    const testUserId = 'test_user_id'
    const testRole = 'student'
    const token = generateToken(testUserId, testRole)
    const decoded = verifyToken(token)

    if (decoded && decoded.userId === testUserId && decoded.role === testRole) {
      results.tests.jwtVerification = {
        status: 'PASS',
        message: 'JWT token verified successfully',
        decoded: {
          userId: decoded.userId,
          role: decoded.role,
        },
      }
    } else {
      throw new Error('Token verification failed - invalid decoded data')
    }
  } catch (error) {
    results.tests.jwtVerification = {
      status: 'FAIL',
      error: error.message,
      message: 'Failed to verify JWT token',
    }
    results.success = false
    results.errors.push(`JWT verification failed: ${error.message}`)
  }

  // Test 5: MongoDB Models (Quick check)
  try {
    if (results.tests.mongodbConnection?.status === 'PASS') {
      const mongoose = (await import('mongoose')).default
      const collections = await mongoose.connection.db?.listCollections().toArray() || []

      results.tests.mongodbModels = {
        status: 'PASS',
        message: 'MongoDB connection is active',
        collectionsCount: collections.length,
        collections: collections.map(c => c.name),
      }
    } else {
      results.tests.mongodbModels = {
        status: 'SKIP',
        message: 'Skipped - MongoDB not connected',
      }
    }
  } catch (error) {
    results.tests.mongodbModels = {
      status: 'FAIL',
      error: error.message,
      message: 'Could not list collections',
    }
    // Don't fail overall if this fails, it's just informational
  }

  // Return response with appropriate status code
  const statusCode = results.success ? 200 : 500

  return NextResponse.json(results, { status: statusCode })
}

