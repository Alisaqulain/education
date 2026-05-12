import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import Link from 'next/link'

export const metadata = {
  title: 'Student Success Stories',
  description: 'Hear from families and students across boards, entrances and skills programs.',
}

const stories = [
  { name: 'Ishaan · JEE Advanced', quote: 'Mentor pods + error logs replaced my random problem grind.', href: '/programs/jee' },
  { name: 'Kavya · NEET UG', quote: 'Biology became visual — I finally enjoyed revision.', href: '/programs/neet' },
  { name: 'Malhotra family · Class X', quote: 'Parent dashboard nudges saved our preboard season.', href: '/programs/class-6-10' },
]

export default function SuccessStoriesPage() {
  return (
    <MarketingPageShell
      eyebrow="Stories"
      title="Success stories"
      subtitle="Video interviews dropping weekly — here are three recurring themes we hear from families."
    >
      <div className="space-y-6">
        {stories.map((s) => (
          <div key={s.name} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{s.name}</h2>
              <p className="text-gray-600 mt-2 max-w-2xl">&ldquo;{s.quote}&rdquo;</p>
            </div>
            <Link href={s.href} className="btn-secondary whitespace-nowrap">
              Explore program
            </Link>
          </div>
        ))}
      </div>
    </MarketingPageShell>
  )
}
