'use client'

import { useState } from 'react'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    email: 'student@example.com',
    phone: '+1 234 567 8900',
    language: 'en',
    timezone: 'UTC',
    notifications: {
      email: true,
      push: true,
      assignments: true,
      grades: true,
    },
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name.startsWith('notifications.')) {
      const key = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [key]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          <span className="gradient-text">Settings</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
              {['profile', 'notifications', 'privacy', 'billing'].map((tab) => (
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

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {Object.entries(formData.notifications).map(([key, value]) => (
                    <label key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                        <div className="text-sm text-gray-600">Receive {key} notifications</div>
                      </div>
                      <input
                        type="checkbox"
                        name={`notifications.${key}`}
                        checked={value}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Profile Visibility</div>
                      <div className="text-sm text-gray-600">Make your profile visible to teachers</div>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Data Sharing</div>
                      <div className="text-sm text-gray-600">Allow data sharing for analytics</div>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Billing Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none"
                      placeholder="Enter your billing address"
                    />
                  </div>
                  <a href="/student/payments" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Manage Payment Methods
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


