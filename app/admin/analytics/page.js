export const metadata = {
  title: 'Platform Analytics - Admin - Edgen Institute',
  description: 'Platform-wide analytics dashboard for Edgen Institute.',
}

export default function AdminAnalytics() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Platform <span className="gradient-text">Analytics</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Users', value: '62,450', change: '+15%' },
            { label: 'Active Teachers', value: '10,234', change: '+8%' },
            { label: 'Total Revenue', value: '$1.2M', change: '+22%' },
            { label: 'Course Completions', value: '45,678', change: '+12%' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-green-600">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">User Growth</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Growth chart will be displayed here
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">Revenue Trends</h2>
            <div className="h-64 flex items-center justify-center text-gray-400">
              Revenue chart will be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}








