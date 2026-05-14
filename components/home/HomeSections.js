'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { trustStats, featuredCourses, homeFaqs, googleReviewSnippet } from '@/data/homeContent'
import {
  categoryMegaMenu,
  whyChooseBlueprint,
  featuredTeachersBlueprint,
  testimonialsWithRatings,
  platformTagline,
} from '@/data/blueprintHome'
import { gallerySrc } from '@/data/galleryAssets'
import { waLink, SITE } from '@/data/site'
import HeroVideoSlider from '@/components/home/HeroVideoSlider'
import MeetOurTeachersGallery from '@/components/home/MeetOurTeachersGallery'
import ProgramFAQ from '@/components/programs/ProgramFAQ'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
}

function Stars({ value = 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < value ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

export default function HomeSections() {
  return (
    <>
      <section className="relative z-0 min-h-[92vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        <HeroVideoSlider />
        <div className="relative z-10 container-custom py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md mb-6 max-w-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="leading-snug">{platformTagline}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Learn Anything, Anywhere{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300">
                from Expert Teachers
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-8">
              Live and recorded classes across academics, languages, performing arts, and future-ready tech — with flexible
              schedules and transparent parent visibility.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/courses" className="btn-primary shadow-lg shadow-emerald-500/25">
                Explore courses
              </Link>
              <Link href="/demo-class" className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 backdrop-blur-md">
                Book free demo
              </Link>
              <a
                href={waLink()}
                className="rounded-xl border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-100 hover:bg-emerald-500/10"
              >
                WhatsApp us
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Zoom & Google Meet</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Music · Chess · Coding</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Recorded replays</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Razorpay checkout</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-fuchsia-500/20 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/15 aspect-video bg-black/50">
                <video className="h-full w-full object-cover" muted playsInline autoPlay loop preload="metadata" poster={gallerySrc('WhatsApp Image 2026-05-13 at 3.37.03 PM.jpeg')}>
                  <source src={gallerySrc('WhatsApp Video 2026-05-13 at 3.37.03 PM.mp4')} type="video/mp4" />
                </video>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {['WhatsApp Image 2026-05-13 at 3.37.02 PM.jpeg', 'WhatsApp Image 2026-05-13 at 3.37.04 PM.jpeg', 'WhatsApp Image 2026-05-13 at 3.37.04 PM (1).jpeg'].map((file) => (
                  <div key={file} className="relative aspect-square rounded-xl overflow-hidden border border-white/15">
                    <Image src={gallerySrc(file)} alt="Learning at Myndveda" fill className="object-cover" sizes="120px" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-950/50 border border-white/10 p-4 flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-white/20 bg-white/10 shrink-0">
                  <Image src="/updatelogo.jpeg" alt={SITE.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{SITE.name} live hub</p>
                  <p className="text-xs text-white/70">Classes · Homework · Recordings · Progress</p>
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
            <p className="text-gray-600">Numbers that compound — outcomes and parent confidence stay our north star.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustStats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fade}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-5 text-center shadow-sm"
              >
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
          <motion.div {...fade} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Main categories</h2>
            <p className="text-gray-600 mt-3">
              One platform for academics, creativity, and future-ready skills — pick a track and start with a free demo.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {categoryMegaMenu.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fade}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${cat.accent} mb-4`} />
                <h3 className="text-xl font-black text-gray-900">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-gray-100">
        <div className="container-custom">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured teachers</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">Book a demo with mentors who combine depth, empathy, and consistent outcomes.</p>
            </div>
            <Link href="/meet-our-teachers" className="text-primary font-semibold hover:underline shrink-0">
              Gallery & video →
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeachersBlueprint.map((t, i) => (
              <motion.div
                key={t.name}
                {...fade}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image src={gallerySrc(t.imageKey)} alt={t.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1">{t.subject}</p>
                  <p className="text-xs text-gray-500 mt-2">{t.experience} experience</p>
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <Stars value={5} />
                    <span className="text-gray-700 font-semibold">{t.rating}</span>
                    <span className="text-gray-400 text-xs">({t.reviews} reviews)</span>
                  </div>
                  <Link href="/demo-class" className="mt-auto pt-5 block w-full text-center rounded-xl bg-gradient-to-r from-primary to-secondary py-2.5 text-sm font-bold text-white hover:opacity-95 transition-opacity">
                    Book demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Popular courses</h2>
              <p className="text-white/70 mt-2">Transparent fees, clear duration, and enroll in a few clicks.</p>
            </div>
            <Link href="/courses" className="text-emerald-300 font-semibold hover:underline">
              Browse all courses →
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {featuredCourses.map((c, i) => (
              <motion.div
                key={c.title}
                {...fade}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col"
              >
                <div className="h-32 bg-gradient-to-br from-emerald-500/30 via-sky-500/20 to-fuchsia-500/30 relative">
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-black/40 border border-white/10">{c.tag}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm text-white/65 mt-1">Teacher: {c.mentor}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs text-white/70">
                    <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{c.duration}</span>
                    <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{c.division}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-xs text-emerald-200/90">
                    <span>★ {c.rating}</span>
                    <span className="text-white/40">·</span>
                    <span>{c.reviews} ratings</span>
                  </div>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-xl font-black text-emerald-300">{c.price}</span>
                    <Link href="/admissions" className="rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors">
                      Enroll
                    </Link>
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
            <h2 className="text-3xl font-bold text-gray-900">Why choose us</h2>
            <p className="text-gray-600 mt-2">Everything you expect from a serious online learning platform — without the noise.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseBlueprint.map((w, i) => (
              <motion.div
                key={w.title}
                {...fade}
                transition={{ delay: i * 0.04 }}
                className="rounded-3xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-900">{w.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 border-y border-gray-100">
        <div className="container-custom">
          <motion.div {...fade} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Students & parents love {SITE.name}</h2>
            <p className="text-gray-600">{googleReviewSnippet.quote}</p>
            <p className="text-sm text-primary font-semibold mt-2">
              {googleReviewSnippet.rating}/5 · {googleReviewSnippet.count} reviews
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonialsWithRatings.map((t, i) => (
              <motion.div
                key={t.author}
                {...fade}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <Stars value={t.rating} />
                <div className="flex items-center gap-3 mt-4 mb-3">
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
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div {...fade}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Teach online and grow your reach with us.</h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto">
              Publish courses, schedule Zoom or Google Meet sessions, track attendance, and grow reviews — with payouts and
              subscriptions on Razorpay.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/become-a-teacher" className="btn-primary inline-flex justify-center">
                Register as teacher
              </Link>
              <a
                href={waLink('Hi, I would like to schedule a demo call to teach with Myndveda.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/90 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Schedule demo call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MeetOurTeachersGallery variant="home" />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div {...fade} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">FAQs</h2>
          </motion.div>
          <ProgramFAQ items={homeFaqs} />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Start with a free demo this week</h2>
          <p className="text-white/75 mb-8">Pick a category, meet a teacher, and experience our live classroom.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/courses" className="btn-primary inline-flex justify-center">
              Explore courses
            </Link>
            <Link
              href="/demo-class"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/90 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Book free demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
