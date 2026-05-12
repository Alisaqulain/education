import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import { testimonials } from '@/data/homeContent'

export const metadata = { title: 'Testimonials' }

export default function Page() {
  return (
    <MarketingPageShell eyebrow="Voices" title="Testimonials" subtitle="Parents and students on what changed after joining Edgen.">
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
        {testimonials.map((t) => (
          <blockquote key={t.author} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-inner">
            <p className="text-gray-800">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-gray-900">{t.author}</footer>
            <p className="text-xs text-gray-500">{t.role}</p>
          </blockquote>
        ))}
      </div>
    </MarketingPageShell>
  )
}
