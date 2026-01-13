import Link from 'next/link'

export default function CoursesSection() {
  const courseCategories = [
    {
      category: 'Languages',
      courses: ['English', 'Spanish', 'French', 'German'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      category: 'Academic Subjects',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      category: 'Skills & Programming',
      courses: ['Web Development', 'Python', 'Data Science', 'Digital Marketing'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ]

  return (
    <section id="courses" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Explore Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0 mb-3 sm:mb-4">
            Quality courses taught by verified educators
          </p>
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-primary font-semibold text-xs sm:text-sm md:text-base">Launching Soon</span>
          </div>
        </div>

        {/* Course Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {courseCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-white">
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{category.category}</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {category.courses.map((course, subIndex) => (
                  <li key={subIndex} className="flex items-center text-sm sm:text-base text-gray-700">
                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Student CTA */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/10 p-8 sm:p-10 rounded-2xl border border-secondary/20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
            Ready to Start Learning?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join as a student and get notified when our courses launch. Be among the first to access quality education from verified educators.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/student-register"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Start Learning</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-secondary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              <span>Become a Teacher</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

