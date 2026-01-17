import Link from 'next/link'

export const metadata = {
  title: 'Subjects - Edgen Institute',
  description: 'Explore all subjects available on Edgen Institute. Find teachers for languages, academics, programming, and more.',
}

export default function Subjects() {
  const subjectCategories = [
    {
      category: 'Languages',
      subjects: ['English', 'Spanish', 'French', 'German', 'Hindi', 'Mandarin', 'Japanese', 'Arabic'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      category: 'Academic Subjects',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Economics'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      category: 'Programming & Tech',
      subjects: ['Python', 'JavaScript', 'Web Development', 'Data Science', 'Machine Learning', 'Java', 'C++'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      category: 'Arts & Skills',
      subjects: ['Music', 'Art', 'Photography', 'Writing', 'Design', 'Yoga', 'Fitness'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Explore All <span className="gradient-text">Subjects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Discover a wide range of subjects taught by verified educators on Edgen Institute
          </p>
        </div>

        {/* Subject Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {subjectCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
                {category.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {category.subjects.map((subject, subIndex) => (
                  <li key={subIndex} className="flex items-center text-sm sm:text-base text-gray-700">
                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-10 rounded-2xl border border-primary/20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Don't See Your Subject?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always expanding our subject offerings. Apply to teach your subject or let us know what you'd like to learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center min-h-[48px] flex items-center justify-center"
            >
              Teach Your Subject
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
            >
              Request a Subject
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



