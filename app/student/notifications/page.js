export const metadata = {
  title: 'Notifications - Edgen Institute',
  description: 'View your notifications on Edgen Institute.',
}

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Available',
      message: 'Calculus Problem Set 3 has been assigned',
      time: '2 hours ago',
      read: false,
      link: '/student/assignments/1',
    },
    {
      id: 2,
      type: 'course',
      title: 'New Lesson Available',
      message: 'Advanced Mathematics - Lesson 9 is now available',
      time: '1 day ago',
      read: false,
      link: '/student/courses/1',
    },
    {
      id: 3,
      type: 'grade',
      title: 'Assignment Graded',
      message: 'Your essay "My Learning Journey" has been graded: A',
      time: '2 days ago',
      read: true,
      link: '/student/assignments/2',
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case 'assignment': return '📝'
      case 'course': return '📚'
      case 'grade': return '✅'
      default: return '🔔'
    }
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="gradient-text">Notifications</span>
            </h1>
            <p className="text-gray-600">Stay updated with your learning progress</p>
          </div>
          <button className="text-primary hover:text-primary-dark font-medium text-sm">
            Mark all as read
          </button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <a
              key={notification.id}
              href={notification.link}
              className={`block bg-white rounded-xl border-2 p-4 hover:border-primary transition-all ${
                notification.read ? 'border-gray-100' : 'border-primary/30 bg-primary/5'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{getIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-gray-600">No notifications</p>
          </div>
        )}
      </div>
    </div>
  )
}

