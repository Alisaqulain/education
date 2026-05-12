import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SiteWidgets from '@/components/layout/SiteWidgets'
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd'
import { SITE } from '@/data/site'
import { absoluteUrl, defaultOpenGraph } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Academics, yoga, Zumba & mindful learning`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Myndveda is a modern K–12 and competitive exam ecosystem with live & recorded classes, crash courses, skills, yoga, Zumba, sports and parent-grade analytics.',
  keywords: [
    'Myndveda',
    'online coaching',
    'JEE NEET CUET',
    'crash course',
    'CBSE ICSE',
    'live classes',
    'yoga for students',
    'Zumba classes',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    ...defaultOpenGraph,
    title: `${SITE.name} — Complete student development`,
    description:
      'Boards, entrances, skills & sports — one trusted institute with transparent outcomes.',
    url: absoluteUrl('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name}`,
    description:
      'Boards, entrances, skills & sports — one trusted institute with transparent outcomes.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <OrganizationJsonLd />
        <Navbar />
        <main className="min-h-screen pb-24 lg:pb-0">{children}</main>
        <Footer />
        <SiteWidgets />
      </body>
    </html>
  )
}











