import { notFound } from 'next/navigation'
import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import { blogPosts } from '@/data/blogPosts'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Article' }
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()
  return (
    <MarketingPageShell eyebrow={post.date} title={post.title} subtitle={post.excerpt}>
      <article className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
        <p>
          This is a production-ready placeholder article. Replace with MDX or CMS-driven content. The excerpt above captures the thesis;
          long-form sections would live here with internal links to programs and admissions.
        </p>
        <p>
          For investor-grade storytelling, pair quantitative cohort charts with anonymised student journeys and link to{' '}
          <a href="/results">results</a> and <a href="/demo-class">demo booking</a>.
        </p>
      </article>
    </MarketingPageShell>
  )
}
