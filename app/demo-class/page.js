import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import LeadForm from '@/components/forms/LeadForm'

export const metadata = {
  title: 'Book a Demo Class',
  description: 'Experience Edgen faculty, platform and analytics with a structured demo session.',
}

export default function DemoClassPage() {
  return (
    <MarketingPageShell
      eyebrow="Try us"
      title="Book a demo class"
      subtitle="Tell us grade, exam or skill goal — we match a mentor and send calendar options within 24 hours."
    >
      <div className="max-w-xl rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-xl">
        <LeadForm type="demo" submitLabel="Request demo slot" />
      </div>
    </MarketingPageShell>
  )
}
