import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import Link from 'next/link'

export const metadata = { title: 'Parent Portal' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Families" title="Parent portal" subtitle="One glass pane across attendance, fees, tests and mentor notes — built for busy guardians.">
      <div className="flex flex-wrap gap-3">
        <Link href="/parent/login" className="btn-primary">
          Parent login
        </Link>
        <Link href="/signup" className="btn-secondary">
          Create parent account
        </Link>
      </div>
    </MarketingPageShell>
  )
}
