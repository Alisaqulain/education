'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function TrustFeatures() {
  const features = [
    {
      title: 'Flexible',
      description: 'Choose a tutor who works around you and your schedule',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Secure',
      description: 'We take care of everything. You just have to enjoy your classes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Qualified tutors',
      description: 'Achieve your goals with more than 12,000 qualified teachers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Save money',
      description: 'Great value classes - no tuition fees or minimum number of hours',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold">
            ✨ Premium Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            More than <span className="gradient-text">500k students</span> a year rely on Edgen Institute
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 150}
            >
              <div className="bg-white p-6 sm:p-7 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-500 shadow-xl hover:shadow-2xl text-center transform hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-105 group relative overflow-hidden touch-manipulation">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 text-white group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/student-register"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            <span>Book Free trial</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

