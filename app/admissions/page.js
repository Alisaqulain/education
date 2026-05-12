import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import LeadForm from '@/components/forms/LeadForm'
import Link from 'next/link'

export const metadata = {
  title: 'Admissions',
  description: 'Start your admission journey with Edgen Institute — diagnostics, cohort fit and transparent fee plans.',
}

export default function AdmissionsPage() {
  return (
    <MarketingPageShell
      eyebrow="Admissions"
      title="Start with clarity, not pressure"
      subtitle="We begin with a diagnostic and family conversation — then recommend program, mode and mentor pod."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-gray-700">
          <p>Typical timeline:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Submit inquiry → coordinator call same day</li>
            <li>Diagnostic + counselling (online / centre)</li>
            <li>Cohort offer with fee schedule & scholarships if eligible</li>
            <li>Onboarding on LMS + parent app</li>
          </ol>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="/programs/class-6-10" className="btn-secondary">
              Browse programs
            </Link>
            <Link href="/demo-class" className="text-sm font-semibold text-primary hover:underline">
              Or book a demo first →
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-gray-50/80 p-6 md:p-8 shadow-inner">
          <LeadForm type="admission" submitLabel="Request admission call" />
        </div>
      </div>
    </MarketingPageShell>
  )
}
