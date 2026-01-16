export const metadata = {
  title: 'Manage Teachers - Admin - Edgen Institute',
  description: 'Admin panel for managing teachers on Edgen Institute.',
}

export default function AdminTeachers() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Manage <span className="gradient-text">Teachers</span>
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Teacher Management Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            Manage teacher accounts, verifications, and profiles from this panel.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-600">Teacher management interface will be available here</p>
        </div>
      </div>
    </div>
  )
}

