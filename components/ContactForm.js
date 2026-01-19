'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission (frontend only)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-xl border border-primary/20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                <p className="text-xs text-green-700 mt-1">We'll get back to you soon. (This is a frontend demo - form submission will be connected to backend when ready)</p>
              </div>
            </div>
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-sm sm:text-base ${
              errors.name 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-primary'
            } focus:outline-none`}
            required
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-sm sm:text-base ${
              errors.email 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-primary'
            } focus:outline-none`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Teacher Application">Teacher Application</option>
            <option value="Student Support">Student Support</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us how we can help..."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-sm sm:text-base resize-none ${
              errors.message 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-200 focus:border-primary'
            } focus:outline-none`}
            required
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs sm:text-sm text-blue-800">
            <strong>Note:</strong> This form is fully functional on the frontend. When the backend is ready, form submissions will be processed automatically.
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[48px] flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
}








