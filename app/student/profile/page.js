export const metadata = {
  title: 'Student Profile - Edgen Institute',
  description: 'Manage your student profile on Edgen Institute.',
}

export default function StudentProfile() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          My <span className="gradient-text">Profile</span>
        </h1>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                disabled
              >
                <option>Select country</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learning Interests</label>
              <textarea
                rows="3"
                placeholder="What subjects are you interested in learning?"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base resize-none"
                disabled
              />
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-xs sm:text-sm text-yellow-800">
                Profile management will be available once the platform launches.
              </p>
            </div>
            <button
              disabled
              className="w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center"
            >
              Save Profile (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}








