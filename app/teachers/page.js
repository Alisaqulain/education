export const metadata = {
  title: 'Explore Teachers - Edgen Institute',
  description: 'Discover verified educators on Edgen Institute. Find the perfect teacher for your learning journey.',
}

export default function Teachers() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore <span className="gradient-text">Verified Teachers</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Connect with passionate, verified educators ready to help you achieve your learning goals
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-10 rounded-2xl border border-primary/20 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Teacher Directory Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're building a comprehensive directory of verified teachers. Once launched, you'll be able to browse, filter, and connect with educators based on subject, experience, ratings, and availability.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-2">What to Expect:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verified teacher profiles with qualifications
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced search and filtering options
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Teacher availability and booking system
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reviews and ratings from students
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/student-register"
                className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
              >
                Join as Student
              </a>
              <a
                href="/register"
                className="bg-white border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Become a Teacher
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

