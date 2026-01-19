'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'David',
    subject: 'Learning English',
    text: "I'm learning English with Edgen Institute and I'm delighted with my teacher. It's like having face-to-face classes, but without having to move and they fit around my schedule.",
    image: '/api/placeholder/100/100',
    feature: 'Share a live video with your tutor of your favorite song so that you can understand it.',
    featureImage: '/api/placeholder/300/400',
  },
  {
    name: 'Alfred',
    subject: 'Maths student',
    text: 'The experience has exceeded my expectations. Interacting with my tutor is very easy.',
    image: '/api/placeholder/100/100',
    feature: 'In the virtual classroom, you can use the "whiteboard" tool to solve any formulae or other problems.',
    featureImage: '/api/placeholder/300/400',
  },
  {
    name: 'Alexandra',
    subject: 'Graphic design student',
    text: 'The virtual classroom experience is no different from the face-to-face experience.',
    image: '/api/placeholder/100/100',
    feature: 'With the online document tool of the virtual classroom, you will be able to perform live exercises.',
    featureImage: '/api/placeholder/300/400',
  },
]

export default function ClassgapTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            These students started out like you
          </h2>
          <p className="text-xl sm:text-2xl text-white/90">
            3 million students achieve their goals, find out more about their experience
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-xl text-white">{currentTestimonial.name}</div>
                  <div className="text-white/80">{currentTestimonial.subject}</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <p className="text-lg leading-relaxed">"{currentTestimonial.text}"</p>
              </div>
            </div>

            {/* Right: Feature Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">{currentTestimonial.feature}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}








