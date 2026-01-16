import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Edgen Institute',
  description: 'Get in touch with Edgen Institute. For general inquiries, teacher applications, or student support.',
}

export default function Contact() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Have questions? We're here to help. Reach out to us for support, inquiries, or partnerships.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">General Inquiries</h3>
            <p className="text-gray-600 mb-4">
              For questions about the platform, features, or general information
            </p>
            <p className="text-primary font-semibold">info@edgeninstitute.com</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Teacher Support</h3>
            <p className="text-gray-600 mb-4">
              For educators interested in joining or existing teacher support
            </p>
            <p className="text-primary font-semibold">teachers@edgeninstitute.com</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Student Support</h3>
            <p className="text-gray-600 mb-4">
              For students with questions about courses, booking, or learning
            </p>
            <p className="text-primary font-semibold">students@edgeninstitute.com</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 card-hover">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Corporate</h3>
            <p className="text-gray-600 mb-4">
              For legal inquiries, corporate partnerships, or compliance matters
            </p>
            <p className="text-primary font-semibold mb-2">
              <a href="mailto:legal@bizsuncreative.com" className="hover:text-primary-dark">
                legal@bizsuncreative.com
              </a>
            </p>
            <div className="bg-gray-50 p-3 rounded-lg mt-4">
              <p className="text-xs text-gray-600">
                <strong className="text-gray-700">Note:</strong> For legal or corporate inquiries, contact Bizsun Creative. 
                Edgen Institute is a product of Bizsun Creative.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}

