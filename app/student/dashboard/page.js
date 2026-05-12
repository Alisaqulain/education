import Link from 'next/link'

export const metadata = {
  title: 'Student Dashboard',
  description: 'Track progress, attendance, assignments and live classes on Edgen Institute.',
}

const widgets = [
  { title: 'Progress', value: '78%', sub: 'Syllabus · term target on track', href: '/student/my-courses', color: 'from-emerald-500 to-teal-600' },
  { title: 'Attendance', value: '94%', sub: 'Last 30 days live sessions', href: '/student/bookings', color: 'from-blue-500 to-indigo-600' },
  { title: 'Weekly score', value: 'A-', sub: 'Mocks + class participation', href: '/student/assignments', color: 'from-violet-500 to-purple-600' },
  { title: 'Leaderboard', value: '#12', sub: 'In your cohort of 240', href: '/student/dashboard', color: 'from-amber-500 to-orange-600' },
]

const badges = ['7-day streak', 'Doubt crusher', 'Early bird', 'Mock master']

export default function StudentDashboardPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">Your learning OS</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Progress, attendance, live classes, recordings, assignments, certificates & healthy competition — in one calm surface.</p>
        </div>
        <Link href="/student/notifications" className="btn-primary text-center">
          Notifications
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        {widgets.map((w) => (
          <Link key={w.title} href={w.href} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg transition-shadow">
            <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${w.color} mb-4`} />
            <p className="text-xs font-bold uppercase text-gray-500">{w.title}</p>
            <p className="text-3xl font-black text-gray-900 mt-1">{w.value}</p>
            <p className="text-sm text-gray-600 mt-2">{w.sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold">Upcoming live classes</h2>
            <Link href="/student/my-courses" className="text-xs font-semibold text-emerald-300 hover:underline">
              View timetable
            </Link>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              { t: 'Physics — Rotation', when: 'Today · 6:30 PM', tag: 'JEE' },
              { t: 'Organic mechanisms drill', when: 'Tomorrow · 7:00 PM', tag: 'NEET' },
              { t: 'Public speaking lab', when: 'Sat · 11:00 AM', tag: 'Skills' },
            ].map((c) => (
              <li key={c.t} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                <div>
                  <p className="font-semibold">{c.t}</p>
                  <p className="text-white/60 text-xs mt-0.5">{c.when}</p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-lg bg-white/10">{c.tag}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/50 mt-4">Zoom / Google Meet links appear 15 minutes before class — integrated calendar coming soon.</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Gamification</h2>
          <p className="text-sm text-gray-600 mb-4">Badges reward consistency, not burnout.</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {b}
              </span>
            ))}
          </div>
          <Link href="/student/assignments" className="inline-flex mt-6 text-sm font-semibold text-primary hover:underline">
            Assignment queue →
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Recorded lectures</h2>
          <p className="text-sm text-gray-600 mb-4">Catch up offline — downloads enabled for low bandwidth.</p>
          <Link href="/student/my-courses" className="btn-secondary">
            Open library
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Certificates</h2>
          <p className="text-sm text-gray-600 mb-4">Term completions & skills tracks auto-generate verifiable certificates.</p>
          <button type="button" className="btn-secondary opacity-80 cursor-not-allowed" disabled>
            Download (soon)
          </button>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/live-classes">
          Live classes
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/test-series">
          Tests & mocks
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/community">
          Community
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/ai-study">
          AI assistant
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/calendar">
          Calendar
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" href="/student/timetable">
          Timetable
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40" href="/student/messages">
          Messages
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40" href="/student/payments">
          Payments
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40" href="/student/profile">
          Profile
        </Link>
        <Link className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 hover:border-primary/40" href="/student/settings">
          Settings
        </Link>
      </div>
    </div>
  )
}
