import Link from 'next/link'
import Image from 'next/image'
import { programLinks, secondaryNav } from '@/data/navigation'
import { SITE } from '@/data/site'

const explore = [
  { href: '/results', label: 'Results' },
  { href: '/success-stories', label: 'Success stories' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/demo-class', label: 'Demo class' },
  { href: '/scholarships', label: 'Scholarships' },
  { href: '/events', label: 'Events' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/blog', label: 'Blog' },
  ...secondaryNav,
]

const institute = [
  { href: '/about', label: 'About' },
  { href: '/teachers', label: 'Teachers' },
  { href: '/careers', label: 'Careers' },
  { href: '/become-a-teacher', label: 'Become a teacher' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative h-11 w-11">
                <Image src="/logo.png" alt={`${SITE.name} logo`} fill className="object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <div className="text-white text-lg font-black leading-tight">{SITE.name}</div>
                <div className="text-gray-500 text-xs">Mind · Movement · Learning</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              A full-stack learning ecosystem for boards, JEE, NEET, CUET, Olympiads, crash programs, skills, yoga, Zumba and sports — with transparent parent analytics.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              {SITE.supportEmail} · {SITE.phone}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              {programLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-primary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              {explore.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-primary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-4">Institute</h3>
            <ul className="space-y-2 text-sm">
              {institute.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-primary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold mb-4 mt-8">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/terms-and-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-cancellation" className="hover:text-primary transition-colors">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Crafted by{' '}
            <a href="https://bizsuncreative.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              Bizsun Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
