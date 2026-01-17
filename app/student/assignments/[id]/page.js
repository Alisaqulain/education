'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function AssignmentDetail() {
  const params = useParams()
  const assignmentId = params.id

  // Mock assignment data
  const assignmentsData = {
    1: {
      id: 1,
      course: 'Advanced Mathematics',
      courseId: 1,
      title: 'Calculus Problem Set 3',
      description: 'Solve the following problems related to limits and derivatives. Show all your work and provide step-by-step explanations for each solution.',
      dueDate: '2024-01-25',
      points: 100,
      submitted: true,
      grade: 92,
      submittedDate: '2024-01-23',
      status: 'graded',
      teacherFeedback: 'Excellent work! Your solutions are clear and well-explained. Minor error in problem 3, but overall great understanding of the concepts.',
      questions: [
        { id: 1, question: 'Find the limit as x approaches 2 of (x² - 4)/(x - 2)', points: 20 },
        { id: 2, question: 'Find the derivative of f(x) = 3x³ + 2x² - 5x + 1', points: 25 },
        { id: 3, question: 'Use the chain rule to find the derivative of g(x) = (2x + 1)⁴', points: 30 },
        { id: 4, question: 'Solve the optimization problem: Find the maximum area of a rectangle with perimeter 20 units', points: 25 },
      ],
    },
    2: {
      id: 2,
      course: 'English Conversation',
      courseId: 2,
      title: 'Essay: My Learning Journey',
      description: 'Write a 500-word essay about your English learning journey. Include challenges you faced, strategies you used, and your goals for the future.',
      dueDate: '2024-01-22',
      points: 100,
      submitted: true,
      grade: 88,
      submittedDate: '2024-01-20',
      status: 'graded',
      teacherFeedback: 'Well-written essay with good structure and clear examples. Work on expanding your vocabulary and using more varied sentence structures.',
    },
  }

  const assignment = assignmentsData[assignmentId] || assignmentsData[1]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/student/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/student/assignments" className="hover:text-primary">Assignments</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{assignment.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{assignment.title}</h1>
              <p className="text-gray-600">
                <Link href={`/student/courses/${assignment.courseId}`} className="hover:text-primary">
                  {assignment.course}
                </Link>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {assignment.status === 'graded' && (
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold text-sm">
                  Graded: {assignment.grade}%
                </span>
              )}
              {assignment.status === 'submitted' && (
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold text-sm">
                  Submitted
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Assignment Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Due Date</h3>
              <p className="text-lg font-bold text-gray-900">{new Date(assignment.dueDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Points</h3>
              <p className="text-lg font-bold text-gray-900">{assignment.points} points</p>
            </div>
            {assignment.submitted && (
              <>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Submitted</h3>
                  <p className="text-lg font-bold text-gray-900">{new Date(assignment.submittedDate).toLocaleDateString()}</p>
                </div>
                {assignment.grade && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Grade</h3>
                    <p className="text-lg font-bold text-primary">{assignment.grade}%</p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Assignment Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{assignment.description}</p>
          </div>

          {assignment.questions && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Questions</h3>
              <div className="space-y-4">
                {assignment.questions.map((q, index) => (
                  <div key={q.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-600">Question {index + 1}</span>
                      <span className="text-sm font-semibold text-primary">{q.points} points</span>
                    </div>
                    <p className="text-gray-900">{q.question}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {assignment.teacherFeedback && (
            <div className="mt-6 p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Teacher Feedback</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{assignment.teacherFeedback}</p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            {!assignment.submitted ? (
              <Link
                href={`/student/assignments/${assignmentId}/submit`}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Submit Assignment
              </Link>
            ) : (
              <Link
                href={`/student/assignments/${assignmentId}/review`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Review Submission
              </Link>
            )}
            <Link
              href="/student/assignments"
              className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Back to Assignments
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

