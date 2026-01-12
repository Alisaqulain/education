export const metadata = {
  title: 'Join Edgen Institute as an Educator - Teacher Registration',
  description: 'Join Edgen Institute as a passionate educator. Fill out our registration form to become part of our trusted education platform.',
}

export default function Register() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Edgen Institute as an <span className="gradient-text">Educator</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We welcome passionate teachers who want to grow with a trusted education platform.
          </p>
        </div>

        {/* Trust Notes */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl mb-8 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Your data privacy is respected and protected</li>
                <li>• We never share your information with third parties</li>
                <li>• Information is used solely for onboarding and verification</li>
                <li>• No spam, no unwanted communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-primary to-secondary">
            <h2 className="text-2xl font-bold text-white">Registration Form</h2>
            <p className="text-white/90 mt-2">Please fill out all required fields carefully</p>
          </div>
          <div className="p-4 md:p-8">
            <div className="relative w-full" style={{ minHeight: '1200px', height: '1200px' }}>
              <iframe
                src="https://forms.gle/TXfJDrvQMKGq1gkVA?embedded=true"
                className="w-full border-0 rounded-lg"
                title="Edgen Institute Teacher Registration Form"
                allow="fullscreen"
                style={{ minHeight: '1200px', height: '1200px' }}
                scrolling="yes"
              >
                <p className="text-center p-8">
                  Your browser does not support iframes.{' '}
                  <a 
                    href="https://forms.gle/TXfJDrvQMKGq1gkVA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Open the form in a new window
                  </a>
                </p>
              </iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://forms.gle/TXfJDrvQMKGq1gkVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center space-x-2"
              >
                <span>Open form in new window</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Having trouble with the form? Contact us for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}

