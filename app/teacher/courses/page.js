'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TeacherCourses() {
  const router = useRouter()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/teacher/login')
        return
      }

      const response = await fetch('/api/courses?teacher=me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setCourses(data.courses || [])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching courses:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
              My <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-gray-600">Manage and edit your courses</p>
          </div>
          <Link
            href="/teacher/create-course"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
          >
            + Create Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-gray-100 shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No courses yet</h3>
            <p className="text-gray-600 mb-6">Create your first course to start teaching!</p>
            <Link
              href="/teacher/create-course"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              <span>Create Your First Course</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all shadow-lg hover:shadow-xl overflow-hidden">
                {course.thumbnail && (
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1 line-clamp-2">{course.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ml-2 ${
                      course.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : course.status === 'approved'
                        ? 'bg-blue-100 text-blue-800'
                        : course.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Enrollments</span>
                      <span className="font-semibold">{course.totalEnrollments || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price</span>
                      <span className="font-bold text-primary">${course.price}</span>
                    </div>
                    {course.rating && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Rating</span>
                        <span className="font-semibold">{course.rating.average?.toFixed(1) || 0}/5 ({course.rating.count || 0})</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/teacher/courses/${course._id}`}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-center text-sm"
                    >
                      Manage
                    </Link>
                    <Link
                      href={`/teacher/courses/${course._id}/edit`}
                      className="px-4 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
