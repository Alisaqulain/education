export const metadata = {
  title: 'Cookie Policy - Edgen Institute',
  description: 'Cookie policy for Edgen Institute. Learn about how we use cookies. Edgen Institute is a product of Bizsun Creative.',
}

export default function CookiePolicy() {
  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ownership Disclosure */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-xl border border-primary/20 mb-8">
          <p className="text-sm sm:text-base text-gray-700">
            <strong className="text-gray-900">Ownership Disclosure:</strong> Edgen Institute – Admission Hub is a product of{' '}
            <a href="https://bizsuncreative.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">
              Bizsun Creative
            </a>.
            Bizsun Creative owns and operates the platform and its digital infrastructure.
          </p>
        </div>

        <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, 
              improve user experience, and provide analytics data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Edgen Institute uses cookies to enhance Platform functionality, analyze usage patterns, and provide personalized experiences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies are necessary for the Platform to function properly. They enable core features such as:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>User authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Platform navigation and basic functionality</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Cannot be disabled:</strong> These cookies are essential and cannot be turned off without affecting Platform functionality.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies help us understand how users interact with the Platform:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Page views and navigation patterns</li>
                <li>Feature usage and engagement metrics</li>
                <li>Error tracking and performance monitoring</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Optional:</strong> You can disable analytics cookies through your browser settings or cookie preferences.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies remember your preferences and settings:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Language preferences</li>
                <li>Display settings</li>
                <li>User interface customizations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using Edgen Institute, you consent to our use of cookies as described in this policy. 
              When you first visit the Platform, you may see a cookie consent banner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Withdrawing Consent:</strong> You can withdraw your consent at any time by adjusting your browser settings 
              or Platform cookie preferences. Note that disabling certain cookies may limit Platform functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Platform Settings:</strong> Cookie preferences can be managed through your account settings 
              (when available) or by contacting Platform support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> Disabling essential cookies may prevent you from using certain Platform features, 
              including login and booking functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some cookies on our Platform are set by third-party services we use, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Analytics providers (to understand Platform usage)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Content delivery networks (for fast loading)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third parties have their own privacy policies and cookie practices. 
              We encourage you to review their policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Edgen Institute</strong><br />
                A product of Bizsun Creative
              </p>
              <p className="text-gray-700">
                <strong>Cookie Inquiries:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Have questions about cookies?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}



