import Link from 'next/link'
import { wings, wingSlugs } from '@/data/wingsContent'
import { programLinks } from '@/data/navigation'
import { SITE } from '@/data/site'

export const metadata = {
  title: `Programs & Wings | ${SITE.name}`,
  description: `Explore foundation, school, senior, competitive, skills, creative and sports wings at ${SITE.name}.`,
}

export default function ProgramsHubPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <section className="container-custom mb-16">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Programs ecosystem</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl">
          A school + coaching hybrid: structured wings for every stage — from nursery to placements — with parent-grade transparency.
        </p>
      </section>
      <section className="container-custom mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Academic wings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wingSlugs.map((slug) => {
            const w = wings[slug]
            return (
              <Link
                key={slug}
                href={`/programs/wing/${slug}`}
                className="group rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="h-1 w-10 rounded-full bg-gradient-to-r from-primary to-secondary mb-4" />
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{w.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{w.subtitle}</p>
              </Link>
            )
          })}
        </div>
      </section>
      <section className="container-custom">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick links</h2>
        <div className="flex flex-wrap gap-2">
          {programLinks.map((p) => (
            <Link key={p.href} href={p.href} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-primary/40 hover:text-primary">
              {p.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
