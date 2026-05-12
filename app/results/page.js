import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = {
  title: 'Results & Selections',
  description: 'JEE, NEET, CUET, boards and Olympiad outcomes from Edgen Institute learners.',
}

const rows = [
  { exam: 'JEE Advanced 2025', highlight: 'AIR 112 · 400+ under 5k rank', cohort: 'Integrated 2-year' },
  { exam: 'NEET UG 2025', highlight: '715/720 · 62 selections under 5k AIR', cohort: 'NCERT-first program' },
  { exam: 'CUET (UG) 2025', highlight: '99+ percentile in GT & domains', cohort: '12-week sprint' },
  { exam: 'CBSE Class X', highlight: 'Median score 94.2%', cohort: 'Board + reasoning studio' },
]

export default function ResultsPage() {
  return (
    <MarketingPageShell
      eyebrow="Outcomes"
      title="Results that compound"
      subtitle="We publish transparent cohort stats — not cherry-picked hero tiles alone. Ask admissions for detailed division reports."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {rows.map((r) => (
          <div key={r.exam} className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">{r.exam}</p>
            <h2 className="text-xl font-bold text-gray-900 mt-2">{r.highlight}</h2>
            <p className="text-sm text-gray-600 mt-2">{r.cohort}</p>
          </div>
        ))}
      </div>
    </MarketingPageShell>
  )
}
