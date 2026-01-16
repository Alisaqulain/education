'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const languages = [
  { name: 'English', flag: '🇬🇧', teachers: 8823, code: 'en' },
  { name: 'Spanish', flag: '🇪🇸', teachers: 4285, code: 'es' },
  { name: 'French', flag: '🇫🇷', teachers: 1744, code: 'fr' },
  { name: 'German', flag: '🇩🇪', teachers: 467, code: 'de' },
  { name: 'Italian', flag: '🇮🇹', teachers: 1255, code: 'it' },
  { name: 'Chinese', flag: '🇨🇳', teachers: 974, code: 'zh' },
  { name: 'Portuguese', flag: '🇵🇹', teachers: 334, code: 'pt' },
  { name: 'Russian', flag: '🇷🇺', teachers: 245, code: 'ru' },
]

const popularSubjects = ['Maths', 'English', 'Physics', 'Programming']

export default function ClassgapStyleHero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/teachers?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Learn with online tutoring from anywhere in the world
            </h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What would you like to learn?"
                  className="w-full px-6 py-4 sm:py-5 pr-14 rounded-xl text-gray-900 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Popular Subjects */}
            <div className="flex flex-wrap gap-3 mb-8">
              {popularSubjects.map((subject, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(subject)
                    handleSearch({ preventDefault: () => {} })
                  }}
                  className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all text-base sm:text-lg"
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg sm:text-xl">Meet the tutor. Try 20 min. for free</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg sm:text-xl">Virtual classroom for your lessons</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg sm:text-xl">More than 100 subjects to choose from</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Virtual Classroom Illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    {/* Video Call Interface */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 aspect-square flex items-center justify-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          T
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 aspect-square flex items-center justify-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          S
                        </div>
                      </div>
                    </div>
                    {/* Whiteboard */}
                    <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Digital Whiteboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-md mx-auto">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <div className="font-bold text-lg">Excellent</div>
            <div className="text-sm text-white/80">4.6 out of 5 based on 2,277 reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}


