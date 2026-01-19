'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function CourseAssignments() {
  const params = useParams()
  const courseId = params.id

  // Mock course and assignment data
  const coursesData = {
    1: { id: 1, title: 'Advanced Mathematics', teacher: 'Dr. Sarah Williams' },
    2: { id: 2, title: 'English Conversation', teacher: 'Ms. Emma Thompson' },
    3: { id: 3, title: 'Python Programming', teacher: 'Dr. Michael Chen' },
  }

  const course = coursesData[courseId] || coursesData[1]

  const assignments = [
    {
      id: 1,
      title: 'Calculus Problem Set 1',
      description: 'Solve problems related to limits and derivatives. Submit your solutions with step-by-step explanations.',
      dueDate: '2024-01-25',
      points: 100,
      submitted: true,
      grade: 92,
      submittedDate: '2024-01-23',
      status: 'graded',
    },
    {
      id: 2,
      title: 'Integration Techniques Assignment',
      description: 'Practice various integration methods including substitution and integration by parts.',
      dueDate: '2024-02-01',
      points: 100,
      submitted: true,
      grade: 88,
      submittedDate: '2024-01-29',
      status: 'graded',
    },
    {
      id: 3,
      title: 'Differential Equations Project',
      description: 'Create a real-world application using differential equations. Include a written report and code if applicable.',
      dueDate: '2024-02-10',
      points: 150,
      submitted: false,
      status: 'pending',
    },
    {
      id: 4,
      title: 'Linear Algebra Final Exam',
      description: 'Comprehensive exam covering all linear algebra topics from the course.',
      dueDate: '2024-02-15',
      points: 200,
      submitted: false,
      status: 'upcoming',
    },
  ]

  const upcomingAssignments = assignments.filter(a => !a.submitted)
  const completedAssignments = assignments.filter(a => a.submitted)

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/student/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/student/my-courses" className="hover:text-primary">My Courses</Link></li>
            <li>/</li>
            <li><Link href={`/student/courses/${courseId}`} className="hover:text-primary">{course.title}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Assignments</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="gradient-text">Assignments</span>
              </h1>
              <p className="text-gray-600">{course.title} - {course.teacher}</p>
            </div>
            <Link
              href={`/student/courses/${courseId}`}
              className="text-primary hover:text-primary-dark font-medium text-sm flex items-center space-x-1"
            >
              <span>← Back to Course</span>
            </Link>
          </div>
        </div>

        {/* Upcoming Assignments */}
        {upcomingAssignments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white rounded-xl border-2 border-yellow-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          Due {new Date(assignment.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{assignment.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="font-semibold">{assignment.points} points</span>
                        <span>•</span>
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/student/assignments/${assignment.id}/submit`}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      Submit Assignment
                    </Link>
                    <Link
                      href={`/student/assignments/${assignment.id}`}
                      className="px-6 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Assignments */}
        {completedAssignments.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Completed Assignments</h2>
            <div className="space-y-4">
              {completedAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white rounded-xl border-2 border-green-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{assignment.title}</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                          Graded
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{assignment.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="font-semibold">{assignment.points} points</span>
                        <span>•</span>
                        <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Grade:</span>
                        <span className="text-xl font-bold text-primary">{assignment.grade}%</span>
                        <span className="text-sm text-gray-500">({assignment.grade}/{assignment.points} points)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/student/assignments/${assignment.id}`}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      View Feedback
                    </Link>
                    <Link
                      href={`/student/assignments/${assignment.id}/review`}
                      className="px-6 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      Review Submission
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {assignments.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 mb-4">No assignments available for this course yet</p>
            <Link
              href={`/student/courses/${courseId}`}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <span>Back to Course</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}






