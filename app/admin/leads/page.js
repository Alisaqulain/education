'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminLeadsPage() {
  const router = useRouter()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/admin/login')
        return
      }
      const res = await fetch('/api/admin/leads', { headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) {
        setLoading(false)
        return
      }
      const data = await res.json()
      setLeads(data.leads || [])
      setLoading(false)
    }
    run()
  }, [router])

  if (loading) {
    return (
      <div className="pt-28 pb-16 text-center text-gray-500">
        Loading leads…
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Leads & inquiries</h1>
        <Link href="/admin/dashboard" className="text-sm font-semibold text-primary hover:underline">
          ← Dashboard
        </Link>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-600">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Program</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  No leads yet. Marketing forms will populate this view.
                </td>
              </tr>
            ) : (
              leads.map((l) => (
                <tr key={l._id} className="border-t border-gray-100">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">{new Date(l.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-3 font-medium">{l.type}</td>
                  <td className="px-4 py-3">{l.name}</td>
                  <td className="px-4 py-3">{l.email}</td>
                  <td className="px-4 py-3">{l.phone || '—'}</td>
                  <td className="px-4 py-3">{l.program || '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
