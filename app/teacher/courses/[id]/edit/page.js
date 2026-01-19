'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function EditCourse() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id

  // Mock course data
  const coursesData = {
    1: {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Master advanced mathematical concepts including calculus, linear algebra, and differential equations.',
      price: 299,
      status: 'published',
    },
    2: {
      id: 2,
      title: 'English Conversation',
      description: 'Improve your English speaking and conversation skills through interactive sessions.',
      price: 199,
      status: 'published',
    },
  }

  const courseData = coursesData[courseId] || coursesData[1]

  const [formData, setFormData] = useState({
    title: courseData.title,
    description: courseData.description,
    price: courseData.price,
    status: courseData.status,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'Course title is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Course description is required'
    }
    if (!formData.price || formData.price < 0) {
      newErrors.price = 'Valid price is required'
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
        router.push(`/teacher/courses/${courseId}`)
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Updated!</h2>
            <p className="text-gray-600 mb-6">Your course has been successfully updated.</p>
            <Link
              href={`/teacher/courses/${courseId}`}
              className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              View Course
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
            <li><Link href="/teacher/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/teacher/courses" className="hover:text-primary">Courses</Link></li>
            <li>/</li>
            <li><Link href={`/teacher/courses/${courseId}`} className="hover:text-primary">{courseData.title}</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Edit</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Edit Course</h1>
          <p className="text-gray-600">Update your course details and settings</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter course title"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.title ? 'border-red-500' : 'border-gray-200'
                } focus:border-primary focus:outline-none transition-all`}
              />
              {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter course description"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.description ? 'border-red-500' : 'border-gray-200'
                } focus:border-primary focus:outline-none transition-all resize-none`}
              />
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                  Price (USD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.price ? 'border-red-500' : 'border-gray-200'
                  } focus:border-primary focus:outline-none transition-all`}
                />
                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
              <Link
                href={`/teacher/courses/${courseId}`}
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






