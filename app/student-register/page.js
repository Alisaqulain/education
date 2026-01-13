export const metadata = {
  title: 'Join as a Student - Edgen Institute',
  description: 'Join Edgen Institute as a student and be among the first to access quality courses from verified educators. Courses launching soon!',
}

export default function StudentRegister() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-full mb-6">
            <svg className="w-5 h-5 text-secondary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-secondary font-semibold text-sm sm:text-base">Courses Launching Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Learning with <span className="gradient-text">Edgen Institute</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our community of learners and be notified when our quality courses from verified educators go live.
          </p>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-xl mb-8 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Educators</h3>
              <p className="text-sm text-gray-600">Learn from qualified, verified teachers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Courses</h3>
              <p className="text-sm text-gray-600">Carefully curated course content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-sm text-gray-600">Learn at your own pace, anytime</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Courses Preview */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-secondary to-primary">
            <h2 className="text-2xl font-bold text-white">Courses Coming Soon</h2>
            <p className="text-white/90 mt-2">Get early access to our course catalog</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {['Languages', 'Academic Subjects', 'Programming', 'Skills & More'].map((category, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{category}</h3>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      Soon
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Multiple courses launching</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/20 text-center">
              <p className="text-gray-700 font-medium">
                🎓 Be the first to know when courses launch! Register below to get notified.
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form Placeholder */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-secondary to-primary">
            <h2 className="text-2xl font-bold text-white">Student Registration</h2>
            <p className="text-white/90 mt-2">Join our waitlist and be notified when courses launch</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What subjects are you interested in?
                  </label>
                  <textarea
                    placeholder="E.g., English, Mathematics, Programming..."
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-all"
                    disabled
                  />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-yellow-800 font-medium">Registration Form Coming Soon</p>
                      <p className="text-xs text-yellow-700 mt-1">
                        We're building the best experience for you. The registration form will be available soon. 
                        For now, you can contact us to join the waitlist.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  disabled
                  className="w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join Waitlist (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Building Message */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Wait for Edgen Institute?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Over Speed</h4>
                  <p className="text-sm text-gray-600">We're taking time to ensure every course meets our high standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Verified Educators Only</h4>
                  <p className="text-sm text-gray-600">Every teacher goes through our verification process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Early Access Benefits</h4>
                  <p className="text-sm text-gray-600">Join now and get special perks when we launch</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transparent Process</h4>
                  <p className="text-sm text-gray-600">We'll keep you updated on our progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

