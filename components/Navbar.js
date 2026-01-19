'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setIsLoggedIn(true)
      try {
        setUser(JSON.parse(userData))
      } catch (e) {
        console.error('Error parsing user data:', e)
      }
    } else {
      setIsLoggedIn(false)
      setUser(null)
    }
  }, [])

  useEffect(() => {
    // Function to check and update auth state
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      const userData = localStorage.getItem('user')
      if (token && userData) {
        setIsLoggedIn(true)
        try {
          setUser(JSON.parse(userData))
        } catch (e) {
          setUser(null)
          setIsLoggedIn(false)
        }
      } else {
        setIsLoggedIn(false)
        setUser(null)
      }
    }

    // Listen for storage changes (login/logout from other tabs)
    const handleStorageChange = (e) => {
      if (e.key === 'token' || e.key === 'user') {
        checkAuth()
      }
    }

    // Listen for custom auth change events (same tab)
    const handleAuthChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authChange', handleAuthChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authChange', handleAuthChange)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside country selector
      if (countryOpen && !event.target.closest('.country-selector')) {
        setCountryOpen(false)
      }
      // Check if click is outside explore dropdown (button or menu)
      const exploreButton = event.target.closest('.explore-dropdown button')
      const exploreMenu = event.target.closest('.explore-dropdown-menu')
      if (dropdownOpen && !exploreButton && !exploreMenu) {
        setDropdownOpen(false)
      }
      // Check if click is outside user menu
      if (userMenuOpen && !event.target.closest('.user-menu')) {
        setUserMenuOpen(false)
      }
    }
    if (countryOpen || dropdownOpen || userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [countryOpen, dropdownOpen, userMenuOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    setIsLoggedIn(false)
    setUser(null)
    setUserMenuOpen(false)
    window.location.href = '/'
  }

  const getUserDashboardLink = () => {
    if (!user) return '/'
    const role = user.role || localStorage.getItem('role')
    if (role === 'admin') return '/admin/dashboard'
    if (role === 'teacher') return '/teacher/courses'
    if (role === 'student') return '/student/my-courses'
    return '/'
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0 z-50">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Edgen Institute Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Edgen Institute
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Admission Hub
              </span>
            </div>
          </Link>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              How It Works
            </Link>
            <div className="relative explore-dropdown">
              <button
                type="button"
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={(e) => {
                  // Only close if not moving to dropdown menu
                  const relatedTarget = e.relatedTarget
                  // Check if relatedTarget exists and is an Element before calling closest
                  if (!relatedTarget || !(relatedTarget instanceof Element) || !relatedTarget.closest('.explore-dropdown-menu')) {
                    setTimeout(() => {
                      if (!document.querySelector('.explore-dropdown-menu:hover')) {
                        setDropdownOpen(false)
                      }
                    }, 150)
                  }
                }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Explore</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 explore-dropdown-menu"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onClick={(e) => {
                    // Close dropdown when clicking a link
                    if (e.target.closest('a')) {
                      setTimeout(() => setDropdownOpen(false), 100)
                    }
                  }}
                >
                  <Link 
                    href="/subjects" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Subjects
                  </Link>
                  <Link 
                    href="/courses" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link 
                    href="/teachers" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Teachers
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Country Selector */}
            <div className="relative country-selector">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700"
              >
                <span className="text-lg">{selectedCountry.flag}</span>
                <span className="hidden xl:inline">{selectedCountry.code}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {countryOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country)
                        setCountryOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-primary/10 transition-colors ${
                        selectedCountry.code === country.code ? 'bg-primary/5' : ''
                      }`}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span className="text-sm text-gray-700">{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {isLoggedIn && user ? (
              <div className="relative user-menu">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.firstName?.charAt(0) || 'U'}{user.lastName?.charAt(0) || ''}
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.firstName} {user.lastName}
                  </span>
                  <svg className={`w-4 h-4 text-gray-600 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link
                      href={getUserDashboardLink()}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link 
                  href="/student/login" 
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign up for free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/how-it-works" 
                className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="border-b border-gray-200">
                <div className="py-3 text-lg font-medium text-gray-900 mb-2">Explore</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/subjects" 
                    className="block py-2 text-base text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Subjects
                  </Link>
                  <Link 
                    href="/courses" 
                    className="block py-2 text-base text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link 
                    href="/teachers" 
                    className="block py-2 text-base text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Teachers
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="block py-2 text-base text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
              </div>
              <Link 
                href="/about" 
                className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Select Country</div>
                  <select
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const country = countries.find(c => c.code === e.target.value)
                      if (country) setSelectedCountry(country)
                    }}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none text-sm"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                {isLoggedIn && user ? (
                  <>
                    <Link 
                      href={getUserDashboardLink()}
                      className="block w-full text-center text-gray-700 hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                      className="block w-full text-center text-red-600 hover:text-red-700 transition-colors font-medium py-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link 
                    href="/student/login" 
                    className="block w-full text-center text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
                <Link 
                  href="/student-register" 
                  className="block w-full text-center bg-white border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Learning
                </Link>
                <Link 
                  href="/register" 
                  className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Become a Teacher
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

