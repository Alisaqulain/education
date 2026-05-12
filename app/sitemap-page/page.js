import Link from 'next/link'
import { programLinks, secondaryNav, mainNav } from '@/data/navigation'
import { wingSlugs } from '@/data/wingsContent'
import { SITE } from '@/data/site'

export const metadata = { title: 'Sitemap' }

export default function SitemapPage() {
  const groups = [
    { title: 'Main', links: mainNav },
    { title: 'Programs', links: programLinks },
    { title: 'Wings', links: wingSlugs.map((s) => ({ href: `/programs/wing/${s}`, label: s })) },
    { title: 'More', links: secondaryNav },
  ]
  return (
    <div className="pt-24 pb-20 container-custom">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Sitemap</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Human-readable index — also see /sitemap.xml for crawlers.</p>
      <div className="grid md:grid-cols-2 gap-10">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{g.title}</h2>
            <ul className="space-y-2">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-primary hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-gray-500">{SITE.name} · {SITE.url}</p>
    </div>
  )
}
