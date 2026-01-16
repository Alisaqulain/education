export const metadata = {
  title: 'Privacy Policy - Edgen Institute',
  description: 'Privacy policy for Edgen Institute. Learn how we protect your data. Edgen Institute is a product of Bizsun Creative.',
}

export default function PrivacyPolicy() {
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#introduction" className="text-primary hover:text-primary-dark">1. Introduction</a></li>
              <li><a href="#data-collection" className="text-primary hover:text-primary-dark">2. Data We Collect</a></li>
              <li><a href="#data-use" className="text-primary hover:text-primary-dark">3. How We Use Your Data</a></li>
              <li><a href="#cookies" className="text-primary hover:text-primary-dark">4. Cookies & Analytics</a></li>
              <li><a href="#data-protection" className="text-primary hover:text-primary-dark">5. Data Protection</a></li>
              <li><a href="#user-rights" className="text-primary hover:text-primary-dark">6. Your Rights</a></li>
              <li><a href="#third-party" className="text-primary hover:text-primary-dark">7. Third-Party Services</a></li>
              <li><a href="#policy-updates" className="text-primary hover:text-primary-dark">8. Policy Updates</a></li>
              <li><a href="#contact" className="text-primary hover:text-primary-dark">9. Contact Us</a></li>
            </ul>
          </div>

          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Edgen Institute – Admission Hub ("Platform", "we", "us", "our") is operated by Bizsun Creative. 
              We are committed to protecting your privacy and handling your personal data responsibly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our Platform. 
              By using Edgen Institute, you agree to the practices described in this policy.
            </p>
          </section>

          <section id="data-collection" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Information You Provide:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, country, city</li>
              <li><strong>Profile Information:</strong> Educational background, teaching subjects, qualifications, certifications</li>
              <li><strong>Communication Data:</strong> Messages sent through the Platform, support inquiries</li>
              <li><strong>Payment Information:</strong> Processed through secure third-party payment processors (we do not store full card details)</li>
              <li><strong>Content:</strong> Profile photos, introduction videos, course materials you upload</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Automatically Collected Information:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, features used, session duration)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section id="data-use" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide and improve Platform services</li>
              <li>Facilitate connections between teachers and students</li>
              <li>Process payments and manage transactions</li>
              <li>Verify teacher qualifications and maintain quality standards</li>
              <li>Send important Platform updates and notifications</li>
              <li>Respond to support requests and inquiries</li>
              <li>Analyze Platform usage to improve user experience</li>
              <li>Ensure Platform security and prevent fraud</li>
              <li>Comply with legal obligations and enforce Platform policies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Marketing Communications:</strong> We may send promotional emails with your consent. 
              You can opt-out at any time using the unsubscribe link in emails or by contacting us.
            </p>
          </section>

          <section id="cookies" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies & Analytics</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Essential Cookies:</strong> Required for Platform functionality, authentication, and security.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Analytics Cookies:</strong> Help us understand how users interact with the Platform to improve services. 
              Analytics services may be provided by third parties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You can manage cookie preferences through your browser settings. 
              Note that disabling certain cookies may affect Platform functionality.
            </p>
          </section>

          <section id="data-protection" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Protection & Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Encryption of data in transit (SSL/TLS)</li>
              <li>Secure data storage and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Secure payment processing through certified third-party providers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Data Retention:</strong> We retain your personal data only as long as necessary to provide services, 
              comply with legal obligations, or resolve disputes. You may request deletion of your data subject to legal requirements.
            </p>
          </section>

          <section id="user-rights" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights (GDPR/CCPA Compliance)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to certain types of data processing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>. 
              We will respond to your request within 30 days, subject to verification of your identity.
            </p>
          </section>

          <section id="third-party" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services that process your data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Payment Processors:</strong> For secure payment transactions</li>
              <li><strong>Analytics Services:</strong> To understand Platform usage</li>
              <li><strong>Cloud Hosting:</strong> For data storage and Platform infrastructure</li>
              <li><strong>Communication Tools:</strong> For email and messaging services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third parties are contractually obligated to protect your data and use it only for specified purposes. 
              We do not sell your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section id="policy-updates" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify users of material changes via email or Platform notification.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The "Last Updated" date at the top indicates when this policy was last revised. 
              Continued use of the Platform after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For privacy-related questions or to exercise your rights, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Edgen Institute</strong><br />
                A product of Bizsun Creative
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Privacy Inquiries:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Have questions about privacy?
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


