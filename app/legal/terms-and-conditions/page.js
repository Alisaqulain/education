export const metadata = {
  title: 'Terms and Conditions - Edgen Institute',
  description: 'Terms and conditions for using Edgen Institute platform. Edgen Institute is a product of Bizsun Creative.',
}

export default function TermsAndConditions() {
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
              Terms and <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#overview" className="text-primary hover:text-primary-dark">1. Platform Overview</a></li>
              <li><a href="#eligibility" className="text-primary hover:text-primary-dark">2. User Eligibility</a></li>
              <li><a href="#teacher-responsibilities" className="text-primary hover:text-primary-dark">3. Teacher Responsibilities</a></li>
              <li><a href="#student-responsibilities" className="text-primary hover:text-primary-dark">4. Student Responsibilities</a></li>
              <li><a href="#account-usage" className="text-primary hover:text-primary-dark">5. Account Usage Rules</a></li>
              <li><a href="#payments" className="text-primary hover:text-primary-dark">6. Payments & Fees</a></li>
              <li><a href="#content-ownership" className="text-primary hover:text-primary-dark">7. Content Ownership</a></li>
              <li><a href="#suspension" className="text-primary hover:text-primary-dark">8. Suspension & Termination</a></li>
              <li><a href="#liability" className="text-primary hover:text-primary-dark">9. Limitation of Liability</a></li>
              <li><a href="#governing-law" className="text-primary hover:text-primary-dark">10. Governing Law</a></li>
              <li><a href="#contact" className="text-primary hover:text-primary-dark">11. Contact Information</a></li>
            </ul>
          </div>

          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Platform Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Edgen Institute – Admission Hub ("Platform", "we", "us", "our") is a technology-enabled learning marketplace operated by Bizsun Creative. 
              The Platform facilitates connections between educators ("Teachers") and learners ("Students") for online educational services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> Edgen Institute is not an educational institution, university, or accredited learning provider. 
              We act as an intermediary platform connecting independent educators with students.
            </p>
          </section>

          <section id="eligibility" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use Edgen Institute, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Be at least 18 years of age, or have parental/guardian consent if under 18</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
              <li>Not use the Platform for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section id="teacher-responsibilities" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Teacher Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Teachers using the Platform agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide accurate qualifications, experience, and teaching credentials</li>
              <li>Deliver educational services as described in their profile</li>
              <li>Maintain professional conduct and respect student boundaries</li>
              <li>Set fair and transparent pricing for their services</li>
              <li>Honor scheduled sessions and provide reasonable notice for cancellations</li>
              <li>Comply with all applicable educational and professional standards</li>
              <li>Not engage in any fraudulent, misleading, or deceptive practices</li>
            </ul>
          </section>

          <section id="student-responsibilities" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Student Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Students using the Platform agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide accurate information during registration</li>
              <li>Respect teachers' time and professional boundaries</li>
              <li>Make timely payments for booked sessions</li>
              <li>Provide reasonable notice for session cancellations</li>
              <li>Use the Platform in good faith and for legitimate educational purposes</li>
              <li>Not share account credentials with others</li>
              <li>Report any inappropriate behavior or concerns to Platform administrators</li>
            </ul>
          </section>

          <section id="account-usage" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Account Usage Rules</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users are prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Creating multiple accounts to circumvent Platform policies</li>
              <li>Sharing, selling, or transferring account access</li>
              <li>Using automated systems to access the Platform</li>
              <li>Engaging in spam, harassment, or abusive behavior</li>
              <li>Violating intellectual property rights of others</li>
              <li>Attempting to reverse engineer or compromise Platform security</li>
            </ul>
          </section>

          <section id="payments" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments & Fees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Payment Processing:</strong> All payments are processed through secure third-party payment processors. 
              Edgen Institute and Bizsun Creative do not store complete payment card information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Platform Fees:</strong> The Platform may charge service fees for facilitating transactions. 
              Fee structures will be clearly disclosed before booking or enrollment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Teacher Payments:</strong> Teachers receive payments according to the Platform's payout schedule and terms, 
              minus applicable platform fees.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Refunds:</strong> Refund policies are outlined in our Refund & Cancellation Policy. 
              Individual teachers may have their own cancellation and refund terms.
            </p>
          </section>

          <section id="content-ownership" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Content Ownership</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>User Content:</strong> Users retain ownership of content they create and upload to the Platform. 
              By using the Platform, users grant Edgen Institute and Bizsun Creative a license to use, display, and distribute 
              such content for Platform operations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Platform Content:</strong> All Platform design, code, logos, and proprietary content are owned by Bizsun Creative 
              and protected by intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Course Materials:</strong> Course content created by teachers remains the property of the teacher, 
              subject to Platform usage terms.
            </p>
          </section>

          <section id="suspension" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Suspension & Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate accounts that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Violate these Terms and Conditions</li>
              <li>Engage in fraudulent, illegal, or harmful activities</li>
              <li>Provide false or misleading information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Fail to comply with Platform policies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Users may terminate their account at any time by contacting Platform support. 
              Upon termination, access to Platform services will cease, subject to any outstanding obligations.
            </p>
          </section>

          <section id="liability" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Platform Role:</strong> Edgen Institute acts as an intermediary connecting teachers and students. 
              We do not guarantee the quality, accuracy, or outcomes of educational services provided by teachers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>No Warranties:</strong> The Platform is provided "as is" without warranties of any kind. 
              We do not guarantee uninterrupted, error-free, or secure Platform operation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Limitation:</strong> To the maximum extent permitted by law, Edgen Institute, Bizsun Creative, 
              and their affiliates shall not be liable for indirect, incidental, special, or consequential damages 
              arising from Platform use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Teacher-Student Relationship:</strong> The Platform facilitates connections but is not a party to 
              the educational relationship between teachers and students. Users are responsible for their own interactions.
            </p>
          </section>

          <section id="governing-law" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions are governed by the laws of India, with jurisdiction in Indian courts. 
              For international users, applicable local laws may also apply.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Compliance:</strong> The Platform operates in compliance with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Information Technology Act, 2000 (India) and related rules</li>
              <li>General Data Protection Regulation (GDPR) for EU users</li>
              <li>California Consumer Privacy Act (CCPA) for California users</li>
              <li>Other applicable local data protection and consumer protection laws</li>
            </ul>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Edgen Institute</strong><br />
                A product of Bizsun Creative
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Legal Inquiries:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
              <p className="text-gray-700">
                <strong>General Inquiries:</strong><br />
                Email: <a href="mailto:info@edgeninstitute.com" className="text-primary hover:text-primary-dark">info@edgeninstitute.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Have questions about these terms?
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



