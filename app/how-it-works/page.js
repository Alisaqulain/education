export const metadata = {
  title: 'How It Works - Edgen Institute',
  description: 'Learn how Edgen Institute connects educators with learners through a simple, transparent process.',
}

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'For Teachers',
      subtitle: 'Apply & Get Verified',
      description: 'Submit your teaching profile through our secure registration form. Our team reviews and verifies your qualifications to maintain quality standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'For Students',
      subtitle: 'Explore & Discover',
      description: 'Browse verified teachers and courses. Filter by subject, language, or teaching style. Find the perfect educator for your learning journey.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Connect',
      subtitle: 'Book & Learn',
      description: 'Connect with your chosen teacher, schedule sessions, and start learning. Our platform facilitates seamless communication and scheduling.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Grow Together',
      subtitle: 'Continuous Support',
      description: 'Both teachers and students receive ongoing support. Teachers can grow their teaching career, while students achieve their learning goals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            How <span className="gradient-text">Edgen Institute</span> Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            A transparent, simple process connecting passionate educators with eager learners worldwide
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-primary font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-10 rounded-2xl border border-primary/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join Edgen Institute today and be part of a trusted education community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
            >
              Become a Teacher
            </a>
            <a
              href="/student-register"
              className="bg-white border-2 border-secondary text-secondary px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
            >
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

