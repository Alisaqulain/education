import { NextResponse } from 'next/server'
import { getAuthToken, verifyToken } from '@/lib/auth'

// File upload handler
// Supports: videos, images, documents
export async function POST(request) {
  try {
    const token = getAuthToken({ headers: request.headers, cookies: request.cookies })
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file')
    const fileType = formData.get('type') || 'general' // 'video', 'image', 'document', 'general'

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file size (100MB max for videos, 10MB for others)
    const maxSize = fileType === 'video' ? 100 * 1024 * 1024 : 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File size exceeds limit (${fileType === 'video' ? '100MB' : '10MB'})` },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = {
      video: ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'],
      image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
      document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      general: ['*'],
    }

    const allowed = allowedTypes[fileType] || allowedTypes.general
    if (!allowed.includes('*') && !allowed.includes(file.type)) {
      return NextResponse.json(
        { error: `File type not allowed. Allowed types: ${allowed.join(', ')}` },
        { status: 400 }
      )
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const fileName = `${fileType}_${timestamp}_${randomString}.${fileExtension}`

    // In production, you would upload to:
    // - AWS S3
    // - Cloudinary
    // - Google Cloud Storage
    // - Azure Blob Storage
    // For now, we'll return a mock URL structure

    // Convert file to buffer (for storage)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // In a real implementation, you would:
    // 1. Upload buffer to cloud storage
    // 2. Get the public URL
    // 3. Store metadata in database

    // Mock response with file info
    const fileUrl = `/uploads/${fileName}`
    const publicUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${fileUrl}`

    return NextResponse.json({
      success: true,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
        url: publicUrl,
        fileName: fileName,
      },
      message: 'File uploaded successfully',
    }, { status: 201 })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to upload file' },
      { status: 500 }
    )
  }
}




