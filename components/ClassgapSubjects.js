'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const subjectCategories = [
  {
    name: 'Languages',
    icon: '🌍',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Academic Subjects',
    icon: '📚',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Maths',
    icon: '🔢',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Physics',
    icon: '⚛️',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Chemistry',
    icon: '🧪',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Spanish for children',
    icon: '👶',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function ClassgapSubjects() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold">
            📚 250+ Subjects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Prepare for a test, learn a new subject or <span className="gradient-text">develop new skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn or improve in over 100 different subjects: maths, physics, programming, marketing...
          </p>
        </AnimatedSection>

        {/* Subject Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12">
          {subjectCategories.map((subject, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 100}
            >
              <Link
                href={`/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`group relative bg-gradient-to-r ${subject.color} text-white px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 rounded-xl sm:rounded-2xl font-extrabold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 hover:rotate-1 flex items-center space-x-2 sm:space-x-3 shadow-xl border-2 border-white/20 touch-manipulation`}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">{subject.icon}</span>
                <span className="drop-shadow-md whitespace-nowrap">{subject.name}</span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/teachers"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span>Find my perfect tutor</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}



