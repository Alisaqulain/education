'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function SubmitAssignment() {
  const params = useParams()
  const router = useRouter()
  const assignmentId = params.id

  const [formData, setFormData] = useState({
    answer: '',
    file: null,
    fileName: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Mock assignment data
  const assignmentsData = {
    1: {
      id: 1,
      course: 'Advanced Mathematics',
      courseId: 1,
      title: 'Calculus Problem Set 3',
      description: 'Solve the following problems related to limits and derivatives.',
      dueDate: '2024-01-25',
      points: 100,
    },
    2: {
      id: 2,
      course: 'English Conversation',
      courseId: 2,
      title: 'Essay: My Learning Journey',
      description: 'Write a 500-word essay about your English learning journey.',
      dueDate: '2024-01-22',
      points: 100,
    },
  }

  const assignment = assignmentsData[assignmentId] || assignmentsData[1]

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'file' && files && files[0]) {
      setFormData({
        ...formData,
        file: files[0],
        fileName: files[0].name,
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.answer.trim() && !formData.file) {
      newErrors.answer = 'Please provide an answer or upload a file'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setTimeout(() => {
        router.push(`/student/assignments/${assignmentId}`)
      }, 2000)
    }, 1500)
  }

  if (submitSuccess) {
    return (
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assignment Submitted!</h2>
            <p className="text-gray-600 mb-6">Your assignment has been successfully submitted.</p>
            <Link
              href={`/student/assignments/${assignmentId}`}
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              View Assignment
            </Link>
          </div>
        </div>
      </div>
    )
  }

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
            <li><Link href={`/student/assignments/${assignmentId}`} className="hover:text-primary">{assignment.title}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Submit</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Submit Assignment</h1>
          <p className="text-gray-600">
            <Link href={`/student/courses/${assignment.courseId}`} className="hover:text-primary">
              {assignment.course}
            </Link>
            {' - '}
            <Link href={`/student/assignments/${assignmentId}`} className="hover:text-primary">
              {assignment.title}
            </Link>
          </p>
        </div>

        {/* Submission Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="answer" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Answer <span className="text-red-500">*</span>
              </label>
              <textarea
                id="answer"
                name="answer"
                rows={12}
                value={formData.answer}
                onChange={handleChange}
                placeholder="Type your answer here or upload a file below..."
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.answer ? 'border-red-500' : 'border-gray-200'
                } focus:border-primary focus:outline-none transition-all resize-none`}
              />
              {errors.answer && <p className="mt-1 text-sm text-red-500">{errors.answer}</p>}
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload File (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  className="hidden"
                />
                <label htmlFor="file" className="cursor-pointer">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-1">
                    {formData.fileName || 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)</p>
                </label>
              </div>
              {formData.fileName && (
                <p className="mt-2 text-sm text-green-600 font-medium">✓ {formData.fileName}</p>
              )}
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold mb-1">Before submitting:</p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700">
                    <li>Review your answer carefully</li>
                    <li>Make sure all required fields are completed</li>
                    <li>Check that your file upload is correct</li>
                    <li>You cannot edit your submission after submitting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assignment'}
              </button>
              <Link
                href={`/student/assignments/${assignmentId}`}
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

