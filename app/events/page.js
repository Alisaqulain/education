import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = {
  title: 'Events',
  description: 'Open houses, scholarship tests and parent seminars across Edgen Institute.',
}

const events = [
  { title: 'National Scholarship Aptitude Test', date: 'June 28, 2026', mode: 'Online + 12 cities' },
  { title: 'Parent Seminar — Raising exam-ready, mentally healthy teens', date: 'July 06, 2026', mode: 'Livestream' },
  { title: 'JEE Open Mock (full syllabus)', date: 'July 14, 2026', mode: 'Online proctored' },
]

export default function EventsPage() {
  return (
    <MarketingPageShell eyebrow="Calendar" title="Events" subtitle="Reserve seats early — high-trust events fill fast.">
      <div className="space-y-4">
        {events.map((e) => (
          <div key={e.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{e.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {e.date} · {e.mode}
              </p>
            </div>
            <a href="/admissions" className="btn-primary text-center">
              Register
            </a>
          </div>
        ))}
      </div>
    </MarketingPageShell>
  )
}
