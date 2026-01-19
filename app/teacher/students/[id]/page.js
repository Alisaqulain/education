'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function StudentDetail() {
  const params = useParams()
  const studentId = params.id

  // Mock student data
  const studentsData = {
    1: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      enrolledCourses: ['Advanced Mathematics', 'English Conversation'],
      totalLessons: 22,
      completedLessons: 12,
      assignmentsSubmitted: 8,
      averageGrade: 92,
      lastActive: '2024-01-20',
      joinedDate: '2024-01-05',
    },
    2: {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      enrolledCourses: ['Python Programming'],
      totalLessons: 15,
      completedLessons: 13,
      assignmentsSubmitted: 10,
      averageGrade: 95,
      lastActive: '2024-01-21',
      joinedDate: '2024-01-10',
    },
  }

  const student = studentsData[studentId] || studentsData[1]
  const progressPercentage = Math.round((student.completedLessons / student.totalLessons) * 100)

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/teacher/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/teacher/my-students" className="hover:text-primary">My Students</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{student.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
                  <p className="text-gray-600 mb-4">{student.email}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span>Joined: {new Date(student.joinedDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>Last Active: {new Date(student.lastActive).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  href={`/teacher/messages?student=${studentId}`}
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-sm"
                >
                  Message Student
                </Link>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{student.completedLessons}/{student.totalLessons}</div>
                  <div className="text-sm text-gray-600">Lessons Completed</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{student.assignmentsSubmitted}</div>
                  <div className="text-sm text-gray-600">Assignments Submitted</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{student.averageGrade}%</div>
                  <div className="text-sm text-gray-600">Average Grade</div>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-semibold text-primary">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Enrolled Courses</h2>
              <div className="space-y-3">
                {student.enrolledCourses.map((course, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-1">{course}</h3>
                    <p className="text-sm text-gray-600">View course progress and assignments</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Student Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Email</p>
                  <p className="font-semibold text-gray-900">{student.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Member Since</p>
                  <p className="font-semibold text-gray-900">{new Date(student.joinedDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Last Active</p>
                  <p className="font-semibold text-gray-900">{new Date(student.lastActive).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <Link
                  href={`/teacher/messages?student=${studentId}`}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center block"
                >
                  Message Student
                </Link>
                <Link
                  href={`/teacher/assignments?student=${studentId}`}
                  className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center block"
                >
                  View Assignments
                </Link>
                <Link
                  href="/teacher/my-students"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all text-center block"
                >
                  Back to Students
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






