import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import LeadForm from '@/components/forms/LeadForm'

export const metadata = {
  title: 'Scholarships',
  description: 'Merit-cum-means scholarships for Edgen Institute programs — apply with academic proofs.',
}

export default function ScholarshipsPage() {
  return (
    <MarketingPageShell
      eyebrow="Access"
      title="Scholarships"
      subtitle="Transparent rubric: past performance, Edgen diagnostic score and family income declaration. No black-box discounts."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 text-sm text-emerald-950 space-y-3">
          <p className="font-bold text-base">What you need</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Latest report card / board marksheet</li>
            <li>Edgen diagnostic test (scheduled post inquiry)</li>
            <li>Income declaration for means-based tiers</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
          <LeadForm type="scholarship" submitLabel="Apply for scholarship" />
        </div>
      </div>
    </MarketingPageShell>
  )
}
