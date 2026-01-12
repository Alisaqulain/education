'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Great Teachers{' '}
              <span className="gradient-text">Meet Curious Minds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Edgen Institute connects passionate educators with learners through a transparent and trusted education ecosystem.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                Become a Teacher
              </Link>
              <Link
                href="/about"
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Logo/Visual */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/logo.jpg"
                alt="Edgen Institute"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

