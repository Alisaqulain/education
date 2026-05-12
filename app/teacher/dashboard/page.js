import Link from 'next/link'

export const metadata = {
  title: 'Teacher Dashboard',
  description: 'Scheduling, analytics, student performance and earnings for Edgen faculty.',
}

export default function TeacherDashboardPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Faculty command centre</h1>
          <p className="text-gray-600 mt-2">Class scheduling, conferencing, cohort analytics, attendance & payouts — unified.</p>
        </div>
        <Link href="/teacher/create-course" className="btn-primary text-center">
          New course
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          ['Live hours (week)', '18.5'],
          ['Avg. rating', '4.92'],
          ['Active students', '186'],
          ['Payout (month)', '₹1,84,000'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-gray-500">{k}</p>
            <p className="text-2xl font-black text-gray-900 mt-1">{v}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Class scheduling</h2>
          <p className="text-sm text-gray-600 mb-4">Drag-and-drop timetable syncs to student calendars (roadmap). Today&apos;s snapshot:</p>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between rounded-2xl bg-gray-50 px-4 py-3">
              <span>Grade 10 Math · Batch M10-A</span>
              <span className="text-gray-500">6:00 PM</span>
            </li>
            <li className="flex justify-between rounded-2xl bg-gray-50 px-4 py-3">
              <span>JEE Physics doubt lab</span>
              <span className="text-gray-500">8:30 PM</span>
            </li>
          </ul>
          <Link href="/teacher/availability" className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline">
            Manage availability →
          </Link>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-slate-900 text-white p-6 md:p-8 shadow-xl">
          <h2 className="text-xl font-bold mb-2">Zoom / Google Meet</h2>
          <p className="text-sm text-white/70 mb-4">OAuth integration & automatic link injection per batch — placeholder UI for investor demos.</p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm space-y-2">
            <p>✓ Default: Google Meet links from institute workspace</p>
            <p>✓ Optional: Zoom PMI per mentor (compliance review pending)</p>
          </div>
          <button type="button" className="mt-4 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">
            Connect conferencing (soon)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-white p-6">
          <h3 className="font-bold text-gray-900">Student performance</h3>
          <p className="text-sm text-gray-600 mt-2">Cohort heatmaps, weak-topic tags and assignment completion — exportable PDF weekly.</p>
          <Link href="/teacher/analytics" className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline">
            Open analytics →
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <h3 className="font-bold text-gray-900">Attendance</h3>
          <p className="text-sm text-gray-600 mt-2">Mark roll, flag chronic absences, trigger parent auto-nudges.</p>
          <Link href="/teacher/my-students" className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline">
            View students →
          </Link>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-amber-50 to-white p-6">
          <h3 className="font-bold text-gray-900">Earnings</h3>
          <p className="text-sm text-gray-600 mt-2">Per-batch revenue share, incentives & TDS summaries.</p>
          <Link href="/teacher/earnings" className="inline-flex mt-4 text-sm font-semibold text-primary hover:underline">
            Earnings detail →
          </Link>
        </div>
      </div>
    </div>
  )
}
