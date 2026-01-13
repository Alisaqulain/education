'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Image
                src="/logo.jpg"
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
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              How It Works
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
          </nav>
          
          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-3">
            <Link 
              href="/#how-it-works" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              How It Works
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              About
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link 
              href="/student-register" 
              className="hidden sm:inline-flex items-center space-x-1 bg-white border border-secondary text-secondary px-3 md:px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 font-medium text-xs md:text-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Start Learning</span>
            </Link>
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              <span className="hidden md:inline">Become a Teacher</span>
              <span className="md:hidden">Teacher</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

