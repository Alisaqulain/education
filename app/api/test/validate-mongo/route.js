import { NextResponse } from 'next/server'

// Validate MongoDB connection string format
export async function GET(request) {
  try {
    const mongoUri = process.env.MONGODB_URI || ''
    
    const validation = {
      provided: !!mongoUri,
      length: mongoUri.length,
      issues: [],
      suggestions: [],
      isValidFormat: false,
    }

    // Check if provided
    if (!mongoUri) {
      validation.issues.push('MONGODB_URI is not set in .env.local')
      return NextResponse.json(validation, { status: 400 })
    }

    // Check minimum length
    if (mongoUri.length < 20) {
      validation.issues.push('MONGODB_URI appears too short (minimum 20 characters)')
    }

    // Check for common MongoDB URI patterns
    const isMongoDBAtlas = mongoUri.includes('mongodb+srv://')
    const isLocalMongoDB = mongoUri.includes('mongodb://')
    
    if (!isMongoDBAtlas && !isLocalMongoDB) {
      validation.issues.push('MONGODB_URI must start with mongodb:// or mongodb+srv://')
    }

    // Check for required components
    if (isMongoDBAtlas) {
      if (!mongoUri.includes('@')) {
        validation.issues.push('MongoDB Atlas URI should include username:password@')
      }
      if (!mongoUri.includes('.mongodb.net')) {
        validation.issues.push('MongoDB Atlas URI should include .mongodb.net')
      }
    }

    // Check for common errors
    if (mongoUri.includes('_mongodb._tcp')) {
      validation.issues.push('Connection string appears to be a DNS SRV record, not a MongoDB URI')
      validation.suggestions.push('Make sure you\'re using the connection string, not the SRV DNS record')
    }

    // Try to parse components
    try {
      if (isMongoDBAtlas) {
        const match = mongoUri.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/?]+)/)
        if (match) {
          const username = match[1]
          const password = match[2]
          const cluster = match[3]
          
          validation.parsedComponents = {
            username: username ? username.substring(0, 3) + '***' : 'missing',
            password: password ? '***' : 'missing',
            cluster: cluster || 'missing',
          }

          // Check for placeholder values
          if (username.includes('123') && password.includes('123')) {
            validation.issues.push('Connection string may contain placeholder values (123)')
          }
        }
      }
    } catch (e) {
      validation.issues.push(`Could not parse connection string: ${e.message}`)
    }

    validation.isValidFormat = validation.issues.length === 0

    // Provide format example
    validation.correctFormat = {
      atlas: 'mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority',
      local: 'mongodb://localhost:27017/database',
      notes: [
        'Replace username, password, cluster, and database with your actual values',
        'URL-encode special characters in password',
        'Make sure your MongoDB cluster allows connections from your IP',
      ],
    }

    return NextResponse.json(validation, { 
      status: validation.isValidFormat ? 200 : 400 
    })
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: 'Validation failed',
    }, { status: 500 })
  }
}




