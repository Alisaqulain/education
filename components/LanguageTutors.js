'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const languages = [
  { name: 'English', flag: '🇬🇧', teachers: 8823, code: 'en' },
  { name: 'Spanish', flag: '🇪🇸', teachers: 4285, code: 'es' },
  { name: 'French', flag: '🇫🇷', teachers: 1744, code: 'fr' },
  { name: 'German', flag: '🇩🇪', teachers: 467, code: 'de' },
  { name: 'Italian', flag: '🇮🇹', teachers: 1255, code: 'it' },
  { name: 'Chinese', flag: '🇨🇳', teachers: 974, code: 'zh' },
  { name: 'Portuguese', flag: '🇵🇹', teachers: 334, code: 'pt' },
  { name: 'Russian', flag: '🇷🇺', teachers: 245, code: 'ru' },
]

export default function LanguageTutors() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInDown" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <span className="text-2xl">🌍</span>
            <span className="text-blue-700 font-bold">Global Learning</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Learn Languages with <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Native Tutors</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-0 opacity-50"></span>
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with expert language tutors from around the world
          </p>
        </AnimatedSection>

        {/* Language Cards Grid - New Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {languages.map((language, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 80}
            >
              <Link
                href={`/teachers?subject=${language.name}&language=true`}
                className="group relative block"
              >
                {/* Card with diagonal design */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-500 overflow-hidden">
                  {/* Diagonal accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl sm:text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        {language.flag}
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {language.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Online tutors
                    </p>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-blue-600">
                        {language.teachers.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">teachers</span>
                    </div>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/subjects?category=languages"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Explore All Languages</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}



