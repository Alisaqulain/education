import { absoluteUrl } from '@/lib/seo'
import { programSlugs } from '@/data/programsData'
import { wingSlugs } from '@/data/wingsContent'

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/teachers',
  '/courses',
  '/pricing',
  '/how-it-works',
  '/programs',
  '/mission',
  '/why-myndveda',
  '/parent-portal',
  '/student-portal',
  '/career-guidance',
  '/faq',
  '/sitemap-page',
  '/testimonials',
  '/results',
  '/success-stories',
  '/careers',
  '/become-a-teacher',
  '/franchise',
  '/blog',
  '/events',
  '/workshops',
  '/scholarships',
  '/demo-class',
  '/admissions',
  '/signup',
  '/student/login',
  '/parent/login',
  '/register',
]

export default function sitemap() {
  const lastModified = new Date()
  const urls = [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...programSlugs.map((slug) => ({
      url: absoluteUrl(`/programs/${slug}`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...wingSlugs.map((slug) => ({
      url: absoluteUrl(`/programs/wing/${slug}`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.82,
    })),
    {
      url: absoluteUrl('/programs/crash-courses'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...['class-10-board', 'class-12-board', 'jee', 'neet'].map((slug) => ({
      url: absoluteUrl(`/programs/crash-courses/${slug}`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    })),
  ]
  return urls
}
