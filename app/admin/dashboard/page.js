export const metadata = {
  title: 'Admin Dashboard - Edgen Institute',
  description: 'Admin dashboard for managing Edgen Institute platform.',
}

export default function AdminDashboard() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-600">Platform management and analytics</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Admin Dashboard Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            The admin dashboard will provide comprehensive platform management tools once the system launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Total Teachers</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Active Sessions</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Pending Verifications</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Manage Teachers', icon: '👨‍🏫', desc: 'Review and manage teacher accounts' },
            { title: 'Manage Students', icon: '👩‍🎓', desc: 'View and manage student accounts' },
            { title: 'Courses', icon: '📚', desc: 'Manage course catalog' },
            { title: 'Subjects', icon: '📖', desc: 'Manage subject categories' },
            { title: 'Reports', icon: '📊', desc: 'View platform analytics' },
            { title: 'Settings', icon: '⚙️', desc: 'Platform configuration' },
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



