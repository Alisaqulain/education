import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = { title: 'Why Choose Myndveda' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Proof" title="Why families choose Myndveda" subtitle="Mindful learning, joyful movement, and honest outcomes — without the ed-tech noise.">
      <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
        {['Certified faculty & movement coaches', 'Yoga, Zumba & sports under one roof', 'Parent dashboards that make sense', 'Live + recorded — your rhythm', 'Scholarships that respect merit & means', 'Centres + online across select cities'].map((t) => (
          <li key={t} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-gray-800 font-medium">
            ✓ {t}
          </li>
        ))}
      </ul>
    </MarketingPageShell>
  )
}
