import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import ProgramFAQ from '@/components/programs/ProgramFAQ'
import { homeFaqs } from '@/data/homeContent'

export const metadata = { title: 'FAQs' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Help" title="Frequently asked questions" subtitle="Admissions, programs, fees and tech — the answers families ask before day one.">
      <div className="max-w-3xl">
        <ProgramFAQ items={[...homeFaqs, { q: 'Do you support franchise partners?', a: 'Yes — territory playbooks, LMS and revenue share models are available under Franchise.' }]} />
      </div>
    </MarketingPageShell>
  )
}
