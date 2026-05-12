'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ParentDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (!raw) {
      router.push('/parent/login')
      return
    }
    try {
      const u = JSON.parse(raw)
      if (u.role !== 'parent') {
        router.push('/')
        return
      }
      setUser(u)
    } catch {
      router.push('/parent/login')
    }
  }, [router])

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    window.dispatchEvent(new Event('authChange'))
    router.push('/')
  }

  if (!user) {
    return <div className="pt-32 text-center text-gray-500">Loading…</div>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Parent cockpit</h1>
          <p className="text-gray-600 mt-1">Welcome, {user.firstName} — linked learners and institute pulse.</p>
        </div>
        <button type="button" onClick={logout} className="btn-secondary">
          Log out
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          ['Attendance (30d)', '96%', 'Across linked learners'],
          ['Avg. test score delta', '+6.4%', 'Vs last month'],
          ['Fees · next due', '₹12,499', 'Auto-debit optional'],
        ].map(([a, b, c]) => (
          <div key={a} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-gray-500 uppercase">{a}</p>
            <p className="text-2xl font-black text-gray-900 mt-1">{b}</p>
            <p className="text-sm text-gray-600 mt-1">{c}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-lg text-gray-900">Teacher messages</h2>
          <p className="text-sm text-gray-600 mt-2">Thread view mirrors student chat — connect to `/api/messages`.</p>
          <Link href="/contact" className="inline-flex mt-4 text-sm font-semibold text-primary">
            Open concierge →
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-lg text-gray-900">PTM scheduling</h2>
          <p className="text-sm text-gray-600 mt-2">Book 15-min slots with mentors — calendar sync in roadmap.</p>
          <button type="button" className="btn-primary mt-4 opacity-70 cursor-not-allowed" disabled>
            Book PTM (soon)
          </button>
        </div>
      </div>
    </div>
  )
}
