import dynamic from 'next/dynamic'
import { SITE } from '@/data/site'
import { absoluteUrl, defaultOpenGraph } from '@/lib/seo'

const HomeSections = dynamic(() => import('@/components/home/HomeSections'), {
  ssr: true,
  loading: () => (
    <div className="min-h-[60vh] pt-32 flex items-center justify-center text-gray-500 text-sm">
      Loading experience…
    </div>
  ),
})

export const metadata = {
  title: `${SITE.name} — Learn smarter. Grow holistically.`,
  description:
    'Learn anything, anywhere from expert teachers — academics, languages, performing arts, and tech. Live classes, recordings, demos, and Razorpay payments.',
  openGraph: {
    ...defaultOpenGraph,
    title: `${SITE.name} — Academics to athletics`,
    description:
      'Complete development for students — academics, competitive exams, skills, creativity and sports.',
    url: absoluteUrl('/'),
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeSections />
    </div>
  )
}
