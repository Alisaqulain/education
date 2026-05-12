import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import Link from 'next/link'

export const metadata = { title: 'Student Portal' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Learners" title="Student portal" subtitle="Courses, community, mocks, AI study tools and certificates — engineered like a consumer-grade learning OS.">
      <div className="flex flex-wrap gap-3">
        <Link href="/student/login" className="btn-primary">
          Student login
        </Link>
        <Link href="/signup" className="btn-secondary">
          Join as student
        </Link>
      </div>
    </MarketingPageShell>
  )
}
