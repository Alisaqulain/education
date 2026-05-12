import { SITE } from '@/data/site'
import { absoluteUrl } from '@/lib/seo'

export default function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE.name,
    url: absoluteUrl('/'),
    description:
      'Myndveda offers K–12 academics, competitive exam prep, crash courses, creative skills, yoga, Zumba and sports programs online and offline.',
    sameAs: [],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
