'use client'

import Link from 'next/link'
import Image from 'next/image'
import { GALLERY_FILES, GALLERY_IMAGES, gallerySrc } from '@/data/galleryAssets'

export default function MeetOurTeachersGallery({ variant = 'home' }) {
  const showVideo = true
  const images = variant === 'home' ? GALLERY_IMAGES.slice(0, 4) : GALLERY_IMAGES

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white border-y border-white/10">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400/90 mb-2">Meet our teachers</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Faces behind your child&apos;s progress</h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              A glimpse from our studios and live classrooms — music, movement, academics, and more.
            </p>
          </div>
          <Link
            href="/meet-our-teachers"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors shrink-0"
          >
            Open full gallery →
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
          {showVideo ? (
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl aspect-video lg:aspect-auto lg:min-h-[280px]">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={gallerySrc(GALLERY_FILES.image3)}
              >
                <source src={gallerySrc(GALLERY_FILES.video1)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
          <div className={`grid grid-cols-2 gap-3 md:gap-4 ${showVideo ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
            {images.map((file) => (
              <div
                key={file}
                className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg group"
              >
                <Image
                  src={gallerySrc(file)}
                  alt="Myndveda classroom and teachers"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
