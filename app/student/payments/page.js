'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Payments() {
  const [activeTab, setActiveTab] = useState('history')

  const paymentHistory = [
    {
      id: 1,
      date: '2024-01-15',
      description: 'Advanced Mathematics Course',
      amount: 299,
      status: 'completed',
      method: 'Credit Card',
    },
    {
      id: 2,
      date: '2024-01-10',
      description: 'English Conversation - 10 Sessions',
      amount: 199,
      status: 'completed',
      method: 'PayPal',
    },
    {
      id: 3,
      date: '2024-01-05',
      description: 'Python Programming Course',
      amount: 399,
      status: 'pending',
      method: 'Credit Card',
    },
  ]

  const paymentMethods = [
    {
      type: 'Credit Card',
      last4: '4242',
      expiry: '12/25',
      isDefault: true,
    },
    {
      type: 'PayPal',
      email: 'student@example.com',
      isDefault: false,
    },
  ]

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Payments & <span className="gradient-text">Billing</span>
          </h1>
          <p className="text-gray-600">Manage your payment methods and view transaction history</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg border border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Payment History
          </button>
          <button
            onClick={() => setActiveTab('methods')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === 'methods'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Payment Methods
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === 'invoices'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Invoices
          </button>
        </div>

        {/* Payment History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{payment.description}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{payment.date}</span>
                        <span>{payment.method}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-lg text-gray-900">${payment.amount}</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          payment.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                      <a
                        href={`/student/payments/${payment.id}`}
                        className="text-primary hover:text-primary-dark font-medium text-sm"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 'methods' && (
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                      {method.type === 'Credit Card' ? '💳' : '🔵'}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{method.type}</div>
                      {method.type === 'Credit Card' ? (
                        <div className="text-sm text-gray-600">•••• •••• •••• {method.last4}</div>
                      ) : (
                        <div className="text-sm text-gray-600">{method.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {method.isDefault && (
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        Default
                      </span>
                    )}
                    <button className="text-primary hover:text-primary-dark font-medium text-sm">
                      Edit
                    </button>
                    {!method.isDefault && (
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary transition-all text-gray-600 hover:text-primary font-medium">
              + Add Payment Method
            </button>
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 mb-4">No invoices available</p>
            <p className="text-sm text-gray-500">Invoices will appear here after course purchases</p>
          </div>
        )}
      </div>
    </div>
  )
}



