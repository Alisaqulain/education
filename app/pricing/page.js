export const metadata = {
  title: 'Pricing - Edgen Institute',
  description: 'Transparent pricing information for Edgen Institute. Fair rates for teachers and students.',
}

export default function Pricing() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Fair, transparent pricing that works for both educators and learners
          </p>
        </div>

        {/* Pricing Philosophy */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-xl border border-primary/20 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Pricing Philosophy</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-gray-900">Teacher-Set Rates:</strong> Educators set their own hourly rates based on their expertise and experience</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-gray-900">Transparent Fees:</strong> Clear platform fees disclosed upfront - no hidden charges</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-gray-900">Fair for Everyone:</strong> Balanced pricing that supports both teacher income and student affordability</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p><strong className="text-gray-900">Flexible Options:</strong> One-on-one sessions, group classes, and course packages available</p>
            </div>
          </div>
        </div>

        {/* Pricing Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">For Students</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pay per session or purchase packages</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rates vary by teacher and subject</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure payment processing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent pricing - no surprises</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              * Exact pricing will be displayed when booking with individual teachers
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">For Teachers</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Set your own hourly rates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Competitive platform fees</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Regular payout schedule</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep majority of your earnings</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              * Platform fee structure will be shared during teacher onboarding
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-yellow-800 font-medium mb-1">Pricing Information</p>
              <p className="text-xs sm:text-sm text-yellow-700">
                Pricing details are for informational purposes. Actual rates are set by individual teachers and may vary. 
                Platform fees and payment terms will be clearly disclosed during the booking process. 
                For specific pricing inquiries, please contact us or individual teachers once the platform launches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



