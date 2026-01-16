export const metadata = {
  title: 'My Courses - Edgen Institute',
  description: 'View and manage your enrolled courses on Edgen Institute.',
}

export default function MyCourses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      teacher: 'Dr. Sarah Williams',
      progress: 65,
      lessons: 12,
      completed: 8,
      nextLesson: '2024-01-20',
      image: '/api/placeholder/300/200',
    },
    {
      id: 2,
      title: 'English Conversation',
      teacher: 'Ms. Emma Thompson',
      progress: 40,
      lessons: 10,
      completed: 4,
      nextLesson: '2024-01-18',
      image: '/api/placeholder/300/200',
    },
    {
      id: 3,
      title: 'Python Programming',
      teacher: 'Dr. Michael Chen',
      progress: 90,
      lessons: 15,
      completed: 13,
      nextLesson: '2024-01-22',
      image: '/api/placeholder/300/200',
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            My <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {courses.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet</p>
            <a href="/courses" className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              <span>Browse Courses</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl">📚</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">by {course.teacher}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-primary">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{course.completed} of {course.lessons} lessons</span>
                    <span>Next: {course.nextLesson}</span>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`/student/courses/${course.id}`}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-center text-sm"
                    >
                      Continue Learning
                    </a>
                    <a
                      href={`/student/courses/${course.id}/assignments`}
                      className="px-4 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      Assignments
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


