export default function SocialProof() {
  const trustPoints = [
    {
      title: 'Transparent Onboarding',
      description: 'Clear process, no hidden fees, honest communication from day one.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Ethical Education Model',
      description: 'Built on integrity, not profit margins. Quality over quantity always.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Secure & Privacy-Focused',
      description: 'Your data is protected with industry-standard security measures.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Built for Long-Term Growth',
      description: 'Sustainable platform designed for educator success and student learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ]

  const badges = [
    'Secure Platform',
    'Educator Friendly',
    'Quality Focused',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Trusted by <span className="gradient-text">Educators & Learners</span>
          </h2>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 rounded-xl border border-gray-200 card-hover text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Badge Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-gray-700 font-medium text-xs sm:text-sm"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

