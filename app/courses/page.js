export const metadata = {
  title: 'Courses - Edgen Institute',
  description: 'Explore quality courses from verified educators. Courses launching soon on Edgen Institute.',
}

export default function Courses() {
  const courseCategories = [
    {
      category: 'Language Courses',
      courses: ['English Mastery', 'Spanish for Beginners', 'French Conversation', 'German Basics'],
      level: 'All Levels',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      category: 'STEM Courses',
      courses: ['Advanced Mathematics', 'Physics Fundamentals', 'Chemistry Basics', 'Programming 101'],
      level: 'Beginner to Advanced',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      category: 'Professional Skills',
      courses: ['Digital Marketing', 'Data Analysis', 'Web Development', 'Business Writing'],
      level: 'Professional',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
            <svg className="w-5 h-5 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-primary font-semibold text-sm sm:text-base">Courses Launching Soon</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Quality courses from verified educators. Coming soon to Edgen Institute.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {courseCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.level}</p>
              <ul className="space-y-2">
                {category.courses.map((course, subIndex) => (
                  <li key={subIndex} className="flex items-center text-sm text-gray-700">
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

        {/* Info Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-10 rounded-2xl border border-primary/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Be the First to Know
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our waitlist to get notified when courses launch. Early access available for registered students.
          </p>
          <a
            href="/student-register"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[48px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Join Student Waitlist</span>
          </a>
        </div>
      </div>
    </div>
  )
}

