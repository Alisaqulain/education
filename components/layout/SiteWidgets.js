'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { waLink } from '@/data/site'

function useMobileNavDrawerOpen() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const read = () => setOpen(document.documentElement.getAttribute('data-ei-mobile-nav') === 'open')
    read()
    const mo = new MutationObserver(read)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-ei-mobile-nav'] })
    return () => mo.disconnect()
  }, [])
  return open
}

export default function SiteWidgets() {
  const navOpen = useMobileNavDrawerOpen()
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white text-2xl shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all lg:bottom-8 ${
          navOpen ? 'translate-y-24 opacity-0 pointer-events-none' : ''
        }`}
        aria-label="Chat on WhatsApp"
      >
        <span aria-hidden>💬</span>
      </a>
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[55] border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-3 safe-area-pb transition-transform duration-200 ${
          navOpen ? 'translate-y-full pointer-events-none opacity-0' : ''
        }`}
      >
        <div className="max-w-lg mx-auto flex gap-3">
          <Link href="/demo-class" className="flex-1 text-center rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            Demo class
          </Link>
          <Link href="/signup" className="flex-1 text-center rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-white shadow-lg">
            Join now
          </Link>
        </div>
      </div>
    </>
  )
}
