'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminCourses() {
  const router = useRouter()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, pending, approved, rejected

  useEffect(() => {
    fetchCourses()
  }, [filter])

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/admin/login')
        return
      }

      const status = filter === 'all' ? undefined : filter
      const url = `/api/courses?${status ? `status=${status}` : 'status=all'}`

      const response = await fetch(url, {
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

  const handleApprove = async (courseId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/courses/${courseId}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        fetchCourses()
      }
    } catch (error) {
      console.error('Error approving course:', error)
    }
  }

  const handleReject = async (courseId) => {
    if (!confirm('Are you sure you want to reject this course?')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/courses/${courseId}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        fetchCourses()
      }
    } catch (error) {
      console.error('Error rejecting course:', error)
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
        <div className="mb-8">
          <Link href="/admin/dashboard" className="text-primary hover:text-primary-dark mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Manage <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-gray-600">Review and manage course catalog</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">
          {['all', 'pending', 'approved', 'published'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)} ({f === 'all' ? courses.length : courses.filter(c => f === 'pending' ? c.status === 'pending' : f === 'approved' ? c.status === 'approved' : c.status === 'published').length})
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white rounded-xl border-2 border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all">
              {course.thumbnail && (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    course.status === 'published' ? 'bg-green-100 text-green-700' :
                    course.status === 'approved' ? 'bg-blue-100 text-blue-700' :
                    course.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{course.subject}</span>
                  <span className="font-bold text-primary">${course.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  Teacher: {course.teacher?.firstName} {course.teacher?.lastName}
                </div>
                {course.status === 'pending' && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(course._id)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(course._id)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      Reject
                    </button>
                  </div>
                )}
                {course.status === 'approved' && (
                  <button
                    onClick={() => {
                      // Publish course
                      fetch(`/api/courses/${course._id}`, {
                        method: 'PUT',
                        headers: {
                          'Authorization': `Bearer ${localStorage.getItem('token')}`,
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: 'published' }),
                      }).then(() => fetchCourses())
                    }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                  >
                    Publish
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="bg-white rounded-xl border-2 border-gray-100 p-12 text-center">
            <p className="text-gray-600">No courses found</p>
          </div>
        )}
      </div>
    </div>
  )
}
