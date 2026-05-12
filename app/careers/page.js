import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import Link from 'next/link'

export const metadata = {
  title: 'Careers',
  description: 'Join Edgen Institute — academics, technology, learning experience and growth roles.',
}

const roles = [
  { title: 'Senior Academic Lead — Competitive Exams', loc: 'Hybrid · Bengaluru', type: 'Full-time' },
  { title: 'Product Designer — Learning OS', loc: 'Remote · India', type: 'Full-time' },
  { title: 'City Centre Head', loc: 'Delhi NCR', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <MarketingPageShell
      eyebrow="Careers"
      title="Build India’s calmest learning OS"
      subtitle="We hire for craft, kindness and intellectual honesty. Pedigree matters less than proof of work."
    >
      <div className="grid gap-4">
        {roles.map((r) => (
          <div key={r.title} className="rounded-3xl border border-gray-100 bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{r.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {r.loc} · {r.type}
              </p>
            </div>
            <Link href="/contact" className="btn-primary text-center">
              Express interest
            </Link>
          </div>
        ))}
      </div>
    </MarketingPageShell>
  )
}
