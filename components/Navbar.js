'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { programLinks, mainNav } from '@/data/navigation'
import { SITE } from '@/data/site'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [desktopPrograms, setDesktopPrograms] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    document.documentElement.dataset.eiMobileNav = mobileOpen ? 'open' : ''
    return () => {
      document.body.style.overflow = ''
      delete document.documentElement.dataset.eiMobileNav
    }
  }, [mobileOpen])

  useEffect(() => {
    const check = () => {
      const token = localStorage.getItem('token')
      const raw = localStorage.getItem('user')
      if (token && raw) {
        try {
          setUser(JSON.parse(raw))
          setIsLoggedIn(true)
        } catch {
          setUser(null)
          setIsLoggedIn(false)
        }
      } else {
        setUser(null)
        setIsLoggedIn(false)
      }
    }
    check()
    const onStorage = (e) => {
      if (e.key === 'token' || e.key === 'user') check()
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('authChange', check)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('authChange', check)
    }
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (userMenuOpen && !e.target.closest?.('.ei-user-menu')) setUserMenuOpen(false)
      if (desktopPrograms && !e.target.closest?.('.ei-programs-wrap')) setDesktopPrograms(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [userMenuOpen, desktopPrograms])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
    } catch {
      /* ignore */
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    setIsLoggedIn(false)
    setUser(null)
    setUserMenuOpen(false)
    window.location.href = '/'
  }

  const dashboardHref = () => {
    if (!user) return '/'
    const role = user.role || localStorage.getItem('role')
    if (role === 'admin') return '/admin/dashboard'
    if (role === 'teacher') return '/teacher/dashboard'
    if (role === 'student') return '/student/dashboard'
    if (role === 'parent') return '/parent/dashboard'
    if (role === 'counselor') return '/student/dashboard'
    if (role === 'franchise_partner') return '/franchise'
    return '/'
  }

  const NavLink = ({ href, children, onClick }) => (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative h-11 w-11 sm:h-14 sm:w-14">
              <Image src="/logo%20(2).jpeg" alt={SITE.name} fill className="object-contain group-hover:scale-105 transition-transform" priority />
            </div>
            <div className="leading-tight">
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight">{SITE.name}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Mind · Movement · Learning</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <div
              className="relative ei-programs-wrap"
              onMouseEnter={() => setDesktopPrograms(true)}
              onMouseLeave={() => setDesktopPrograms(false)}
            >
              <button
                type="button"
                className="text-sm font-semibold text-gray-700 hover:text-primary flex items-center gap-1"
                onClick={() => setDesktopPrograms((v) => !v)}
              >
                Programs
                <span className={`text-xs transition-transform ${desktopPrograms ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <AnimatePresence>
                {desktopPrograms ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-3 w-[min(640px,calc(100vw-3rem))] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-100 bg-white shadow-2xl p-6 grid grid-cols-2 gap-2"
                  >
                    {programLinks.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setDesktopPrograms(false)}
                      >
                        {p.label}
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <p className="text-xs text-gray-500">Need help choosing a track?</p>
                      <Link href="/admissions" className="text-xs font-bold text-primary hover:underline" onClick={() => setDesktopPrograms(false)}>
                        Talk to admissions →
                      </Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            {mainNav.filter((n) => n.href !== '/').map((n) => (
              <NavLink key={n.href} href={n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn && user ? (
              <div className="relative ei-user-menu">
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:bg-gray-50"
                >
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold flex items-center justify-center">
                    {(user.firstName || 'U').charAt(0)}
                    {(user.lastName || '').charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-gray-800 max-w-[120px] truncate">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="text-xs text-gray-500">▾</span>
                </button>
                {userMenuOpen ? (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-100 bg-white shadow-xl py-2 z-[80]">
                    <Link href={dashboardHref()} className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                      Dashboard
                    </Link>
                    <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>
                      Profile
                    </Link>
                    <button type="button" onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link href="/student/login" className="text-sm font-semibold text-gray-700 hover:text-primary">
                Login
              </Link>
            )}
            <Link
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
            >
              Join now
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mounted && typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {mobileOpen ? (
                <div key="ei-mobile-drawer" className="lg:hidden fixed inset-0 z-[10000] pointer-events-none [&>*]:pointer-events-auto">
                  <motion.button
                    type="button"
                    aria-label="Close menu backdrop"
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMobileOpen(false)}
                  />
                  <motion.aside
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                    className="absolute inset-y-0 right-0 flex w-[min(100vw,22rem)] max-w-full flex-col bg-white shadow-2xl ring-1 ring-black/5"
                    style={{ height: '100dvh', maxHeight: '100dvh' }}
                  >
                    <div className="flex h-14 shrink-0 items-center justify-between border-b border-gray-100 px-4">
                      <span className="font-bold text-gray-900">Menu</span>
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3 space-y-0.5">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Home
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProgramsOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Programs
                        <span className={`text-gray-500 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                      {programsOpen ? (
                        <div className="border-l-2 border-primary/25 ml-2 pl-2 space-y-0.5 pb-2">
                          {programLinks.map((p) => (
                            <Link
                              key={p.href}
                              href={p.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary"
                            >
                              {p.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                      {mainNav
                        .filter((n) => n.href !== '/')
                        .map((n) => (
                          <Link
                            key={n.href}
                            href={n.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                          >
                            {n.label}
                          </Link>
                        ))}
                    </nav>
                    <div className="shrink-0 space-y-2 border-t border-gray-100 bg-gray-50/90 p-4 safe-area-pb">
                      {!isLoggedIn ? (
                        <Link
                          href="/student/login"
                          onClick={() => setMobileOpen(false)}
                          className="block w-full rounded-xl border-2 border-gray-200 bg-white py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Login
                        </Link>
                      ) : (
                        <div className="space-y-2">
                          <Link
                            href={dashboardHref()}
                            onClick={() => setMobileOpen(false)}
                            className="block w-full rounded-xl border border-gray-200 bg-white py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            Dashboard
                          </Link>
                          <button
                            type="button"
                            onClick={() => {
                              handleLogout()
                              setMobileOpen(false)
                            }}
                            className="w-full rounded-xl border border-red-100 bg-red-50 py-3 text-sm font-semibold text-red-700"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                      <Link
                        href="/signup"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-center text-sm font-bold text-white shadow-md"
                      >
                        Join now
                      </Link>
                    </div>
                  </motion.aside>
                </div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </header>
  )
}
