'use client'

import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    subjects: [],
    experience: '',
    education: '',
    languages: [],
    teachingMethod: 'online',
    hourlyRate: '',
    bio: '',
    availability: '',
    certifications: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const subjectsList = [
    'Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography',
    'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Japanese', 'Hindi',
    'Programming', 'Web Development', 'Data Science', 'Machine Learning',
    'Music', 'Art', 'Yoga', 'Fitness', 'Business', 'Economics', 'Psychology'
  ]

  const languagesList = ['English', 'Spanish', 'French', 'German', 'Hindi', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Italian']

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

  const handleSubjectToggle = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  const handleLanguageToggle = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address'
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.country) newErrors.country = 'Country is required'
    }
    
    if (step === 2) {
      if (formData.subjects.length === 0) newErrors.subjects = 'Select at least one subject'
      if (!formData.experience) newErrors.experience = 'Experience level is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(3)) return
    
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 2000)
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join as a <span className="gradient-text">Teacher</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Start teaching on Edgen Institute and connect with students worldwide
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step ? '✓' : step}
                  </div>
                  <div className={`mt-2 text-xs font-medium ${
                    currentStep >= step ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step === 1 ? 'Personal' : step === 2 ? 'Teaching' : 'Details'}
                  </div>
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-primary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {submitSuccess ? (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Application Submitted!</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Thank you for applying to teach on Edgen Institute. Our team will review your application and get back to you within 2-3 business days.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This is a frontend demo. When the backend is ready, applications will be processed automatically.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                        errors.firstName ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                      required
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                        errors.lastName ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                      required
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      errors.email ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      errors.phone ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                    required
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                        errors.country ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                      } focus:outline-none`}
                      required
                    >
                      <option value="">Select country</option>
                      <option value="IN">India</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Teaching Information */}
            {currentStep === 2 && (
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Subjects You Teach *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {subjectsList.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => handleSubjectToggle(subject)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                          formData.subjects.includes(subject)
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-primary'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                  {errors.subjects && <p className="mt-2 text-xs text-red-600">{errors.subjects}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      errors.experience ? 'border-red-300' : 'border-gray-200 focus:border-primary'
                    } focus:outline-none`}
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                  {errors.experience && <p className="mt-1 text-xs text-red-600">{errors.experience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="e.g., Master's in Mathematics"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Languages You Speak</label>
                  <div className="flex flex-wrap gap-3">
                    {languagesList.map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => handleLanguageToggle(language)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                          formData.languages.includes(language)
                            ? 'bg-secondary text-white border-secondary'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-secondary'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Method *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="teachingMethod"
                        value="online"
                        checked={formData.teachingMethod === 'online'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Online Only
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="teachingMethod"
                        value="in-person"
                        checked={formData.teachingMethod === 'in-person'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      In-Person Only
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="teachingMethod"
                        value="both"
                        checked={formData.teachingMethod === 'both'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Both
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (USD)</label>
                  <input
                    type="number"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    placeholder="e.g., 25"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio/Introduction</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell students about yourself, your teaching style, and what makes you unique..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <textarea
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    rows="3"
                    placeholder="e.g., Monday-Friday, 9 AM - 5 PM (Your timezone)"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certifications (Optional)</label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    rows="2"
                    placeholder="List any teaching certifications, degrees, or qualifications"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This is a frontend demo form. When the backend is ready, your application will be automatically processed.
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    ← Previous
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
