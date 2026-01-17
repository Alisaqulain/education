import Link from 'next/link'

export default function StrongCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-36 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden border-t border-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30 text-primary text-xs sm:text-sm font-bold shadow-lg">
            🎉 Join Our Community
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-tight px-2">
            Over <span className="gradient-text">50,000 students</span> join us monthly
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
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
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white border-2 border-primary text-primary px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 rounded-xl sm:rounded-2xl font-extrabold text-base sm:text-lg md:text-xl hover:bg-primary hover:text-white hover:scale-105 sm:hover:scale-110 active:scale-95 transition-all duration-300 transform shadow-lg touch-manipulation"
            >
              <span>Start Free Trial</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

