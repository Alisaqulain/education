'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function PaymentDetail() {
  const params = useParams()
  const paymentId = params.id

  // Mock payment data
  const paymentsData = {
    1: {
      id: 1,
      transactionId: 'TXN-2024-001234',
      course: 'Advanced Mathematics',
      courseId: 1,
      amount: 299,
      currency: 'USD',
      status: 'completed',
      method: 'Credit Card',
      cardLast4: '4242',
      date: '2024-01-15',
      description: 'Course enrollment payment',
      invoiceUrl: '/invoices/2024-001234.pdf',
    },
    2: {
      id: 2,
      transactionId: 'TXN-2024-005678',
      course: 'English Conversation',
      courseId: 2,
      amount: 199,
      currency: 'USD',
      status: 'completed',
      method: 'PayPal',
      date: '2024-01-10',
      description: 'Course enrollment payment',
      invoiceUrl: '/invoices/2024-005678.pdf',
    },
  }

  const payment = paymentsData[paymentId] || paymentsData[1]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      case 'refunded': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/student/dashboard" className="hover:text-primary">Dashboard</Link></li>
            <li>/</li>
            <li><Link href="/student/payments" className="hover:text-primary">Payments</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Transaction {payment.transactionId}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Payment Details</h1>
              <p className="text-gray-600">Transaction ID: {payment.transactionId}</p>
            </div>
            <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${getStatusColor(payment.status)}`}>
              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 mb-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Transaction Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Transaction ID</p>
                  <p className="text-lg font-bold text-gray-900">{payment.transactionId}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Date</p>
                  <p className="text-lg font-bold text-gray-900">{new Date(payment.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Amount</p>
                  <p className="text-2xl font-bold text-primary">${payment.amount}.00 {payment.currency}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Payment Method</p>
                  <p className="text-lg font-bold text-gray-900">
                    {payment.method}
                    {payment.cardLast4 && ` •••• ${payment.cardLast4}`}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <Link href={`/student/courses/${payment.courseId}`} className="text-lg font-bold text-gray-900 hover:text-primary">
                    {payment.course}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{payment.description}</p>
                </div>
              </div>
            </div>

            {payment.invoiceUrl && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Invoice</h3>
                <a
                  href={payment.invoiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Invoice</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href="/student/payments"
            className="flex-1 bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-center"
          >
            Back to Payments
          </Link>
          {payment.courseId && (
            <Link
              href={`/student/courses/${payment.courseId}`}
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            >
              View Course
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}






