'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminStudents() {
  const router = useRouter()
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/admin/login')
        return
      }

      const response = await fetch('/api/admin/students', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setStudents(data.students || [])
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching students:', error)
      setLoading(false)
    }
  }

  const filteredStudents = students.filter(student =>
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            Manage <span className="gradient-text">Students</span>
          </h1>
          <p className="text-gray-600">View and manage student accounts</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search students by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
          />
        </div>

        {/* Students List */}
        <div className="bg-white rounded-xl border-2 border-gray-100 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Student</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Enrolled Courses</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                          {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {student.firstName} {student.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{student.email}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {student.studentInfo?.enrolledCourses?.length || 0} courses
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {student.isActive ? (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
                      ) : (
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Inactive</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="bg-white rounded-xl border-2 border-gray-100 p-12 text-center">
            <p className="text-gray-600">No students found</p>
          </div>
        )}
      </div>
    </div>
  )
}
