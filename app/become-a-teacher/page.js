import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import LeadForm from '@/components/forms/LeadForm'

export const metadata = {
  title: 'Become a Teacher',
  description: 'Apply to teach live batches at Edgen Institute — verification, pedagogy trials and transparent payouts.',
}

export default function BecomeTeacherPage() {
  return (
    <MarketingPageShell
      eyebrow="Faculty"
      title="Become an Edgen teacher"
      subtitle="Multi-step audition: demo class, pedagogy interview and background verification. Top decile earners also mentor juniors."
    >
      <div className="max-w-xl rounded-3xl border border-gray-100 bg-gray-50/80 p-6 md:p-8 shadow-inner">
        <LeadForm type="teacher" submitLabel="Submit application" />
      </div>
    </MarketingPageShell>
  )
}
