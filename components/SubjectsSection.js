import Link from 'next/link'

const subjectCategories = [
  {
    category: 'Languages',
    description: 'Learn from native speakers',
    subjects: [
      { name: 'English', teachers: 2500, icon: '🇬🇧' },
      { name: 'Spanish', teachers: 1800, icon: '🇪🇸' },
      { name: 'French', teachers: 1200, icon: '🇫🇷' },
      { name: 'German', teachers: 900, icon: '🇩🇪' },
      { name: 'Chinese', teachers: 800, icon: '🇨🇳' },
      { name: 'Japanese', teachers: 600, icon: '🇯🇵' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Academic Subjects',
    description: 'Expert tutors for all levels',
    subjects: [
      { name: 'Mathematics', teachers: 3200, icon: '📐' },
      { name: 'Physics', teachers: 1500, icon: '⚛️' },
      { name: 'Chemistry', teachers: 1400, icon: '🧪' },
      { name: 'Biology', teachers: 1300, icon: '🔬' },
      { name: 'History', teachers: 1100, icon: '📜' },
      { name: 'Geography', teachers: 800, icon: '🌍' },
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Programming & Tech',
    description: 'Master modern technology',
    subjects: [
      { name: 'Python', teachers: 2000, icon: '🐍' },
      { name: 'JavaScript', teachers: 1800, icon: '💻' },
      { name: 'Web Development', teachers: 1600, icon: '🌐' },
      { name: 'Data Science', teachers: 1200, icon: '📊' },
      { name: 'Machine Learning', teachers: 900, icon: '🤖' },
      { name: 'Java', teachers: 1100, icon: '☕' },
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Arts & Skills',
    description: 'Creative and professional skills',
    subjects: [
      { name: 'Music', teachers: 1500, icon: '🎵' },
      { name: 'Art & Design', teachers: 1200, icon: '🎨' },
      { name: 'Photography', teachers: 800, icon: '📷' },
      { name: 'Writing', teachers: 1000, icon: '✍️' },
      { name: 'Yoga', teachers: 600, icon: '🧘' },
      { name: 'Fitness', teachers: 700, icon: '💪' },
    ],
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function SubjectsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Explore <span className="gradient-text">250+ Subjects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find expert teachers for any subject you want to learn
          </p>
        </div>

        {/* Subject Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {subjectCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                <p className="text-white/90 text-sm">{category.description}</p>
              </div>

              {/* Subjects Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.subjects.map((subject, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group bg-white p-4 rounded-xl border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-md text-center"
                    >
                      <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {subject.icon}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                        {subject.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {subject.teachers}+ teachers
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Subjects Quick Access */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
            Popular Subjects Right Now
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Mathematics', 'English', 'Programming', 'Spanish', 'Physics', 'Chemistry', 'French', 'Web Development'].map((subject, index) => (
              <Link
                key={index}
                href={`/subjects/${subject.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {subject}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/subjects"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Subjects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
