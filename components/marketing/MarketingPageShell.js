export default function MarketingPageShell({ eyebrow, title, subtitle, children }) {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <section className="container-custom mb-12 md:mb-16">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{title}</h1>
        {subtitle ? <p className="text-lg text-gray-600 mt-4 max-w-3xl leading-relaxed">{subtitle}</p> : null}
      </section>
      <div className="container-custom">{children}</div>
    </div>
  )
}
