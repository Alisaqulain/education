'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    video: '/uhd_25fps.mp4',
    title: 'Learn from Expert Teachers Worldwide',
    subtitle: 'Connect with 10,000+ verified educators ready to help you succeed',
    cta: 'Find Your Perfect Teacher',
    ctaLink: '/teachers',
    bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
  },
  {
    id: 2,
    video: '/6671234-uhd_2732_1026_25fps.mp4',
    title: 'Master 250+ Subjects Online',
    subtitle: 'From Mathematics to Languages, we have courses for everyone',
    cta: 'Explore Subjects',
    ctaLink: '/subjects',
    bgGradient: 'from-cyan-600 via-blue-600 to-indigo-600',
  },
  {
    id: 3,
    video: '/6985520-uhd_3840_2160_25fps.mp4',
    title: 'Start Teaching and Earn from Home',
    subtitle: 'Join thousands of teachers sharing knowledge and building careers',
    cta: 'Become a Teacher',
    ctaLink: '/register',
    bgGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
  },
  {
    id: 4,
    video: '/5183279-hd_1920_1080_30fps.mp4',
    title: 'Free 20-Minute Trial for New Students',
    subtitle: 'Experience quality education risk-free with our trial sessions',
    cta: 'Start Free Trial',
    ctaLink: '/signup',
    bgGradient: 'from-orange-500 via-red-500 to-pink-500',
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const videoRefs = useRef([])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Play video when slide becomes active, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play().catch(() => {
            // Autoplay was prevented, which is fine
          })
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[90vh] min-h-[500px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Video */}
            <div className="absolute inset-0">
              {/* Video Background */}
              {slide.video && (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el
                  }}
                  autoPlay={index === currentSlide}
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ objectFit: 'cover' }}
                  onLoadedData={() => {
                    if (index === currentSlide && videoRefs.current[index]) {
                      videoRefs.current[index].play().catch(() => {})
                    }
                  }}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              )}
              
              {/* Fallback Gradient (if video fails to load) - Behind video */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} animate-gradient z-[-1]`}></div>
              
              {/* Overlay Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 z-10"></div>
              
              {/* Animated Blob Shapes - Hidden on mobile for performance */}
              <div className="hidden md:block absolute top-0 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
              <div className="hidden md:block absolute bottom-0 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div
                  className={`transform transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="inline-block mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs sm:text-sm font-semibold">
                    🎓 Join Thousands of Learners
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-lg px-2">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-md px-2">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-2">
                    <Link
                      href={slide.ctaLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-gray-900 px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 transform group"
                    >
                      <span>{slide.cta}</span>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/signup"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      <span>Start Free Trial</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 border border-white/30 text-white p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 group shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/40 border border-white/30 text-white p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 group shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3 md:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full shadow-lg touch-manipulation ${
              index === currentSlide
                ? 'w-8 sm:w-10 md:w-12 h-2.5 sm:h-3 bg-white shadow-xl'
                : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/40 hover:bg-white/60 hover:scale-125 active:scale-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-20">
        <div
          className="h-full bg-white shadow-lg transition-all duration-5000 ease-linear"
          style={{
            width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '100%',
          }}
        />
      </div>
    </section>
  )
}

