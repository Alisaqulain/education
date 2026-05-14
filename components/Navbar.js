'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { mainNav } from '@/data/navigation'
import { categoryMegaMenu } from '@/data/blueprintHome'
import { SITE } from '@/data/site'

export default function Navbar() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [desktopCategories, setDesktopCategories] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
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
      if (desktopCategories && !e.target.closest?.('.ei-categories-wrap')) setDesktopCategories(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [userMenuOpen, desktopCategories])

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
        <div className="flex items-center justify-between h-16 md:h-20 gap-2 sm:gap-3 lg:gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0">
              <Image src="/updatelogo.jpeg" alt={SITE.name} fill className="object-contain group-hover:scale-105 transition-transform" priority />
            </div>
            <div className="leading-tight min-w-0 hidden sm:block">
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight truncate">{SITE.name}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Mind · Movement · Learning</div>
            </div>
          </Link>

          <form
            className="hidden md:flex flex-1 max-w-[11rem] lg:max-w-[13rem] xl:max-w-md min-w-0 mx-1 lg:mx-3"
            onSubmit={(e) => {
              e.preventDefault()
              const q = searchQuery.trim()
              router.push(q ? `/courses?q=${encodeURIComponent(q)}` : '/courses')
            }}
            role="search"
          >
            <label htmlFor="ei-nav-search" className="sr-only">
              Search courses
            </label>
            <div className="relative w-full">
              <input
                id="ei-nav-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses…"
                className="w-full rounded-xl border border-gray-200 bg-white/90 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </form>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            <div
              className="relative ei-categories-wrap"
              onMouseEnter={() => setDesktopCategories(true)}
              onMouseLeave={() => setDesktopCategories(false)}
            >
              <button
                type="button"
                className="text-sm font-semibold text-gray-700 hover:text-primary flex items-center gap-1"
                onClick={() => setDesktopCategories((v) => !v)}
              >
                Categories
                <span className={`text-xs transition-transform ${desktopCategories ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <AnimatePresence>
                {desktopCategories ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 xl:left-0 top-full mt-3 w-[min(920px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-100 bg-white shadow-2xl p-6"
                  >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {categoryMegaMenu.map((cat) => (
                        <div key={cat.title}>
                          <p className={`text-xs font-black uppercase tracking-wide bg-gradient-to-r ${cat.accent} bg-clip-text text-transparent`}>
                            {cat.title}
                          </p>
                          <ul className="mt-3 space-y-1 max-h-52 overflow-y-auto pr-1">
                            {cat.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="block rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                                  onClick={() => setDesktopCategories(false)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                      <Link href="/programs" className="text-xs font-bold text-primary hover:underline" onClick={() => setDesktopCategories(false)}>
                        All structured programs →
                      </Link>
                      <Link href="/courses" className="text-xs font-semibold text-gray-600 hover:text-primary" onClick={() => setDesktopCategories(false)}>
                        Browse course catalog
                      </Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <NavLink href="/teachers">Teachers</NavLink>
            <NavLink href="/contact">Contact us</NavLink>
            <NavLink href="/become-a-teacher">Become a teacher</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
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
              <>
                <Link href="/student/login" className="text-sm font-semibold text-gray-700 hover:text-primary px-1 shrink-0">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-xl transition-all shrink-0"
                >
                  Sign up
                </Link>
              </>
            )}
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
                      <form
                        className="mb-3 px-1"
                        onSubmit={(e) => {
                          e.preventDefault()
                          const q = searchQuery.trim()
                          setMobileOpen(false)
                          router.push(q ? `/courses?q=${encodeURIComponent(q)}` : '/courses')
                        }}
                      >
                        <label htmlFor="ei-mobile-search" className="sr-only">
                          Search courses
                        </label>
                        <input
                          id="ei-mobile-search"
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search courses…"
                          className="w-full rounded-xl border border-gray-200 bg-white py-2.5 px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </form>
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Home
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Contact us
                      </Link>
                      <Link
                        href="/become-a-teacher"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Become a teacher
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProgramsOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-gray-900 hover:bg-gray-50 active:bg-gray-100"
                      >
                        Categories
                        <span className={`text-gray-500 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                      {programsOpen ? (
                        <div className="border-l-2 border-primary/25 ml-2 pl-2 space-y-3 pb-2 max-h-[50vh] overflow-y-auto">
                          {categoryMegaMenu.map((cat) => (
                            <div key={cat.title}>
                              <p className="px-3 pt-1 text-xs font-bold text-primary uppercase tracking-wide">{cat.title}</p>
                              <div className="space-y-0.5 mt-1">
                                {cat.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            href="/programs"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-bold text-primary hover:underline"
                          >
                            All programs →
                          </Link>
                        </div>
                      ) : null}
                      {mainNav
                        .filter((n) => !['/', '/contact', '/become-a-teacher'].includes(n.href))
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
                        Sign up
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
