'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function LessonDetail() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id
  const lessonId = params.lessonId

  // Mock lesson data
  const lessonsData = {
    9: {
      id: 9,
      courseId: 1,
      courseTitle: 'Advanced Mathematics',
      title: 'Linear Algebra Foundations',
      duration: '60 min',
      type: 'video',
      description: 'Learn the fundamentals of linear algebra including vectors, matrices, and basic operations.',
      videoUrl: null, // Placeholder for video URL
      completed: false,
      content: `# Linear Algebra Foundations

## Introduction

Linear algebra is a fundamental branch of mathematics that studies vectors, vector spaces, linear transformations, and systems of linear equations.

## Key Concepts

### 1. Vectors
- A vector is a quantity that has both magnitude and direction
- Represented as: **v** = (v₁, v₂, ..., vₙ)
- Basic operations: addition, scalar multiplication

### 2. Matrices
- A matrix is a rectangular array of numbers
- Represented as: A = [aᵢⱼ]
- Matrix operations: addition, multiplication, transpose

### 3. Vector Spaces
- A collection of vectors that can be added and multiplied by scalars
- Must satisfy closure properties

## Practice Problems

1. Add the vectors: (1, 2) + (3, 4)
2. Multiply the matrix by a scalar: 2 × [1 2; 3 4]
3. Find the transpose of: [1 2 3; 4 5 6]`,
    },
  }

  const lesson = lessonsData[lessonId] || {
    id: parseInt(lessonId),
    courseId: parseInt(courseId),
    courseTitle: 'Advanced Mathematics',
    title: `Lesson ${lessonId}`,
    duration: '45 min',
    type: 'video',
    description: 'This is a lesson in the course.',
    completed: false,
    content: 'Lesson content will be displayed here.',
  }

  const [isCompleted, setIsCompleted] = useState(lesson.completed)
  const [isCompleting, setIsCompleting] = useState(false)

  const handleComplete = () => {
    setIsCompleting(true)
    setTimeout(() => {
      setIsCompleted(true)
      setIsCompleting(false)
    }, 1000)
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/student/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/student/my-courses" className="hover:text-primary">My Courses</Link></li>
            <li>/</li>
            <li><Link href={`/student/courses/${courseId}`} className="hover:text-primary">{lesson.courseTitle}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{lesson.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  {lesson.type === 'video' && '▶️'}
                  {lesson.type === 'exercise' && '📝'}
                  {lesson.type === 'project' && '🚀'}
                  <span>{lesson.type}</span>
                </span>
                <span>•</span>
                <span>{lesson.duration}</span>
                <span>•</span>
                <Link href={`/student/courses/${courseId}`} className="text-primary hover:underline">
                  {lesson.courseTitle}
                </Link>
              </div>
            </div>

            {/* Video/Lesson Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              {lesson.type === 'video' ? (
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-400">Video Player Placeholder</p>
                    <p className="text-sm text-gray-500 mt-2">Video content will be displayed here</p>
                  </div>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{lesson.content || lesson.description}</div>
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Lesson Description</h3>
                <p className="text-gray-700 leading-relaxed">{lesson.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Actions</h3>
              <div className="space-y-3">
                {!isCompleted ? (
                  <button
                    onClick={handleComplete}
                    disabled={isCompleting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCompleting ? 'Marking...' : 'Mark as Complete'}
                  </button>
                ) : (
                  <div className="w-full bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold text-center">
                    ✓ Completed
                  </div>
                )}
                <Link
                  href={`/student/courses/${courseId}`}
                  className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center block"
                >
                  Back to Course
                </Link>
              </div>
            </div>

            {/* Lesson Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lesson Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold text-gray-900 capitalize">{lesson.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">{lesson.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-semibold ${isCompleted ? 'text-green-600' : 'text-gray-600'}`}>
                    {isCompleted ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

