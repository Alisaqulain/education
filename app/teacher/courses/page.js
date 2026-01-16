export const metadata = {
  title: 'My Courses - Teacher - Edgen Institute',
  description: 'Manage your courses on Edgen Institute.',
}

export default function TeacherCourses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      students: 45,
      status: 'published',
      revenue: 13455,
      rating: 4.9,
    },
    {
      id: 2,
      title: 'English Conversation',
      students: 32,
      status: 'published',
      revenue: 8960,
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Python Programming',
      students: 28,
      status: 'draft',
      revenue: 0,
      rating: null,
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              My <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-gray-600">Manage and edit your courses</p>
          </div>
          <a
            href="/teacher/create-course"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            + Create Course
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{course.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="font-semibold">{course.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold">${course.revenue.toLocaleString()}</span>
                </div>
                {course.rating && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-semibold">{course.rating}/5</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <a
                  href={`/teacher/courses/${course.id}`}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-center text-sm"
                >
                  Manage
                </a>
                <a
                  href={`/teacher/courses/${course.id}/edit`}
                  className="px-4 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                >
                  Edit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

