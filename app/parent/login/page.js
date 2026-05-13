'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ParentLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const raw = localStorage.getItem('user')
    if (token && raw) {
      try {
        const u = JSON.parse(raw)
        if (u.role === 'parent') router.push('/parent/dashboard')
      } catch {
        /* ignore */
      }
    }
  }, [router])

  async function onSubmit(e) {
    e.preventDefault()
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password, role: 'parent' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')
      if (data.user.role !== 'parent') throw new Error('Use student or teacher login for this account.')
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('role', data.user.role)
      window.dispatchEvent(new Event('authChange'))
      router.push('/parent/dashboard')
    } catch (err) {
      setErrors({ submit: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="flex justify-center mb-6">
          <Image src="/updatelogo.jpeg" alt="Edgen" width={72} height={72} className="object-contain" />
        </div>
        <h1 className="text-2xl font-black text-center text-gray-900">Parent login</h1>
        <p className="text-sm text-center text-gray-600 mt-2">Monitor progress, fees and teacher messages.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="input-field" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="input-field" value={formData.password} onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))} required />
          </div>
          {errors.submit ? <p className="text-sm text-red-600">{errors.submit}</p> : null}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Signing in…' : 'Continue'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          New parent?{' '}
          <Link href="/signup" className="font-semibold text-primary">
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
