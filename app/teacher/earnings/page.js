export const metadata = {
  title: 'Earnings - Edgen Institute',
  description: 'Track your earnings and payouts on Edgen Institute.',
}

export default function TeacherEarnings() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          My <span className="gradient-text">Earnings</span>
        </h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 sm:p-8 mb-8">
          <p className="text-sm text-yellow-800 font-medium mb-1">Earnings Dashboard Coming Soon</p>
          <p className="text-xs sm:text-sm text-yellow-700">
            Track your income, view payment history, and manage payouts once the platform launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">₹0</div>
            <div className="text-sm text-gray-600 mb-1">Total Earnings</div>
            <div className="text-xs text-gray-500">All time</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">₹0</div>
            <div className="text-sm text-gray-600 mb-1">This Month</div>
            <div className="text-xs text-gray-500">Current period</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-3xl font-bold text-primary mb-2">₹0</div>
            <div className="text-sm text-gray-600 mb-1">Pending Payout</div>
            <div className="text-xs text-gray-500">Awaiting transfer</div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payment History</h3>
          <p className="text-gray-600 text-center">No payment history yet</p>
        </div>
      </div>
    </div>
  )
}



