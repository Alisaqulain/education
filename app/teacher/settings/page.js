'use client'

import { useState } from 'react'

export default function TeacherSettings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    hourlyRate: 35,
    currency: 'USD',
    availability: 'flexible',
    timezone: 'UTC',
  })

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Teacher <span className="gradient-text">Settings</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
              {['profile', 'pricing', 'availability', 'notifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                <p className="text-gray-600">Profile management available in profile page</p>
                <a href="/teacher/profile" className="text-primary hover:text-primary-dark font-medium">
                  Go to Profile →
                </a>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Pricing Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                    <div className="flex gap-4">
                      <select className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>INR</option>
                      </select>
                      <input
                        type="number"
                        value={formData.hourlyRate}
                        onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Save Pricing
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'availability' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Availability Settings</h2>
                <p className="text-gray-600 mb-4">Manage your teaching schedule</p>
                <a href="/teacher/availability" className="text-primary hover:text-primary-dark font-medium">
                  Go to Availability Page →
                </a>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {['New student enrollments', 'Assignment submissions', 'Messages', 'Payment received'].map((item) => (
                    <label key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium text-gray-900">{item}</span>
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

