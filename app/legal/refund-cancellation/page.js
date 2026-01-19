export const metadata = {
  title: 'Refund & Cancellation Policy - Edgen Institute',
  description: 'Refund and cancellation policy for Edgen Institute. Edgen Institute is a product of Bizsun Creative.',
}

export default function RefundCancellation() {
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
              Refund & <span className="gradient-text">Cancellation Policy</span>
            </h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Refund Philosophy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Edgen Institute operates as a marketplace connecting independent teachers with students. 
              Refund policies are designed to be fair to both educators and learners while maintaining Platform integrity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> Individual teachers may have their own cancellation and refund terms. 
              Students are encouraged to review teacher-specific policies before booking sessions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Teacher-Led Sessions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cancellation by Student:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Full refund if cancelled 24+ hours before scheduled session</li>
              <li>Partial refund (50%) if cancelled 12-24 hours before session</li>
              <li>No refund for cancellations less than 12 hours before session</li>
              <li>Exceptions may apply for emergencies (subject to Platform review)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cancellation by Teacher:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Full refund to student if teacher cancels</li>
              <li>Alternative session scheduling may be offered</li>
              <li>Repeated teacher cancellations may result in account review</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>No-Show Policy:</strong> If a teacher or student fails to attend a scheduled session without cancellation, 
              the other party may be eligible for a full refund or rescheduling.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Refunds (Coming Soon)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Course refund policies will be established when courses launch. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Refund eligibility will depend on course completion status</li>
              <li>Refund requests must be made within specified timeframes</li>
              <li>Partial refunds may apply based on course progress</li>
              <li>Specific terms will be disclosed at course enrollment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Timelines</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Session Cancellations:</strong> Must be made through the Platform's cancellation system. 
              Cancellation requests are processed immediately, and refunds (if applicable) are processed within 5-7 business days.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Processing Time:</strong> Refunds are processed to the original payment method. 
              Processing times may vary based on payment provider (typically 5-10 business days).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee Statements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Educational Outcomes:</strong> Edgen Institute does not guarantee specific learning outcomes, 
              academic results, or skill improvements. Educational success depends on various factors including student effort, 
              teacher quality, and individual circumstances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Teacher Availability:</strong> While we strive to maintain teacher availability, 
              we do not guarantee that specific teachers will always be available or that sessions will never be cancelled.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Platform Availability:</strong> We aim for high Platform uptime but do not guarantee 
              uninterrupted or error-free service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have concerns about a refund or cancellation:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact the teacher or student directly through Platform messaging</li>
              <li>If unresolved, submit a dispute through Platform support</li>
              <li>Platform administrators will review the case and make a fair determination</li>
              <li>Decisions are typically made within 5-7 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refund Inquiries</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Edgen Institute</strong><br />
                A product of Bizsun Creative
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Refund Support:</strong><br />
                Email: <a href="mailto:support@edgeninstitute.com" className="text-primary hover:text-primary-dark">support@edgeninstitute.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Legal Inquiries:</strong><br />
                Email: <a href="mailto:legal@bizsuncreative.com" className="text-primary hover:text-primary-dark">legal@bizsuncreative.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Have questions about refunds or cancellations?
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








