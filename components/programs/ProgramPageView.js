import Link from 'next/link'
import ProgramFAQ from '@/components/programs/ProgramFAQ'
import LeadForm from '@/components/forms/LeadForm'

export default function ProgramPageView({ data }) {
  return (
    <div className="pt-20 md:pt-24">
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${data.heroAccent || 'from-slate-900 via-indigo-900 to-slate-900'} opacity-95`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="relative container-custom section-padding text-white">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-4">
              <span className="h-px w-8 bg-white/40" />
              {data.heroBadge}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">{data.title}</h1>
            <p className="text-lg text-white/85 mb-2">{data.subtitle}</p>
            <p className="text-sm text-white/70 mb-8">{data.grades}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo-class" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                {data.demoCta}
              </Link>
              <Link href="/admissions" className="btn-secondary border-white text-white hover:bg-white/10">
                Talk to admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum approach</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {data.curriculum.map((c) => (
                  <li key={c} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects covered</h2>
              <div className="flex flex-wrap gap-2">
                {data.subjects.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why families choose this track</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.map((b) => (
                  <div key={b} className="rounded-2xl p-5 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
                    <p className="text-gray-800 font-medium">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Faculty & pedagogy</h2>
              <ul className="space-y-3 text-gray-700">
                {data.faculty.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Student outcomes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.results.map((r) => (
                  <div key={r} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-900">
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
              <ProgramFAQ items={data.faqs} />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-xl shadow-xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Plans & pricing</h3>
              <p className="text-sm text-gray-600 mb-4">Indicative — final fee depends on mode & city.</p>
              <div className="space-y-3 mb-6">
                {data.pricing.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-gray-100 p-4 bg-gray-50/80">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">{p.name}</span>
                      <span className="text-primary font-bold">{p.price}</span>
                    </div>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                ))}
              </div>
              <LeadForm type="admission" program={data.slug} submitLabel="Request a call back" showMessage />
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
