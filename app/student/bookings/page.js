export const metadata = {
  title: 'My Bookings - Edgen Institute',
  description: 'View and manage your scheduled sessions on Edgen Institute.',
}

export default function StudentBookings() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          My <span className="gradient-text">Bookings</span>
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium mb-1">Booking System Coming Soon</p>
              <p className="text-xs sm:text-sm text-yellow-700">
                Once the platform launches, you'll be able to view all your scheduled sessions, upcoming classes, and booking history here.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Upcoming Sessions</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Completed Sessions</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Total Hours</div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
          <p className="text-gray-600 text-center">No bookings yet. Start learning by finding a teacher!</p>
        </div>
      </div>
    </div>
  )
}



