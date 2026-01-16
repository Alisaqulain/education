import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Student',
    location: 'New York, USA',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Edgen Institute changed my learning journey. Found the perfect math tutor who helped me improve my grades significantly. The platform is so easy to use!',
    subject: 'Mathematics',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Student',
    location: 'Mumbai, India',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'As a working professional, I needed flexible English classes. My teacher on Edgen Institute was amazing and very accommodating with my schedule.',
    subject: 'English',
  },
  {
    name: 'Emma Wilson',
    role: 'Student',
    location: 'London, UK',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'I was struggling with programming concepts. My tutor on Edgen Institute explained everything so clearly. Now I\'m confident in my coding skills!',
    subject: 'Programming',
  },
  {
    name: 'Michael Chen',
    role: 'Teacher',
    location: 'Singapore',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Teaching on Edgen Institute has been a game-changer. The platform is professional, payments are timely, and I\'ve connected with amazing students worldwide.',
    subject: 'Physics',
  },
  {
    name: 'Priya Sharma',
    role: 'Student',
    location: 'Delhi, India',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'The free trial lesson helped me find the perfect chemistry tutor. The quality of teachers here is outstanding. Highly recommend!',
    subject: 'Chemistry',
  },
  {
    name: 'David Martinez',
    role: 'Teacher',
    location: 'Madrid, Spain',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'As a Spanish teacher, I love how Edgen Institute connects me with students globally. The platform makes teaching online seamless and enjoyable.',
    subject: 'Spanish',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="gradient-text">Community Says</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from students and teachers who are thriving on Edgen Institute
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-xl border-2 border-gray-100 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Subject Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {testimonial.subject}
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


