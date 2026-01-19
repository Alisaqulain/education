'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (typeof end !== 'number') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [end, duration])

  return (
    <span ref={ref}>
      {typeof end === 'number' ? count.toLocaleString() : end}
      {suffix}
    </span>
  )
}

export default function TrustMetrics() {
  const metrics = [
    { value: 10000, suffix: '+', label: 'Verified Teachers' },
    { value: 50000, suffix: '+', label: 'Happy Students' },
    { value: 250, suffix: '+', label: 'Subjects Available' },
    { value: 1, suffix: 'M+', label: 'Hours Taught', isStatic: true },
    { value: '4.9/5', label: 'Average Rating' },
    { value: 150, suffix: '+', label: 'Countries' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <AnimatedSection animation="fadeInDown" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Millions Worldwide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of learners and educators trust Edgen Institute for quality education
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 80}>
              <div className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40">
                {/* Number */}
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                  {metric.isStatic ? (
                    metric.value
                  ) : typeof metric.value === 'number' ? (
                    <CountUp end={metric.value} suffix={metric.suffix || ''} />
                  ) : (
                    metric.value
                  )}
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base font-semibold text-gray-600">
                  {metric.label}
                </p>

                {/* Accent line */}
                <span className="absolute inset-x-8 bottom-0 h-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
