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
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.jpg"
                alt="Edgen Institute Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Edgen Institute
              </span>
              <span className="text-xs text-gray-500 hidden md:block">
                Admission Hub
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
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
          
          {/* Mobile Navigation (shown on smaller screens) */}
          <nav className="lg:hidden flex items-center space-x-4">
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
          <div className="flex items-center space-x-4">
            <Link 
              href="/register" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm md:text-base"
            >
              <span className="hidden sm:inline">Become a Teacher</span>
              <span className="sm:hidden">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

