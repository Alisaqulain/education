'use client'

import { useState, useEffect } from 'react'

export default function RotatingHeadline() {
  const headlines = [
    { text: 'Learn. Teach. Grow', audience: 'both' },
    { text: 'Learn From Expert Educators', audience: 'student' },
    { text: 'Teach Students Worldwide', audience: 'teacher' },
    { text: 'Grow Your Teaching Career', audience: 'teacher' },
    { text: 'Discover Quality Courses', audience: 'student' },
    { text: 'Build Your Learning Path', audience: 'student' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
        setIsVisible(true)
      }, 300) // Wait for fade out before changing
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const currentHeadline = headlines[currentIndex]

  return (
    <span 
      className={`gradient-text inline-block transition-all duration-500 ease-in-out break-words ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2'
      }`}
      style={{
        animation: isVisible ? 'slideInUp 0.5s ease-out' : 'none',
        wordBreak: 'break-word',
        hyphens: 'auto'
      }}
    >
      {currentHeadline.text}
    </span>
  )
}

