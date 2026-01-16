'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const countries = [
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
]

const subjects = ['Maths', 'English', 'Physics', 'Chemistry', 'Programming', 'Spanish', 'French', 'German', 'Biology', 'History']

export default function PremiumHero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isOnline, setIsOnline] = useState(true)
  const [countryDropdown, setCountryDropdown] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to teachers page with search query
      window.location.href = `/teachers?search=${encodeURIComponent(searchQuery)}&country=${selectedCountry.code}&online=${isOnline}`
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdown && !event.target.closest('.country-selector')) {
        setCountryDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [countryDropdown])

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Find Your Perfect Teacher</span>
            <br />
            <span className="text-gray-900">Learn From Anywhere in the World</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10">
            Connect with verified educators worldwide. Over 10,000+ teachers ready to help you learn.
          </p>

          {/* Premium Search Bar */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-2 sm:p-3 md:p-4">
              <div className="flex flex-col lg:flex-row gap-2 sm:gap-3">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by subject, teacher name, or topic..."
                    className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-base sm:text-lg"
                  />
                </div>

                {/* Country Selector */}
                <div className="relative country-selector">
                  <button
                    type="button"
                    onClick={() => setCountryDropdown(!countryDropdown)}
                    className="flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary transition-all min-w-[140px] sm:min-w-[160px]"
                  >
                    <span className="text-xl sm:text-2xl">{selectedCountry.flag}</span>
                    <span className="text-sm sm:text-base font-medium text-gray-700">{selectedCountry.code}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {countryDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country)
                            setCountryDropdown(false)
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-primary/10 transition-colors"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm text-gray-700">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Online/In-Person Toggle */}
                <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 p-1">
                  <button
                    type="button"
                    onClick={() => setIsOnline(true)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                      isOnline 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOnline(false)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                      !isOnline 
                        ? 'bg-primary text-white shadow-md' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    In-Person
                  </button>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg min-h-[48px] flex items-center justify-center"
                >
                  <span className="hidden sm:inline">Search</span>
                  <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Popular Subjects */}
            <div className="mt-6 sm:mt-8">
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Popular Subjects:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {subjects.slice(0, 8).map((subject, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(subject)
                      handleSearch({ preventDefault: () => {} })
                    }}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full text-sm sm:text-base font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 font-medium">10,000+ Verified Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 font-medium">250+ Subjects</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base text-gray-700 font-medium">Free Trial Available</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 min-h-[56px] flex items-center justify-center"
            >
              Become a Teacher
            </Link>
            <Link
              href="/student-register"
              className="bg-white border-2 border-secondary text-secondary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-secondary hover:text-white transition-all duration-300 min-h-[56px] flex items-center justify-center"
            >
              Start Learning Today
            </Link>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            <span className="font-semibold text-primary">Free first lesson</span> - Try any teacher risk-free
          </p>
        </div>
      </div>
    </section>
  )
}

