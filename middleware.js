import { NextResponse } from 'next/server'

export function middleware(request) {
  const res = NextResponse.next()
  res.headers.set('X-Frame-Options', 'SAMEORIGIN')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(self), geolocation=()')

  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  if (pathname.startsWith('/parent') && pathname !== '/parent/login' && pathname !== '/parent/register') {
    if (!token) {
      return NextResponse.redirect(new URL('/parent/login', request.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*', '/parent/:path*'],
}
