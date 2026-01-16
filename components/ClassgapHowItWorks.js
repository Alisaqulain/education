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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How does Edgen Institute work?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            It's easy! Live classes with an online private tutor
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 sm:gap-12`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{step.alt}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="bg-white rounded-xl p-6 sm:p-8">
                  <div className="text-6xl sm:text-7xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


