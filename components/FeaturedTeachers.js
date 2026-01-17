'use client'

import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const teachers = [
  {
    name: 'Dr. Sarah Williams',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 234,
    price: 35,
    image: '/api/placeholder/200/200',
    country: '🇺🇸 USA',
    experience: '10+ years',
    students: 150,
    online: true,
  },
  {
    name: 'Prof. Rajesh Kumar',
    subject: 'Physics',
    rating: 4.8,
    reviews: 189,
    price: 28,
    image: '/api/placeholder/200/200',
    country: '🇮🇳 India',
    experience: '8+ years',
    students: 120,
    online: true,
  },
  {
    name: 'Ms. Emma Thompson',
    subject: 'English',
    rating: 5.0,
    reviews: 312,
    price: 30,
    image: '/api/placeholder/200/200',
    country: '🇬🇧 UK',
    experience: '6+ years',
    students: 200,
    online: true,
  },
  {
    name: 'Dr. Michael Chen',
    subject: 'Programming',
    rating: 4.9,
    reviews: 267,
    price: 45,
    image: '/api/placeholder/200/200',
    country: '🇸🇬 Singapore',
    experience: '12+ years',
    students: 180,
    online: true,
  },
  {
    name: 'Ms. Priya Sharma',
    subject: 'Chemistry',
    rating: 4.8,
    reviews: 156,
    price: 25,
    image: '/api/placeholder/200/200',
    country: '🇮🇳 India',
    experience: '5+ years',
    students: 95,
    online: true,
  },
  {
    name: 'Prof. David Martinez',
    subject: 'Spanish',
    rating: 5.0,
    reviews: 298,
    price: 32,
    image: '/api/placeholder/200/200',
    country: '🇪🇸 Spain',
    experience: '9+ years',
    students: 220,
    online: true,
  },
]

export default function FeaturedTeachers() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold">
            ⭐ Top Rated Educators
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Featured <span className="gradient-text">Teachers</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet some of our top-rated educators ready to help you learn
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {teachers.map((teacher, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 100}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-primary transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden group transform hover:-translate-y-3 sm:hover:-translate-y-4 hover:scale-105 relative touch-manipulation">
              {/* Teacher Image */}
              <div className="relative h-48 sm:h-52 md:h-56 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                    {teacher.name.charAt(0)}
                  </div>
                </div>
                {teacher.online && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center space-x-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      <span>Online</span>
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full">
                    {teacher.country}
                  </span>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">${teacher.price}</div>
                    <div className="text-xs text-gray-500">/hour</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(teacher.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{teacher.rating}</span>
                  <span className="text-sm text-gray-500">({teacher.reviews} reviews)</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{teacher.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{teacher.experience}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Link
                    href={`/teachers/${teacher.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center text-xs sm:text-sm touch-manipulation"
                  >
                    View Profile
                  </Link>
                  <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-primary text-primary rounded-lg sm:rounded-xl font-bold hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm shadow-md touch-manipulation">
                    Book Trial
                  </button>
                </div>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/teachers"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Teachers</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}



