export const metadata = {
  title: 'Analytics - Edgen Institute',
  description: 'View your teaching analytics on Edgen Institute.',
}

export default function Analytics() {
  const stats = [
    { label: 'Total Students', value: 45, change: '+12%', trend: 'up' },
    { label: 'Active Courses', value: 8, change: '+2', trend: 'up' },
    { label: 'Total Revenue', value: '$12,450', change: '+18%', trend: 'up' },
    { label: 'Average Rating', value: '4.9/5', change: '+0.2', trend: 'up' },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Teaching <span className="gradient-text">Analytics</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="flex items-center text-sm text-green-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">Revenue Overview</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Revenue chart will be displayed here
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">Student Growth</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Growth chart will be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

