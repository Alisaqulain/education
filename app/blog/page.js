import Link from 'next/link'
import MarketingPageShell from '@/components/marketing/MarketingPageShell'
import { blogPosts } from '@/data/blogPosts'

export const metadata = {
  title: 'Blog',
  description: 'Insights on pedagogy, exam strategy, parent dashboards and blended learning.',
}

export default function BlogIndexPage() {
  return (
    <MarketingPageShell eyebrow="Insights" title="Edgen blog" subtitle="Long-form notes from our academic council and product team.">
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all">
            <p className="text-xs text-gray-500">
              {post.date} · {post.read}
            </p>
            <h2 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-3">{post.excerpt}</p>
            <span className="inline-flex mt-4 text-sm font-semibold text-primary">Read article →</span>
          </Link>
        ))}
      </div>
    </MarketingPageShell>
  )
}
