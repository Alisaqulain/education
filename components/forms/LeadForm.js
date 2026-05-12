'use client'

import { useState } from 'react'

export default function LeadForm({
  type = 'contact',
  program = '',
  submitLabel = 'Submit',
  className = '',
  showMessage = true,
  extraFields = null,
}) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const fd = new FormData(e.currentTarget)
    const payload = {
      type,
      program: fd.get('program') || program,
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      message: fd.get('message') || '',
      meta: {},
    }
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message || 'Something went wrong')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 ${className}`}>
        <p className="font-semibold">Received!</p>
        <p className="text-sm mt-1">Our admissions desk will contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      {program ? <input type="hidden" name="program" value={program} /> : null}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input name="name" required className="input-field" placeholder="Student / parent name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input name="email" type="email" required className="input-field" placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
        <input name="phone" className="input-field" placeholder="+91 …" />
      </div>
      {extraFields}
      {showMessage ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" rows={4} className="input-field resize-y" placeholder="Tell us about goals, grade, or city…" />
        </div>
      ) : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : submitLabel}
      </button>
    </form>
  )
}
