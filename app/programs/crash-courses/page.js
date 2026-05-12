import Link from 'next/link'
import { SITE } from '@/data/site'

export const metadata = {
  title: `Crash Courses | ${SITE.name}`,
  description: 'High-intensity board and entrance exam crash programs with countdown batches, mocks and mentor pods.',
}

const items = [
  { href: '/programs/crash-courses/class-10-board', title: 'Class 10 Board Crash', tag: 'Boards', tone: 'from-emerald-600 to-teal-700' },
  { href: '/programs/crash-courses/class-12-board', title: 'Class 12 Board Crash', tag: 'Boards', tone: 'from-blue-600 to-indigo-700' },
  { href: '/programs/crash-courses/jee', title: 'JEE Crash Program', tag: 'Engineering', tone: 'from-rose-600 to-orange-600' },
  { href: '/programs/crash-courses/neet', title: 'NEET Crash Program', tag: 'Medical', tone: 'from-emerald-600 to-cyan-700' },
]

export default function CrashCoursesHubPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="container-custom mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">Crash programs</p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Sprint batches built for exam week</h1>
        <p className="text-lg text-gray-600 max-w-2xl">Limited seats, proctored mocks, analytics and mentor nudges — engineered for urgency without burnout.</p>
      </section>
      <section className="container-custom grid md:grid-cols-2 gap-6">
        {items.map((c) => (
          <Link key={c.href} href={c.href} className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className={`h-2 w-full bg-gradient-to-r ${c.tone}`} />
            <div className="p-8">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-500">{c.tag}</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors">{c.title}</h2>
              <p className="text-sm text-gray-600 mt-3">Countdown pricing · seat caps · national mock benchmarks.</p>
              <span className="inline-flex mt-6 text-sm font-semibold text-primary">View landing →</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
