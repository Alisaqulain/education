'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  trustStats,
  divisionCards,
  whyChoose,
  featuredCourses,
  resultsShowcase,
  activities,
  testimonials,
  howItWorks,
  homeFaqs,
  googleReviewSnippet,
} from '@/data/homeContent'
import { waLink, SITE } from '@/data/site'
import HeroVideoSlider from '@/components/home/HeroVideoSlider'
import ProgramFAQ from '@/components/programs/ProgramFAQ'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

export default function HomeSections() {
  return (
    <>
      <section className="relative z-0 min-h-[92vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        <HeroVideoSlider />
        <div className="relative z-10 container-custom py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Admissions 2026 · Live + Offline + Recorded
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Train your mind. Move your body.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300">
                Own your growth.
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-8">
              {SITE.name} brings academics, competitive edge, creative arts, and joyful movement — yoga, Zumba, sports & more — in one calm, parent-transparent ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/signup" className="btn-primary shadow-lg shadow-emerald-500/25">Join now</Link>
              <Link href="/demo-class" className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 backdrop-blur-md">
                Book a demo class
              </Link>
              <a href={waLink()} className="rounded-xl border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-100 hover:bg-emerald-500/10">
                WhatsApp us
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Verified faculty</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">AI practice loops</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Parent dashboards</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">24×7 doubt support</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-fuchsia-500/20 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Learners coached', '48k+'],
                  ['Live minutes / month', '2.1M+'],
                  ['Cities (offline)', '18'],
                  ['Avg. mentor rating', '4.9★'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-slate-950/40 border border-white/10 p-4">
                    <div className="text-2xl font-black text-white">{v}</div>
                    <div className="text-xs text-white/60 mt-1">{k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border border-white/10 p-4 flex items-center gap-4">
                <div className="relative h-[4.5rem] w-[4.5rem] rounded-2xl overflow-hidden border border-white/20 bg-white/10">
                  <Image src="/updatelogo.jpeg" alt={SITE.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{SITE.name} hub</p>
                  <p className="text-xs text-white/70">Attendance · Assignments · Analytics · Certificates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Trusted at scale</h2>
            <p className="text-gray-600">Numbers that compound — because outcomes and parent confidence are our north star.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustStats.map((s, i) => (
              <motion.div key={s.label} {...fade} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-5 text-center shadow-sm">
                <div className="text-2xl font-black text-gray-900">{s.value}</div>
                <div className="text-xs font-semibold text-primary mt-1">{s.label}</div>
                <div className="text-[11px] text-gray-500 mt-1">{s.hint}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Every division, one institute</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">Pick the pathway — we stitch curriculum, mentorship & analytics across the journey.</p>
            </div>
            <Link href="/programs/class-6-10" className="text-primary font-semibold hover:underline">Explore programs →</Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisionCards.map((d, i) => (
              <motion.div key={d.title} {...fade} transition={{ delay: i * 0.06 }}>
                <Link href={d.href} className="group block h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${d.accent} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{d.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{d.desc}</p>
                  <span className="inline-flex mt-4 text-sm font-semibold text-primary">View curriculum</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why families choose {SITE.name}</h2>
            <p className="text-gray-600 mt-2">Premium pedagogy without the chaos — structured for results and wellbeing.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((w, i) => (
              <motion.div key={w.title} {...fade} transition={{ delay: i * 0.04 }} className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-900">{w.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured programs</h2>
              <p className="text-white/70 mt-2">High-trust cohorts with measurable outcomes.</p>
            </div>
            <Link href="/courses" className="text-emerald-300 font-semibold hover:underline">Browse all courses</Link>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {featuredCourses.map((c, i) => (
              <motion.div key={c.title} {...fade} transition={{ delay: i * 0.05 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col">
                <div className="h-36 bg-gradient-to-br from-emerald-500/30 via-sky-500/20 to-fuchsia-500/30 relative">
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-black/40 border border-white/10">{c.tag}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                    <span>★ {c.rating}</span>
                    <span className="text-white/40">·</span>
                    <span>{c.reviews} reviews</span>
                  </div>
                  <h3 className="text-lg font-bold mt-2">{c.title}</h3>
                  <p className="text-sm text-white/65 mt-1">Mentor: {c.mentor}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs text-white/70">
                    <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{c.duration}</span>
                    <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{c.division}</span>
                  </div>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-xl font-black text-emerald-300">{c.price}</span>
                    <Link href="/admissions" className="text-sm font-semibold text-white hover:text-emerald-200">Enroll →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Results that travel</h2>
            <p className="text-gray-600">Selection milestones across boards and competitive exams.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {resultsShowcase.map((r, i) => (
              <motion.div key={r.name} {...fade} transition={{ delay: i * 0.06 }} className="rounded-3xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                <div className="text-xs font-bold text-primary uppercase tracking-wide">{r.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{r.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{r.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/results" className="btn-primary">View full results</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-slate-50 to-white border-y border-gray-100">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Beyond academics</h2>
            <p className="text-gray-600">Creativity, communication & movement — essential for confident young adults.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((a, i) => (
              <motion.div key={a.title} {...fade} transition={{ delay: i * 0.05 }} className="rounded-3xl border border-gray-200 bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="text-3xl">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{a.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Loved by parents & students</h2>
            <p className="text-gray-600">{googleReviewSnippet.quote}</p>
            <p className="text-sm text-primary font-semibold mt-2">{googleReviewSnippet.rating}/5 · {googleReviewSnippet.count} reviews</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.author} {...fade} transition={{ delay: i * 0.06 }} className="rounded-3xl border border-gray-100 bg-gray-50/80 p-6 shadow-inner">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center text-sm">{t.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-gray-200 bg-slate-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Video testimonials</h3>
              <p className="text-white/70 text-sm mt-1">Hear from families across India — boards, JEE, NEET & skills.</p>
            </div>
            <Link href="/success-stories" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">Watch stories</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="text-gray-600">A clear journey from first call to first rank improvement.</p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-4">
            {howItWorks.map((h, i) => (
              <motion.div key={h.step} {...fade} transition={{ delay: i * 0.05 }} className="rounded-3xl border border-gray-200 bg-white p-5 relative overflow-hidden">
                <div className="text-xs font-black text-primary/80">{h.step}</div>
                <h3 className="font-bold text-gray-900 mt-2">{h.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fade}>
            <h2 className="text-3xl font-bold text-gray-900">Learn on the go</h2>
            <p className="text-gray-600 mt-3">The {SITE.name} app puts schedules, recordings, assignments & parent insights in one glassy, calm interface.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✓ Offline downloads for low bandwidth</li>
              <li>✓ Streaks, badges & nudges — healthy gamification</li>
              <li>✓ Parent mode with weekly email digest</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold">App Store</span>
              <span className="px-4 py-2 rounded-xl border border-gray-300 text-sm font-semibold">Google Play</span>
            </div>
          </motion.div>
          <motion.div {...fade} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl rounded-[2.5rem]" />
            <div className="relative rounded-[2.5rem] border border-gray-200 bg-gradient-to-b from-gray-900 to-slate-950 text-white p-6 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-white/60 mb-6">
                <span>9:41</span>
                <span>LTE</span>
              </div>
              <p className="text-xs text-emerald-300 font-semibold">Today</p>
              <h3 className="text-lg font-bold mt-1">Live: Organic Chemistry</h3>
              <p className="text-xs text-white/60 mt-1">NEET cohort · 6:30 PM</p>
              <div className="mt-6 space-y-3">
                {['Attendance marked', 'Assignment due tomorrow', 'Mock rank +4% this week'].map((x) => (
                  <div key={x} className="rounded-2xl bg-white/5 border border-white/10 p-3 text-sm">{x}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl">
          <motion.div {...fade} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
          </motion.div>
          <ProgramFAQ items={homeFaqs} />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for a curriculum that respects your child&apos;s time?</h2>
          <p className="text-white/75 mb-8">Book a diagnostic, meet your mentor pod & lock your cohort.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-primary">Start admission</Link>
            <Link href="/demo-class" className="btn-secondary border-white text-white hover:bg-white/10">Book demo</Link>
          </div>
        </div>
      </section>
    </>
  )
}
