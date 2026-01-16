import Link from 'next/link'

const subjectCategories = [
  {
    name: 'Languages',
    icon: '🌍',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Academic Subjects',
    icon: '📚',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Maths',
    icon: '🔢',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Physics',
    icon: '⚛️',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Chemistry',
    icon: '🧪',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Spanish for children',
    icon: '👶',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function ClassgapSubjects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Prepare for a test, learn a new subject or develop new skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn or improve in over 100 different subjects: maths, physics, programming, marketing...
          </p>
        </div>

        {/* Subject Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {subjectCategories.map((subject, index) => (
            <Link
              key={index}
              href={`/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group relative bg-gradient-to-r ${subject.color} text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3`}
            >
              <span className="text-2xl sm:text-3xl">{subject.icon}</span>
              <span>{subject.name}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/teachers"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Find my perfect tutor</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

