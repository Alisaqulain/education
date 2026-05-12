import Link from 'next/link'
import { notFound } from 'next/navigation'
import { wings, wingSlugs } from '@/data/wingsContent'
import { SITE } from '@/data/site'

export function generateStaticParams() {
  return wingSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const w = wings[params.slug]
  if (!w) return { title: 'Programs' }
  return { title: `${w.title} | ${SITE.name}`, description: w.subtitle }
}

export default function WingPage({ params }) {
  const w = wings[params.slug]
  if (!w) notFound()
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <section className="container-custom">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Wing</p>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-4">{w.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-10">{w.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {w.pillars.map((p) => (
            <div key={p} className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm">
              <p className="font-semibold text-gray-900">{p}</p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Tracks & programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {w.tracks.map((t) => (
            <Link key={t.label} href={t.href} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
              <p className="font-bold text-gray-900">{t.label}</p>
              {t.desc ? <p className="text-sm text-gray-600 mt-1">{t.desc}</p> : null}
              <span className="text-sm text-primary font-semibold mt-3 inline-block">Open →</span>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/admissions" className="btn-primary">Admissions</Link>
          <Link href="/demo-class" className="btn-secondary">Book demo</Link>
        </div>
      </section>
    </div>
  )
}
