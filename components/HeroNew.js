'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroNew() {
  const subjects = ['Maths', 'English', 'Physics', 'Programming', 'More Subjects']

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn. Teach. Grow —{' '}
              <span className="gradient-text">From Anywhere in the World</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Edgen Institute is a trusted education platform connecting passionate educators with learners through transparent, ethical, and technology-driven online learning.
            </p>
            
            {/* Search-style Input (UI only) */}
            <div className="mb-6 max-w-2xl mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What would you like to teach or learn?"
                  className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 text-gray-700 text-lg shadow-sm"
                  readOnly
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Subject Chips */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Verified Educators</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Secure Online Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">Educator-First Platform</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                Join as a Teacher
              </Link>
              <Link
                href="/about"
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Learn About Edgen
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-square">
                {/* Online Teaching Illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
                    <div className="space-y-6">
                      {/* Virtual Classroom Visual */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

