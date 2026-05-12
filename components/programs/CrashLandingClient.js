'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LeadForm from '@/components/forms/LeadForm'
import { crashPrograms } from '@/data/crashLanding'

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return useMemo(() => {
    const diff = Math.max(0, target - now)
    const d = Math.floor(diff / (1000 * 60 * 60 * 24))
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const m = Math.floor((diff / (1000 * 60)) % 60)
    const s = Math.floor((diff / 1000) % 60)
    return { d, h, m, s, ended: diff <= 0 }
  }, [now, target])
}

export default function CrashLandingClient({ slug }) {
  const cfg = crashPrograms[slug]
  const cd = useCountdown(cfg.endsAt)
  if (!cfg) return null

  return (
    <div className="pt-20 md:pt-24">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl">
            <p className="text-amber-300 font-semibold tracking-wide text-sm mb-3 uppercase">Limited intake · Admissions open</p>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">{cfg.title}</h1>
            <p className="text-lg text-white/80 mb-6">{cfg.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">{cfg.offer}</span>
              <span className="px-4 py-2 rounded-full bg-red-500/90 text-sm font-semibold">Only {cfg.seatsLeft} seats left</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mb-10">
              {[
                ['Days', cd.d],
                ['Hours', cd.h],
                ['Mins', cd.m],
                ['Secs', cd.s],
              ].map(([label, val]) => (
                <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <div className="text-3xl font-black tabular-nums">{String(val).padStart(2, '0')}</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo-class" className="btn-primary">Book seat</Link>
              <Link href="/admissions" className="btn-secondary border-white text-white hover:bg-white/10">Talk to counsellor</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">What you unlock</h2>
            <ul className="space-y-4">
              {cfg.highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="text-primary text-xl">⚡</span>
                  <span className="text-gray-800 font-medium">{h}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Fast syllabus coverage</h3>
              <p className="text-sm text-gray-600 mb-4">Micro-planned days, proctored mocks & analytics — engineered for exam-week confidence.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Daily attempt logs & error taxonomy</li>
                <li>✓ Mock tests with national benchmarking</li>
                <li>✓ Mentor nudges on slack days</li>
              </ul>
            </div>
          </motion.div>
          <div className="rounded-3xl border border-gray-200 bg-white shadow-xl p-6 lg:sticky lg:top-28">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Reserve your seat</h3>
            <p className="text-sm text-gray-600 mb-4">We respond within 2 hours on business days.</p>
            <LeadForm type="admission" program={`crash:${slug}`} submitLabel="Lock my seat" />
          </div>
        </div>
      </section>
    </div>
  )
}
