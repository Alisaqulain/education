import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

// Debug MongoDB connection string (without exposing password)
export async function GET(request) {
  try {
    const mongoUri = process.env.MONGODB_URI || ''
    
    const debug = {
      timestamp: new Date().toISOString(),
      hasUri: !!mongoUri,
      uriLength: mongoUri.length,
      analysis: {},
      issues: [],
      suggestions: [],
    }

    if (!mongoUri) {
      return NextResponse.json({
        ...debug,
        error: 'MONGODB_URI is not set',
      }, { status: 400 })
    }

    // Analyze connection string structure
    const analysis = {
      startsWithMongodbSrv: mongoUri.startsWith('mongodb+srv://'),
      startsWithMongodb: mongoUri.startsWith('mongodb://'),
      hasAtSymbol: mongoUri.includes('@'),
      hasMongodbNet: mongoUri.includes('.mongodb.net'),
      hasDatabaseName: false,
      hasQueryParams: mongoUri.includes('?'),
      containsSrvRecord: mongoUri.includes('_mongodb._tcp'),
      containsPlaceholders: mongoUri.includes('<') || mongoUri.includes('>'),
    }

    // Extract parts (safely, without exposing password)
    let parsed = {}
    try {
      if (analysis.startsWithMongodbSrv) {
        // Extract username (first part before :)
        const userPassMatch = mongoUri.match(/mongodb\+srv:\/\/([^:]+):/)
        if (userPassMatch) {
          const username = userPassMatch[1]
          parsed.usernameLength = username.length
          parsed.usernamePreview = username.length > 3 
            ? username.substring(0, 3) + '***' 
            : '***'
        }

        // Extract cluster name
        const clusterMatch = mongoUri.match(/@([^/]+)/)
        if (clusterMatch) {
          parsed.cluster = clusterMatch[1]
          analysis.hasClusterName = true
          
          // Check for common issues in cluster name
          if (parsed.cluster.includes('_mongodb._tcp')) {
            analysis.issues.push('Cluster name contains "_mongodb._tcp" - this is wrong!')
            debug.suggestions.push('You may have copied the wrong connection string. Use the connection string from MongoDB Atlas, not the SRV record.')
          }
          if (parsed.cluster.match(/^\d+$/)) {
            analysis.issues.push('Cluster appears to be just numbers - likely wrong format')
          }
        }

        // Extract database name
        const dbMatch = mongoUri.match(/\.net\/([^?]+)/)
        if (dbMatch) {
          parsed.databaseName = dbMatch[1]
          analysis.hasDatabaseName = parsed.databaseName.length > 0 && !parsed.databaseName.includes('<')
        } else {
          analysis.issues.push('No database name found in connection string')
          debug.suggestions.push('Add your database name before the "?" in the connection string: mongodb+srv://...@cluster.mongodb.net/YOUR_DATABASE_NAME?retryWrites=true&w=majority')
        }
      }

      parsed = { ...parsed }
    } catch (e) {
      analysis.parseError = e.message
    }

    debug.analysis = analysis
    debug.parsed = parsed

    // Check for common errors
    if (analysis.containsSrvRecord) {
      debug.issues.push('Connection string contains "_mongodb._tcp" - This is a DNS record, not a connection string!')
      debug.suggestions.push('Get the connection string from MongoDB Atlas: Cluster → Connect → Drivers → Node.js')
    }

    if (analysis.containsPlaceholders) {
      debug.issues.push('Connection string contains placeholders (<username>, <password>) that need to be replaced')
      debug.suggestions.push('Replace <username> and <password> with your actual MongoDB credentials')
    }

    if (!analysis.startsWithMongodbSrv && !analysis.startsWithMongodb) {
      debug.issues.push('Connection string does not start with mongodb:// or mongodb+srv://')
    }

    if (!analysis.hasAtSymbol && analysis.startsWithMongodbSrv) {
      debug.issues.push('Missing "@" symbol - connection string may be missing username/password')
    }

    if (!analysis.hasMongodbNet && analysis.startsWithMongodbSrv) {
      debug.issues.push('Missing ".mongodb.net" - connection string format may be incorrect')
    }

    if (!analysis.hasDatabaseName) {
      debug.suggestions.push('Make sure your connection string includes the database name: ...mongodb.net/edgen-institute?...')
    }

    // Try to identify specific error patterns
    const errorPatterns = {
      'querySrv ENOTFOUND _mongodb._tcp.1234': {
        issue: 'Connection string contains "_mongodb._tcp" or has wrong cluster format',
        fix: 'Use the correct connection string format: mongodb+srv://username:password@cluster-name.mongodb.net/database?retryWrites=true&w=majority'
      }
    }

    // Try actual connection with error capture
    debug.connectionTest = 'Skipped - use /api/test/connection for full connection test'

    // Provide correct format example
    debug.correctFormatExample = {
      atlas: 'mongodb+srv://username:password@cluster0.abc123.mongodb.net/edgen-institute?retryWrites=true&w=majority',
      explanation: 'Format: mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE?OPTIONS',
      steps: [
        '1. Go to MongoDB Atlas → Your Cluster → Connect',
        '2. Click "Drivers" tab',
        '3. Choose Node.js',
        '4. Copy the connection string',
        '5. Replace <username> and <password> with your actual credentials',
        '6. Add your database name before the "?" (e.g., /edgen-institute?)',
        '7. Paste into .env.local as MONGODB_URI=...',
        '8. Restart your dev server'
      ]
    }

    return NextResponse.json(debug)
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
}




