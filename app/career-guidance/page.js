import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = { title: 'Career Guidance' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Future" title="Career guidance & placements" subtitle="Streams discovery, internships and resume intelligence — layered on top of academic excellence.">
      <p className="text-gray-700 max-w-2xl">Mentor pods map board → entrance → college → internship journeys. Data hooks ready for your ATS / CRM integrations.</p>
    </MarketingPageShell>
  )
}
