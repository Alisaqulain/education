'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

export default function StrongCTA() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      })
    }
  }, [])

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/6986095-uhd_2160_3840_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold shadow-xl animate-pulse">
            🎉 Join Our Community
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight px-2 drop-shadow-2xl">
            Over <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">50,000 students</span> join us monthly
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-lg">
            Achieve your learning goal. With one of our expert teachers, your goals are closer than ever!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Link
              href="/teachers"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 rounded-xl sm:rounded-2xl font-extrabold text-base sm:text-lg md:text-xl hover:shadow-2xl hover:scale-105 sm:hover:scale-110 active:scale-95 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group touch-manipulation"
            >
              <span>Find my perfect tutor</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 rounded-xl sm:rounded-2xl font-extrabold text-base sm:text-lg md:text-xl hover:bg-white/20 hover:scale-105 sm:hover:scale-110 active:scale-95 transition-all duration-300 transform shadow-2xl touch-manipulation"
            >
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

