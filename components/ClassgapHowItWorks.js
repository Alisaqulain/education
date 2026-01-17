'use client'

import AnimatedSection from './AnimatedSection'

export default function ClassgapHowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Find your perfect tutor',
      description: "You'll find your ideal tutor among the thousands who are registered on our platform. They will tailor the classes to your needs and help you to achieve your goals.",
      image: '/api/placeholder/400/300',
      alt: 'Four cards of tutors from Edgen Institute with free trial',
    },
    {
      number: '2',
      title: 'You choose the time',
      description: 'Choose an online tutor for the time and date you want, and enjoy the flexibility of online classes.',
      image: '/api/placeholder/400/300',
      alt: 'Sample calendar for online classes',
    },
    {
      number: '3',
      title: 'Learn in our virtual classroom',
      description: "We've designed a virtual classroom with everything you'll need for your classes: video conferencing, digital whiteboard, online document editor, Google Drive and YouTube integration...",
      image: '/api/placeholder/400/300',
      alt: 'Join virtual classroom on mobile, laptop, tablet',
    },
    {
      number: '4',
      title: 'Your satisfaction is our first priority',
      description: 'If after your first class you are not completely satisfied with your teacher, we will help you find another one.',
      image: '/api/placeholder/400/300',
      alt: 'Satisfaction guarantee',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInDown" className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold">
            🚀 Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            How does <span className="gradient-text">Edgen Institute</span> work?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It's easy! Live classes with an online private tutor
          </p>
        </AnimatedSection>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
              delay={index * 200}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-6 sm:gap-8 md:gap-12`}
              >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">{step.alt}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-lg">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary/20 mb-3 sm:mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}



