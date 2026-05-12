import { SITE } from '@/data/site'

export function absoluteUrl(path = '/') {
  const base = (SITE.url || 'https://myndveda.com').replace(/\/$/, '')
  if (!path || path === '/') return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

export const defaultOpenGraph = {
  type: 'website',
  locale: 'en_IN',
  siteName: SITE.name,
}
