export const metadata = {
  title: 'Admin Login - Edgen Institute',
  description: 'Admin login portal for Edgen Institute.',
}

export default function AdminLogin() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Admin <span className="gradient-text">Portal</span>
            </h1>
            <p className="text-gray-600">Secure admin access</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
              <input
                type="email"
                placeholder="admin@edgeninstitute.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                disabled
              />
            </div>
            <button
              disabled
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center"
            >
              Access Admin Panel (Coming Soon)
            </button>
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs text-red-800 text-center">
              <strong>Restricted Access:</strong> Admin portal is only accessible to authorized personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

