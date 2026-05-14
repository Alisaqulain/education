import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/data/site'
import { absoluteUrl, defaultOpenGraph } from '@/lib/seo'
import { GALLERY_FILES, GALLERY_IMAGES, gallerySrc } from '@/data/galleryAssets'

export const metadata = {
  title: `Meet our teachers & gallery | ${SITE.name}`,
  description:
    'See our educators and learning spaces — live classes, music, movement, and academics in one place.',
  openGraph: {
    ...defaultOpenGraph,
    title: `Meet our teachers | ${SITE.name}`,
    description: 'Photo and video gallery from Myndveda classrooms and teachers.',
    url: absoluteUrl('/meet-our-teachers'),
  },
}

export default function MeetOurTeachersPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-bold text-primary uppercase tracking-wide">Gallery</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2">Meet our teachers</h1>
          <p className="text-lg text-gray-600 mt-4">
            Real moments from our online and hybrid sessions — the same mentors who show up on your child&apos;s timetable.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demo-class" className="btn-primary">
              Book free demo
            </Link>
            <Link href="/become-a-teacher" className="btn-secondary">
              Teach with us
            </Link>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-black shadow-xl mb-10 max-w-4xl mx-auto">
          <video
            className="w-full aspect-video object-cover"
            controls
            playsInline
            preload="metadata"
            poster={gallerySrc(GALLERY_FILES.image3)}
          >
            <source src={gallerySrc(GALLERY_FILES.video1)} type="video/mp4" />
          </video>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((file) => (
            <div key={file} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
              <Image
                src={gallerySrc(file)}
                alt={`${SITE.name} — learning moment`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
          Want to join a batch or meet a subject lead?{' '}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact us
          </Link>{' '}
          or{' '}
          <Link href="/teachers" className="font-semibold text-primary hover:underline">
            browse faculty profiles
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
