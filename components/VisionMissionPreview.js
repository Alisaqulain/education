import Link from 'next/link'

export default function VisionMissionPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed px-2 sm:px-0">
            To become a globally trusted bridge between educators and learners.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-primary/20 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
            Our <span className="gradient-text">Mission</span>
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-start">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Empower teachers worldwide with fair opportunities and support</span>
            </li>
            <li className="flex items-start">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Ensure quality online education experiences for all learners</span>
            </li>
            <li className="flex items-start">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Build ethical education ecosystems that benefit everyone</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            <span>Read Our Full Story</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

