'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import VideoUploader from '@/components/VideoUploader'
import Link from 'next/link'

export default function CreateCourse() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    category: '',
    level: 'beginner',
    price: '',
    language: 'English',
    thumbnail: '',
    requirements: '',
    whatYouWillLearn: '',
  })
  const [lessons, setLessons] = useState([])
  const [currentLesson, setCurrentLesson] = useState({
    title: '',
    description: '',
    videoUrl: '',
    duration: 0,
    order: 1,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedThumbnail, setUploadedThumbnail] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      const token = localStorage.getItem('token')
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', 'image')

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      })

      const data = await response.json()
      if (response.ok) {
        setUploadedThumbnail(data.file.url)
        setFormData(prev => ({ ...prev, thumbnail: data.file.url }))
      }
    } catch (error) {
      console.error('Thumbnail upload error:', error)
    }
  }

  const handleVideoUpload = (video) => {
    setCurrentLesson(prev => ({
      ...prev,
      videoUrl: video.url,
      duration: video.duration || 0,
    }))
  }

  const addLesson = () => {
    if (!currentLesson.title || !currentLesson.videoUrl) {
      alert('Please fill in lesson title and upload a video')
      return
    }

    const newLesson = {
      ...currentLesson,
      order: lessons.length + 1,
    }

    setLessons([...lessons, newLesson])
    setCurrentLesson({
      title: '',
      description: '',
      videoUrl: '',
      duration: 0,
      order: lessons.length + 2,
    })
  }

  const removeLesson = (index) => {
    setLessons(lessons.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    if (!formData.title) newErrors.title = 'Title is required'
    if (!formData.description) newErrors.description = 'Description is required'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (lessons.length === 0) newErrors.lessons = 'At least one lesson is required'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      setStep(1)
      return
    }

    setIsSubmitting(true)

    try {
      const token = localStorage.getItem('token')
      const courseData = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        lessons: lessons,
        duration: lessons.reduce((sum, lesson) => sum + (lesson.duration || 0), 0),
        requirements: formData.requirements ? formData.requirements.split('\n').filter(r => r.trim()) : [],
        whatYouWillLearn: formData.whatYouWillLearn ? formData.whatYouWillLearn.split('\n').filter(w => w.trim()) : [],
      }

      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(courseData),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Course created successfully! It will be reviewed by admin.')
        router.push('/teacher/courses')
      } else {
        throw new Error(data.error || 'Failed to create course')
      }
    } catch (error) {
      alert(error.message || 'Failed to create course')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects = [
    'Mathematics', 'English', 'Programming', 'Physics', 'Chemistry',
    'Biology', 'History', 'Geography', 'Art', 'Music', 'Languages', 'Business'
  ]

  const categories = [
    'Science', 'Technology', 'Arts', 'Business', 'Languages', 'Test Prep', 'Life Skills'
  ]

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/teacher/courses" className="text-primary hover:text-primary-dark mb-4 inline-block">
            ← Back to Courses
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Create New <span className="gradient-text">Course</span>
          </h1>
          <p className="text-gray-600">Build your course step by step</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step >= s ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > s ? '✓' : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <span className={step === 1 ? 'font-semibold text-primary' : 'text-gray-600'}>Course Info</span>
            <span className={step === 2 ? 'font-semibold text-primary' : 'text-gray-600'}>Add Lessons</span>
            <span className={step === 3 ? 'font-semibold text-primary' : 'text-gray-600'}>Review & Submit</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border-2 border-gray-100 shadow-xl p-6 sm:p-8">
          {/* Step 1: Course Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Course Information</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Advanced JavaScript Programming"
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                    errors.title ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                  }`}
                  required
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Describe what students will learn in this course..."
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none resize-none ${
                    errors.description ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                  }`}
                  required
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                      errors.subject ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    }`}
                    required
                  >
                    <option value="">Select subject</option>
                    {subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                      errors.category ? 'border-red-500' : 'border-gray-200 focus:border-primary'
                    }`}
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    required
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (USD) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language *</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    placeholder="English"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Thumbnail</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                />
                {uploadedThumbnail && (
                  <div className="mt-2">
                    <img src={uploadedThumbnail} alt="Thumbnail" className="w-32 h-32 object-cover rounded-lg" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What You'll Learn (one per line)</label>
                <textarea
                  name="whatYouWillLearn"
                  value={formData.whatYouWillLearn}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Master JavaScript fundamentals&#10;Build real-world projects&#10;Understand advanced concepts"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirements (one per line)</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Basic computer knowledge&#10;No prior programming experience needed"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Next: Add Lessons →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Add Lessons */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Add Lessons</h2>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <h3 className="font-semibold mb-4">Add New Lesson</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lesson Title *</label>
                    <input
                      type="text"
                      value={currentLesson.title}
                      onChange={(e) => setCurrentLesson({ ...currentLesson, title: e.target.value })}
                      placeholder="e.g., Introduction to JavaScript"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lesson Description</label>
                    <textarea
                      value={currentLesson.description}
                      onChange={(e) => setCurrentLesson({ ...currentLesson, description: e.target.value })}
                      rows="3"
                      placeholder="Brief description of this lesson..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Video *</label>
                    <VideoUploader
                      onUploadComplete={handleVideoUpload}
                      courseId={null}
                    />
                    {currentLesson.videoUrl && (
                      <p className="mt-2 text-sm text-green-600">✓ Video uploaded successfully</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={addLesson}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                  >
                    + Add Lesson
                  </button>
                </div>
              </div>

              {lessons.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-4">Lessons ({lessons.length})</h3>
                  <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                          <div className="font-semibold">{lesson.title}</div>
                          <div className="text-sm text-gray-600">Duration: ~{lesson.duration} min</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeLesson(index)}
                          className="text-red-600 hover:text-red-700 font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {errors.lessons && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{errors.lessons}</p>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Next: Review →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Course Title</h3>
                  <p className="text-gray-700">{formData.title}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{formData.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Subject</h3>
                    <p className="text-gray-700">{formData.subject}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Category</h3>
                    <p className="text-gray-700">{formData.category}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Level</h3>
                    <p className="text-gray-700 capitalize">{formData.level}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Price</h3>
                    <p className="text-gray-700">${formData.price}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Lessons ({lessons.length})</h3>
                  <div className="space-y-2">
                    {lessons.map((lesson, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium">{index + 1}. {lesson.title}</div>
                        {lesson.description && (
                          <div className="text-sm text-gray-600 mt-1">{lesson.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Creating Course...' : 'Create Course'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
