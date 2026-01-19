'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalTeachers: 0,
    totalStudents: 0,
    totalCourses: 0,
    totalRevenue: 0,
    pendingApprovals: 0,
    activeSessions: 0,
  })
  const [loading, setLoading] = useState(true)
  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/admin/login')
        return
      }

      // Fetch analytics
      const analyticsRes = await fetch('/api/admin/analytics', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (analyticsRes.ok) {
        const analytics = await analyticsRes.json()
        setStats({
          totalTeachers: analytics.analytics?.users?.totalTeachers || 0,
          totalStudents: analytics.analytics?.users?.totalStudents || 0,
          totalCourses: analytics.analytics?.courses?.total || 0,
          totalRevenue: analytics.analytics?.revenue?.total || 0,
          pendingApprovals: analytics.analytics?.courses?.pendingApprovals || 0,
          activeSessions: analytics.analytics?.bookings?.total || 0,
        })
      }

      // Fetch recent courses
      const coursesRes = await fetch('/api/courses?status=pending&limit=5', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (coursesRes.ok) {
        const coursesData = await coursesRes.json()
        setRecentActivity(coursesData.courses || [])
      }

      setLoading(false)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setLoading(false)
    }
  }

  const quickActions = [
    { title: 'Manage Teachers', icon: '👨‍🏫', link: '/admin/teachers', color: 'from-blue-500 to-blue-600' },
    { title: 'Manage Students', icon: '👩‍🎓', link: '/admin/students', color: 'from-green-500 to-green-600' },
    { title: 'Course Management', icon: '📚', link: '/admin/courses', color: 'from-purple-500 to-purple-600' },
    { title: 'Subject Categories', icon: '📖', link: '/admin/subjects', color: 'from-orange-500 to-orange-600' },
    { title: 'View Analytics', icon: '📊', link: '/admin/analytics', color: 'from-red-500 to-red-600' },
    { title: 'Platform Settings', icon: '⚙️', link: '/admin/settings', color: 'from-gray-500 to-gray-600' },
  ]

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Platform management and analytics overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl">👨‍🏫</span>
              </div>
              <span className="text-[10px] sm:text-xs text-green-600 font-semibold bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Active</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">{stats.totalTeachers}</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Teachers</div>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl">👩‍🎓</span>
              </div>
              <span className="text-[10px] sm:text-xs text-blue-600 font-semibold bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Growing</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">{stats.totalStudents}</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Students</div>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl">📚</span>
              </div>
              <span className="text-[10px] sm:text-xs text-purple-600 font-semibold bg-purple-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Published</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">{stats.totalCourses}</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Courses</div>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl">💰</span>
              </div>
              <span className="text-[10px] sm:text-xs text-yellow-600 font-semibold bg-yellow-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Revenue</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">${(stats.totalRevenue / 1000).toFixed(1)}K</div>
            <div className="text-xs sm:text-sm text-gray-600">Total Revenue</div>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-5 md:p-6 rounded-xl text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm opacity-90 mb-1">Pending Approvals</div>
                <div className="text-3xl sm:text-4xl font-extrabold">{stats.pendingApprovals}</div>
                <div className="text-xs sm:text-sm opacity-75 mt-2">Courses & Teachers</div>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl sm:text-3xl">⏳</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-5 md:p-6 rounded-xl text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm opacity-90 mb-1">Active Sessions</div>
                <div className="text-3xl sm:text-4xl font-extrabold">{stats.activeSessions}</div>
                <div className="text-xs sm:text-sm opacity-75 mt-2">Live Bookings</div>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl sm:text-3xl">📅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className={`bg-gradient-to-r ${action.color} p-4 sm:p-5 md:p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group`}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform flex-shrink-0">{action.icon}</div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold mb-1">{action.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90">Click to manage →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border-2 border-gray-100 shadow-lg p-4 sm:p-5 md:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Recent Activity</h2>
          {recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((course, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm sm:text-base text-gray-900 truncate">{course.title}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Status: {course.status}</div>
                  </div>
                  <Link
                    href={`/admin/courses`}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-xs sm:text-sm font-semibold whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    Review
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No pending activities</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
