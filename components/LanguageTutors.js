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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-indigo-700 text-sm font-bold border border-indigo-300/30 shadow-lg animate-pulse">
            🌍 Global Learning
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Online language lessons with <span className="gradient-text animate-gradient">native tutors</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn languages online with the world's best tutors from all over the world
          </p>
        </AnimatedSection>

        {/* Language Cards Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-2xl border-2 border-white/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {languages.map((language, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 80}
              >
                <Link
                  href={`/teachers?subject=${language.name}&language=true`}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-gray-200 hover:border-primary transition-all duration-500 hover:shadow-2xl text-center transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 sm:hover:scale-110 relative overflow-hidden touch-manipulation"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-md">
                    {language.flag}
                  </div>
                <div className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base leading-tight">
                  {language.name} Tutors
                </div>
                <div className="text-xs text-gray-600 mb-1 sm:mb-2 leading-tight">
                  Online {language.name} tutors
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary">
                  {language.teachers.toLocaleString()} teachers
                </div>
              </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/subjects?category=languages"
              className="text-primary hover:text-primary-dark font-semibold text-base sm:text-lg inline-flex items-center space-x-2"
            >
              <span>See more languages</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



