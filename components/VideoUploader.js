'use client'

import { useState, useRef } from 'react'

export default function VideoUploader({ onUploadComplete, courseId, lessonId }) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [uploadedVideo, setUploadedVideo] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg', 'video/quicktime', 'video/x-msvideo']
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid video format. Please upload MP4, WebM, OGG, MOV, or AVI files.')
      return
    }

    // Validate file size (500MB max)
    const maxSize = 500 * 1024 * 1024
    if (file.size > maxSize) {
      setError('Video file size exceeds 500MB limit. Please compress or use a smaller file.')
      return
    }

    setError('')
    await uploadVideo(file)
  }

  const uploadVideo = async (file) => {
    setUploading(true)
    setProgress(0)

    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Please login to upload videos')
      }

      const formData = new FormData()
      formData.append('file', file)
      if (courseId) formData.append('courseId', courseId)
      if (lessonId) formData.append('lessonId', lessonId)

      const xhr = new XMLHttpRequest()

      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100
          setProgress(Math.round(percentComplete))
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status === 201) {
          const response = JSON.parse(xhr.responseText)
          setUploadedVideo(response.video)
          setUploading(false)
          if (onUploadComplete) {
            onUploadComplete(response.video)
          }
        } else {
          const error = JSON.parse(xhr.responseText)
          throw new Error(error.error || 'Upload failed')
        }
      })

      xhr.addEventListener('error', () => {
        throw new Error('Upload failed. Please try again.')
      })

      xhr.open('POST', '/api/upload/video')
      xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      xhr.send(formData)
    } catch (error) {
      setError(error.message)
      setUploading(false)
      setProgress(0)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="w-full">
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 hover:border-primary transition-colors">
        {!uploadedVideo ? (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/mp4,video/webm,video/ogg,video/quicktime,video/x-msvideo"
              onChange={handleFileSelect}
              className="hidden"
              disabled={uploading}
            />

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Video</h3>
              <p className="text-sm text-gray-600 mb-4">
                Select a video file (MP4, WebM, OGG, MOV, AVI)
              </p>
              <p className="text-xs text-gray-500 mb-4">Maximum file size: 500MB</p>

              {uploading && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">Uploading... {progress}%</p>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>{uploading ? 'Uploading...' : 'Choose Video File'}</span>
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Video Uploaded Successfully!</h3>
            <p className="text-sm text-gray-600 mb-4">{uploadedVideo.name}</p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
              <span>Size: {formatFileSize(uploadedVideo.size)}</span>
              <span>•</span>
              <span>Duration: ~{uploadedVideo.duration} min</span>
            </div>
            <button
              onClick={() => {
                setUploadedVideo(null)
                setProgress(0)
                setError('')
                if (fileInputRef.current) fileInputRef.current.value = ''
              }}
              className="text-primary hover:text-primary-dark font-semibold text-sm"
            >
              Upload Another Video
            </button>
          </div>
        )}
      </div>
    </div>
  )
}




