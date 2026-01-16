export const metadata = {
  title: 'Availability - Edgen Institute',
  description: 'Set your teaching availability on Edgen Institute.',
}

export default function TeacherAvailability() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Teaching <span className="gradient-text">Availability</span>
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Availability Management Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            Set your teaching schedule and availability so students can book sessions with you.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
          <p className="text-gray-600 text-center">Availability calendar will be available once the platform launches.</p>
        </div>
      </div>
    </div>
  )
}


