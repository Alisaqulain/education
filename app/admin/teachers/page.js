'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminTeachers() {
  const router = useRouter()
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, approved, pending, rejected

  useEffect(() => {
    fetchTeachers()
  }, [filter])

  const fetchTeachers = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/admin/login')
        return
      }

      const approved = filter === 'approved' ? 'true' : filter === 'pending' ? 'false' : undefined
      const url = `/api/teachers?${approved !== undefined ? `approved=${approved}` : ''}`

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setTeachers(data.teachers || [])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching teachers:', error)
      setLoading(false)
    }
  }

  const handleApprove = async (teacherId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/teachers/${teacherId}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        fetchTeachers()
      }
    } catch (error) {
      console.error('Error approving teacher:', error)
    }
  }

  const handleReject = async (teacherId) => {
    if (!confirm('Are you sure you want to reject this teacher?')) return

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/admin/teachers/${teacherId}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        fetchTeachers()
      }
    } catch (error) {
      console.error('Error rejecting teacher:', error)
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
            Manage <span className="gradient-text">Teachers</span>
          </h1>
          <p className="text-gray-600">Review and manage teacher accounts</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">
          {['all', 'approved', 'pending'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)} ({f === 'all' ? teachers.length : teachers.filter(t => f === 'approved' ? t.teacherInfo?.isApproved : !t.teacherInfo?.isApproved).length})
            </button>
          ))}
        </div>

        {/* Teachers List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher._id} className="bg-white rounded-xl border-2 border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {teacher.firstName.charAt(0)}{teacher.lastName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {teacher.firstName} {teacher.lastName}
                    </h3>
                    <p className="text-gray-600">{teacher.email}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {teacher.teacherInfo?.isApproved ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">Approved</span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">Pending</span>
                      )}
                      {teacher.teacherInfo?.isVerified && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Verified</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {teacher.teacherInfo && (
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold">Subjects:</span>{' '}
                    {teacher.teacherInfo.subjects?.join(', ') || 'Not specified'}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Experience:</span>{' '}
                    {teacher.teacherInfo.experience?.years || 0} years
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Hourly Rate:</span> ${teacher.teacherInfo.hourlyRate || 0}/hr
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Rating:</span>{' '}
                    {teacher.teacherInfo.rating?.average || 0}/5 ({teacher.teacherInfo.rating?.count || 0} reviews)
                  </div>
                </div>
              )}

              {!teacher.teacherInfo?.isApproved && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(teacher._id)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(teacher._id)}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {teachers.length === 0 && (
          <div className="bg-white rounded-xl border-2 border-gray-100 p-12 text-center">
            <p className="text-gray-600">No teachers found</p>
          </div>
        )}
      </div>
    </div>
  )
}
