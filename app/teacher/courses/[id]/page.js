'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function TeacherCourseDetail() {
  const params = useParams()
  const courseId = params.id

  // Mock course data
  const coursesData = {
    1: {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Master advanced mathematical concepts including calculus, linear algebra, and differential equations.',
      status: 'published',
      enrolled: 1250,
      lessons: 12,
      price: 299,
      rating: 4.8,
      reviews: 234,
      createdAt: '2024-01-01',
    },
    2: {
      id: 2,
      title: 'English Conversation',
      description: 'Improve your English speaking and conversation skills through interactive sessions.',
      status: 'published',
      enrolled: 890,
      lessons: 10,
      price: 199,
      rating: 4.7,
      reviews: 189,
      createdAt: '2024-01-05',
    },
  }

  const course = coursesData[courseId] || coursesData[1]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/teacher/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/teacher/courses" className="hover:text-primary">Courses</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{course.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full font-semibold ${
                      course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                    </span>
                    <span className="text-gray-600">Created: {new Date(course.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  href={`/teacher/courses/${courseId}/edit`}
                  className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-sm"
                >
                  Edit Course
                </Link>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.enrolled}</div>
                <div className="text-sm text-gray-600">Enrolled Students</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.lessons}</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.rating}</div>
                <div className="text-sm text-gray-600">Average Rating ({course.reviews} reviews)</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href={`/teacher/courses/${courseId}/edit`}
                  className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Edit Course</h3>
                  <p className="text-sm text-gray-600">Update course details and content</p>
                </Link>
                <Link
                  href={`/teacher/my-students?course=${courseId}`}
                  className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">View Students</h3>
                  <p className="text-sm text-gray-600">Manage enrolled students</p>
                </Link>
                <Link
                  href={`/teacher/assignments?course=${courseId}`}
                  className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Assignments</h3>
                  <p className="text-sm text-gray-600">Create and grade assignments</p>
                </Link>
                <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">Analytics</h3>
                  <p className="text-sm text-gray-600">View course performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold text-gray-900">${course.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-semibold text-gray-900">{course.lessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className={`font-semibold ${
                    course.status === 'published' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold text-gray-900">{course.rating} ⭐</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <Link
                  href={`/teacher/courses/${courseId}/edit`}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center block"
                >
                  Edit Course
                </Link>
                <Link
                  href="/teacher/courses"
                  className="w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center block"
                >
                  Back to Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

