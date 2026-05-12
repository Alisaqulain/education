import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import LeadForm from '@/components/forms/LeadForm'

export const metadata = {
  title: 'Franchise Opportunities',
  description: 'Bring Edgen Institute blended learning to your city with playbook, tech stack and admissions support.',
}

export default function FranchisePage() {
  return (
    <MarketingPageShell
      eyebrow="Partners"
      title="Franchise with Edgen"
      subtitle="Centre-in-a-box: curriculum ops, LMS, marketing kits and quarterly audits — built for serious operators only."
    >
      <div className="max-w-xl rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-lg">
        <LeadForm type="franchise" submitLabel="Request franchise deck" />
      </div>
    </MarketingPageShell>
  )
}
