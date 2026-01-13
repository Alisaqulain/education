import CoreValues from '@/components/CoreValues'
import VisionMission from '@/components/VisionMission'

export const metadata = {
  title: 'About Us - Edgen Institute',
  description: 'Learn about Edgen Institute\'s mission to restore trust, quality, and transparency in online education.',
}

export default function About() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Edgen Institute</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Edgen Institute is built with a mission to restore trust, quality, and transparency in online education.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              The online education landscape has grown rapidly, but not always in the right direction. Many platforms prioritize profit over quality, leaving both educators and learners feeling disconnected and undervalued.
            </p>
            <p className="text-lg leading-relaxed">
              Edgen Institute was created to change that. We recognized that the heart of education lies in the relationship between passionate teachers and curious students. Our platform is designed with an <strong className="text-primary">educator-first mindset</strong>, ensuring that teachers are respected, fairly compensated, and given the tools they need to succeed.
            </p>
            <p className="text-lg leading-relaxed">
              We believe that when educators thrive, students learn better. When transparency replaces hidden fees, trust is built. And when quality is prioritized over quantity, everyone wins.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - Highlighted */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-2xl border-4 border-primary/30">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Vision</h2>
            <p className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">
              To become a global, trusted bridge between educators and learners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-900">Support educators globally</strong> - Provide a platform where teachers can grow, earn fairly, and focus on what they do best: teaching.
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-900">Ensure learning quality</strong> - Maintain high standards for both educators and the learning experience, ensuring students receive the best education possible.
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-900">Build sustainable education ecosystems</strong> - Create a model that benefits educators, learners, and the broader community for the long term.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValues />

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why <span className="gradient-text">Trust Us</span>
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                At Edgen Institute, we don't make exaggerated marketing claims. We focus on building genuine relationships, maintaining ethical practices, and delivering real value to our community.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to transparency means you'll always know what to expect. Our dedication to quality means we carefully vet every educator. And our educator-first approach means we're here to support your growth, not just extract value.
              </p>
              <p className="text-lg leading-relaxed font-semibold text-primary">
                We're building something different—a platform you can trust, built on integrity, and designed for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


