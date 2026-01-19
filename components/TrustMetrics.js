'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  // Handle string numbers like "10,000+" and "4.9/5"
  if (typeof end === 'string') {
    return <span ref={ref}>{end}</span>
  }

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>
}

export default function TrustMetrics() {
  const metrics = [
    {
      number: '10,000+',
      label: 'Verified Teachers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '50,000+',
      label: 'Happy Students',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '250+',
      label: 'Subjects Available',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      number: '1M+',
      label: 'Hours Taught',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      number: '150+',
      label: 'Countries',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full text-primary text-sm font-bold border border-primary/30 shadow-lg animate-pulse">
            🏆 Trusted Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Trusted by <span className="gradient-text animate-gradient">Millions Worldwide</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students and teachers who trust Edgen Institute for quality education
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 100}
            >
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl border-2 border-gray-200/50 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group relative overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02]">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-primary/50">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transform group-hover:scale-110 transition-transform duration-500">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 leading-tight group-hover:scale-105 transition-transform duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {metric.label}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}



