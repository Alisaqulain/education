import MarketingPageShell from '@/components/marketing/MarketingPageShell'

export const metadata = { title: 'Our Mission' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Purpose" title="Our mission" subtitle="Democratise rigorous pedagogy with human mentorship — so every learner, everywhere, can access transparent, measurable growth.">
      <div className="max-w-3xl space-y-6 text-gray-700">
        <p>We build an operating system for learning: academics, competitive depth, skills, creativity and wellbeing — with parents as partners, not spectators.</p>
        <p>Technology amplifies great teachers; it never replaces the trust between mentor, student and family.</p>
      </div>
    </MarketingPageShell>
  )
}
