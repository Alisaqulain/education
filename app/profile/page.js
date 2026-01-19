'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
  })

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    if (!token) {
      setLoading(false)
      setError('Please log in to view your profile.')
      // Optional: send them to login
      router.push('/student/login')
      return
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) {
          throw new Error('Failed to load profile')
        }

        const data = await res.json()
        const user = data.user

        setFormData({
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          phone: user.phone || '',
          role: user.role || '',
        })
        setError('')
      } catch (err) {
        console.error('Error loading profile:', err)
        setError('Could not load your profile. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [router])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      setError('You are not logged in.')
      return
    }

    setSaving(true)
    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update profile')
      }

      // Update localStorage user to keep navbar in sync
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data.user))
      }

      setSuccess('Profile updated successfully.')
    } catch (err) {
      console.error('Error updating profile:', err)
      setError(err.message || 'Failed to update profile.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          My <span className="gradient-text">Profile</span>
        </h1>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed text-sm sm:text-base"
              />
              <p className="mt-1 text-xs text-gray-500">Email changes are managed by support for security reasons.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                disabled
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed text-sm sm:text-base capitalize"
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center"
            >
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

