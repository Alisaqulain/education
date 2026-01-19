'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '' 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClasses = {
    fadeInUp: 'animate-fadeInUp',
    fadeInDown: 'animate-fadeInDown',
    fadeInLeft: 'animate-fadeInLeft',
    fadeInRight: 'animate-fadeInRight',
    scaleIn: 'animate-scaleIn',
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] || 'animate-fadeInUp' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}






