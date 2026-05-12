import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = {
  title: 'Workshops',
  description: 'Short high-intensity workshops — public speaking, Olympiad reasoning, physics intuition labs.',
}

const workshops = [
  { title: '3-Day Physics Intuition Lab', for: 'Class 11–12 · JEE', format: 'Hybrid' },
  { title: 'Public Speaking Sprint', for: 'Class 6–10', format: 'Online' },
  { title: 'Chess Tactics Bootcamp', for: 'All ages', format: 'Centre + online' },
]

export default function WorkshopsPage() {
  return (
    <MarketingPageShell eyebrow="Workshops" title="Micro-courses with macro impact" subtitle="Weekend and holiday formats — stackable with your main program.">
      <div className="grid md:grid-cols-3 gap-5">
        {workshops.map((w) => (
          <div key={w.title} className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">{w.title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {w.for} · {w.format}
            </p>
            <a className="inline-flex mt-6 text-sm font-semibold text-primary hover:underline" href="/demo-class">
              Join waitlist
            </a>
          </div>
        ))}
      </div>
    </MarketingPageShell>
  )
}
