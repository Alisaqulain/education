export const metadata = {
  title: 'Teacher Dashboard - Edgen Institute',
  description: 'Your teacher dashboard on Edgen Institute.',
}

export default function TeacherDashboard() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Teacher <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-gray-600">Manage your teaching profile and students</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Dashboard Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            The teacher dashboard will be available once the platform launches. You'll be able to manage students, schedule, earnings, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Upcoming Sessions</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">0</div>
            <div className="text-sm text-gray-600">Total Hours</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-primary mb-1">₹0</div>
            <div className="text-sm text-gray-600">Total Earnings</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'My Profile', icon: '👤', desc: 'Manage your teaching profile' },
            { title: 'Availability', icon: '📅', desc: 'Set your teaching schedule' },
            { title: 'Students', icon: '👥', desc: 'View and manage your students' },
            { title: 'Earnings', icon: '💰', desc: 'Track your income and payouts' },
            { title: 'Messages', icon: '💬', desc: 'Communicate with students' },
            { title: 'Settings', icon: '⚙️', desc: 'Account and preference settings' },
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








