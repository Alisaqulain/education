export const metadata = {
  title: 'Student Dashboard - Edgen Institute',
  description: 'Your student dashboard on Edgen Institute.',
}

export default function StudentDashboard() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Student <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-600">Welcome back! Manage your learning journey</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-8">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium mb-1">Dashboard Coming Soon</p>
              <p className="text-xs sm:text-sm text-yellow-700">
                The student dashboard will be available once the platform launches. You'll be able to manage bookings, messages, courses, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'My Bookings', icon: '📅', desc: 'View and manage your scheduled sessions' },
            { title: 'My Courses', icon: '📚', desc: 'Access your enrolled courses' },
            { title: 'Messages', icon: '💬', desc: 'Communicate with your teachers' },
            { title: 'Wishlist', icon: '⭐', desc: 'Save teachers and courses for later' },
            { title: 'Profile', icon: '👤', desc: 'Manage your account settings' },
            { title: 'Payment', icon: '💳', desc: 'View payment history and methods' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 card-hover">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


