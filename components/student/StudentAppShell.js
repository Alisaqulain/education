'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/student/dashboard', label: 'Home', icon: MHome },
  { href: '/student/my-courses', label: 'Learn', icon: MBook },
  { href: '/student/community', label: 'Community', icon: MChat },
  { href: '/student/notifications', label: 'Alerts', icon: MBell },
]

function MHome({ active }) {
  return (
    <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}
function MBook({ active }) {
  return (
    <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}
function MChat({ active }) {
  return (
    <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  )
}
function MBell({ active }) {
  return (
    <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  )
}

export default function StudentAppShell({ children }) {
  const pathname = usePathname()
  const hideChrome = pathname?.startsWith('/student/login')
  return (
    <div className={`min-h-screen ${hideChrome ? '' : 'bg-gray-50 dark:bg-gray-950 pb-24 lg:pb-8'}`}>
      {children}
      {!hideChrome ? (
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[45] border-t border-gray-200 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 dark:border-gray-800 safe-area-pb">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-1 px-1 py-2">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== '/student/dashboard' && pathname.startsWith(item.href))
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold ${active ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <Icon active={active} />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
      ) : null}
    </div>
  )
}
