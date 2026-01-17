'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function CourseDetail() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id

  // Mock course data - in a real app, this would be fetched from an API
  const coursesData = {
    1: {
      id: 1,
      title: 'Advanced Mathematics',
      teacher: 'Dr. Sarah Williams',
      teacherId: 101,
      description: 'Master advanced mathematical concepts including calculus, linear algebra, and differential equations. Perfect for students preparing for university-level mathematics.',
      progress: 65,
      lessons: 12,
      completed: 8,
      duration: '12 weeks',
      level: 'Advanced',
      subject: 'Mathematics',
      rating: 4.8,
      reviews: 234,
      image: '/api/placeholder/800/400',
      enrolled: 1250,
      price: 299,
    },
    2: {
      id: 2,
      title: 'English Conversation',
      teacher: 'Ms. Emma Thompson',
      teacherId: 102,
      description: 'Improve your English speaking and conversation skills through interactive sessions. Practice real-world scenarios and build confidence in speaking English fluently.',
      progress: 40,
      lessons: 10,
      completed: 4,
      duration: '10 weeks',
      level: 'Intermediate',
      subject: 'English',
      rating: 4.7,
      reviews: 189,
      image: '/api/placeholder/800/400',
      enrolled: 890,
      price: 199,
    },
    3: {
      id: 3,
      title: 'Python Programming',
      teacher: 'Dr. Michael Chen',
      teacherId: 103,
      description: 'Learn Python programming from basics to advanced topics. Build real-world projects and develop the skills needed for a career in software development.',
      progress: 90,
      lessons: 15,
      completed: 13,
      duration: '15 weeks',
      level: 'Beginner to Advanced',
      subject: 'Programming',
      rating: 4.9,
      reviews: 456,
      image: '/api/placeholder/800/400',
      enrolled: 2100,
      price: 399,
    },
  }

  const course = coursesData[courseId] || coursesData[1]

  const lessons = [
    { id: 1, title: 'Introduction to Calculus', duration: '45 min', completed: true, type: 'video' },
    { id: 2, title: 'Limits and Continuity', duration: '50 min', completed: true, type: 'video' },
    { id: 3, title: 'Derivatives Basics', duration: '55 min', completed: true, type: 'video' },
    { id: 4, title: 'Practice Session: Derivatives', duration: '30 min', completed: true, type: 'exercise' },
    { id: 5, title: 'Integration Techniques', duration: '60 min', completed: true, type: 'video' },
    { id: 6, title: 'Applications of Integration', duration: '50 min', completed: true, type: 'video' },
    { id: 7, title: 'Differential Equations Intro', duration: '45 min', completed: true, type: 'video' },
    { id: 8, title: 'Solving First-Order DEs', duration: '55 min', completed: true, type: 'video' },
    { id: 9, title: 'Linear Algebra Foundations', duration: '60 min', completed: false, type: 'video' },
    { id: 10, title: 'Matrix Operations', duration: '50 min', completed: false, type: 'video' },
    { id: 11, title: 'Eigenvalues and Eigenvectors', duration: '60 min', completed: false, type: 'video' },
    { id: 12, title: 'Final Project & Review', duration: '90 min', completed: false, type: 'project' },
  ]

  const currentLesson = lessons.find(lesson => !lesson.completed) || lessons[lessons.length - 1]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/student/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/student/my-courses" className="hover:text-primary">My Courses</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{course.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                    <p className="text-gray-600 mb-4">by <Link href={`/teachers/${course.teacherId}`} className="text-primary hover:underline">{course.teacher}</Link></p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-700 font-semibold">{course.rating}</span>
                        <span className="text-gray-500">({course.reviews})</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{course.enrolled.toLocaleString()} students</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{course.level}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Your Progress</span>
                    <span className="font-semibold text-primary">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{course.completed} of {course.lessons} lessons completed</p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">About This Course</h2>
                  <p className="text-gray-700 leading-relaxed">{course.description}</p>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
              <div className="space-y-3">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      lesson.completed
                        ? 'bg-green-50 border-green-200'
                        : lesson.id === currentLesson.id
                        ? 'bg-primary/5 border-primary'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        lesson.completed
                          ? 'bg-green-500 text-white'
                          : lesson.id === currentLesson.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {lesson.completed ? '✓' : index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          lesson.completed ? 'text-gray-700' : 'text-gray-900'
                        }`}>
                          {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-3 mt-1 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            {lesson.type === 'video' && '▶️'}
                            {lesson.type === 'exercise' && '📝'}
                            {lesson.type === 'project' && '🚀'}
                            <span>{lesson.type}</span>
                          </span>
                          <span>•</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                    {lesson.completed ? (
                      <span className="text-green-600 font-semibold text-sm">Completed</span>
                    ) : lesson.id === currentLesson.id ? (
                      <Link
                        href={`/student/courses/${courseId}/lessons/${lesson.id}`}
                        className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                      >
                        Continue
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm">Locked</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {currentLesson && (
                  <Link
                    href={`/student/courses/${courseId}/lessons/${currentLesson.id}`}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center block"
                  >
                    Continue Learning
                  </Link>
                )}
                <Link
                  href={`/student/courses/${courseId}/assignments`}
                  className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center block"
                >
                  View Assignments
                </Link>
                <Link
                  href={`/teachers/${course.teacherId}`}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all text-center block"
                >
                  View Teacher Profile
                </Link>
              </div>
            </div>

            {/* Course Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-semibold text-gray-900">{course.lessons}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Level</span>
                  <span className="font-semibold text-gray-900">{course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subject</span>
                  <span className="font-semibold text-gray-900">{course.subject}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

