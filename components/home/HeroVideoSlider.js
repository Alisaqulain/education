'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { HERO_VIDEO_FILES } from '@/data/site'

const SLIDE_MS = 9000

export default function HeroVideoSlider() {
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const refs = useRef([])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const syncPlayback = useCallback(() => {
    refs.current.forEach((el, i) => {
      if (!el) return
      if (i === index) {
        el.play().catch(() => {})
      } else {
        el.pause()
        try {
          el.currentTime = 0
        } catch {
          /* ignore */
        }
      }
    })
  }, [index])

  useEffect(() => {
    syncPlayback()
  }, [index, syncPlayback])

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_VIDEO_FILES.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [reducedMotion])

  const go = (i) =>
    setIndex(((i % HERO_VIDEO_FILES.length) + HERO_VIDEO_FILES.length) % HERO_VIDEO_FILES.length)

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
      {reducedMotion ? (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      ) : null}
      {!reducedMotion
        ? HERO_VIDEO_FILES.map((src, i) => (
            <video
              key={src}
              ref={(el) => {
                refs.current[i] = el
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === index ? 'opacity-95 z-[1]' : 'opacity-0 z-0 pointer-events-none'
              }`}
              muted
              playsInline
              loop
              preload={i === 0 ? 'auto' : 'metadata'}
              aria-hidden
            >
              <source src={src} type="video/mp4" />
            </video>
          ))
        : null}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/88 via-indigo-950/82 to-slate-950/90 z-[2]" />
      <div className="absolute inset-0 opacity-35 z-[2] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.4),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(244,114,182,0.22),transparent_42%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-[2] bg-gradient-to-t from-slate-950 to-transparent" />

      {!reducedMotion ? (
        <div className="absolute bottom-6 left-0 right-0 z-[4] flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur hover:bg-white/25"
              aria-label="Previous video"
            >
              ‹
            </button>
            <div className="flex gap-1.5">
              {HERO_VIDEO_FILES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Video ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur hover:bg-white/25"
              aria-label="Next video"
            >
              ›
            </button>
          </div>
          <p className="text-[10px] text-white/50 uppercase tracking-widest">
            Auto-rotates · {HERO_VIDEO_FILES.length} films
          </p>
        </div>
      ) : null}
    </div>
  )
}
