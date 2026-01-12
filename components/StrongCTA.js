import Link from 'next/link'

export default function StrongCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2 sm:px-0">
            Ready to Be Part of Edgen Institute?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            If you are a passionate educator who values quality, integrity, and growth — Edgen Institute welcomes you.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-white text-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Register as a Teacher</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

