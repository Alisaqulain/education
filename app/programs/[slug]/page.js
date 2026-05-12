import { notFound } from 'next/navigation'
import ProgramPageView from '@/components/programs/ProgramPageView'
import { programs, programSlugs } from '@/data/programsData'
import { SITE } from '@/data/site'

export function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const data = programs[params.slug]
  if (!data) return { title: `Program | ${SITE.name}` }
  return {
    title: `${data.title} | ${SITE.name}`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | ${SITE.name}`,
      description: data.subtitle,
      type: 'article',
      url: `${SITE.url}/programs/${params.slug}`,
    },
  }
}

export default function ProgramPage({ params }) {
  const data = programs[params.slug]
  if (!data) notFound()
  return <ProgramPageView data={data} />
}
