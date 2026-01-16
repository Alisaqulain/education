export const metadata = {
  title: 'Disclaimer - Edgen Institute',
  description: 'Disclaimer for Edgen Institute platform. Edgen Institute is a product of Bizsun Creative.',
}

export default function Disclaimer() {
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
              <span className="gradient-text">Disclaimer</span>
            </h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Facilitation Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Platform Role:</strong> Edgen Institute – Admission Hub is a technology-enabled marketplace that facilitates 
              connections between independent educators ("Teachers") and learners ("Students"). 
              The Platform is operated by Bizsun Creative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Not an Educational Institution:</strong> Edgen Institute is <strong>not</strong> an educational institution, 
              university, college, or accredited learning provider. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Grant degrees, diplomas, or formal certifications</li>
              <li>Provide accredited educational programs</li>
              <li>Employ teachers as staff members</li>
              <li>Guarantee educational outcomes or learning results</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We act solely as an intermediary platform connecting teachers and students for educational services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Employment Guarantee</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For Teachers:</strong> Edgen Institute does not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Minimum number of students or bookings</li>
              <li>Specific income levels or earnings</li>
              <li>Continuous Platform availability</li>
              <li>Employment or contractor status</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Teachers are independent service providers, not employees of Edgen Institute or Bizsun Creative.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Academic Guarantee</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For Students:</strong> Edgen Institute does not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Specific learning outcomes or academic results</li>
              <li>Skill improvements or knowledge acquisition</li>
              <li>Test scores or examination success</li>
              <li>Career advancement or job placement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Educational success depends on various factors including student effort, teacher quality, 
              individual learning styles, and external circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Intermediary Role</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Service Facilitation:</strong> Edgen Institute facilitates educational services but is not a party to 
              the educational relationship between teachers and students. We:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide the technology platform for connections</li>
              <li>Process payments and manage transactions</li>
              <li>Verify teacher qualifications (to the best of our ability)</li>
              <li>Moderate Platform content and user behavior</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Not Responsible For:</strong> We are not responsible for the quality, accuracy, or outcomes of 
              educational services provided by teachers. Disputes between teachers and students should be resolved directly 
              or through Platform support, but we are not liable for service delivery issues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Platform may contain links to external websites, resources, or third-party services. 
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>The content, accuracy, or availability of external websites</li>
              <li>Privacy practices of third-party services</li>
              <li>Products or services offered by external providers</li>
              <li>Any damages or losses resulting from use of external links</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Users access external links at their own risk. We encourage reviewing third-party terms and privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Accuracy Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive for accuracy, we do not guarantee that all Platform content is:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Complete, accurate, or up-to-date</li>
              <li>Free from errors or omissions</li>
              <li>Suitable for all users or purposes</li>
              <li>Compliant with all local educational regulations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Users should verify important information independently and not rely solely on Platform content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to maintain Platform availability but do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Uninterrupted or error-free service</li>
              <li>100% uptime or availability</li>
              <li>Immediate resolution of technical issues</li>
              <li>Compatibility with all devices or browsers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The Platform may experience downtime for maintenance, updates, or technical issues. 
              We are not liable for losses resulting from Platform unavailability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Edgen Institute</strong><br />
                A product of Bizsun Creative
              </p>
              <p className="text-gray-700 mb-2">
                <strong>General Inquiries:</strong><br />
                Email: <a href="mailto:info@edgeninstitute.com" className="text-primary hover:text-primary-dark">info@edgeninstitute.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Legal Inquiries:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Have questions about this disclaimer?
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

