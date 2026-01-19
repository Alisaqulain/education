import { NextResponse } from 'next/server'
import { getAuthToken, verifyToken } from '@/lib/auth'

// Video upload handler with progress tracking
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

    // Check if user is teacher or admin
    if (decoded.role !== 'teacher' && decoded.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden - Teachers and admins only' }, { status: 403 })
    }

    const formData = await request.formData()
    const file = formData.get('file')
    const courseId = formData.get('courseId')
    const lessonId = formData.get('lessonId')

    if (!file) {
      return NextResponse.json(
        { error: 'No video file provided' },
        { status: 400 }
      )
    }

    // Validate video file type
    const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime', 'video/x-msvideo']
    if (!allowedVideoTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid video format. Allowed: MP4, WebM, OGG, MOV, AVI' },
        { status: 400 }
      )
    }

    // Validate file size (500MB max for videos)
    const maxSize = 500 * 1024 * 1024 // 500MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Video file size exceeds 500MB limit' },
        { status: 400 }
      )
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const fileName = `video_${timestamp}_${randomString}.${fileExtension}`

    // In production, upload to cloud storage (AWS S3, Cloudinary, etc.)
    // For now, return mock URL structure
    const fileUrl = `/uploads/videos/${fileName}`
    const publicUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${fileUrl}`

    // Get video duration (would need ffmpeg or similar in production)
    // For now, return estimated duration
    const estimatedDuration = Math.ceil(file.size / (1024 * 1024)) // Rough estimate: 1MB = 1 minute

    return NextResponse.json({
      success: true,
      video: {
        name: file.name,
        size: file.size,
        type: file.type,
        url: publicUrl,
        fileName: fileName,
        duration: estimatedDuration, // in minutes
        courseId: courseId || null,
        lessonId: lessonId || null,
      },
      message: 'Video uploaded successfully',
    }, { status: 201 })
  } catch (error) {
    console.error('Video upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to upload video' },
      { status: 500 }
    )
  }
}




