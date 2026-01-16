import Link from 'next/link'

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
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Online language lessons with native tutors from all over the world
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Learn languages online with the world's best tutors
          </p>
        </div>

        {/* Language Cards Grid */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {languages.map((language, index) => (
              <Link
                key={index}
                href={`/teachers?subject=${language.name}&language=true`}
                className="group bg-white rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="text-5xl sm:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {language.flag}
                </div>
                <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                  {language.name} Tutors
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mb-2">
                  Online {language.name} tutors
                </div>
                <div className="text-lg sm:text-xl font-bold text-primary">
                  {language.teachers.toLocaleString()} teachers
                </div>
              </Link>
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


