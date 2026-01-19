'use client'

import { useState, useRef, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0)
  const videoRefs = useRef([])

  const videos = [
    {
      id: 1,
      video: '/6985691-uhd_3840_2160_25fps.mp4',
      title: 'Interactive Learning Experience',
      description: 'Experience engaging and interactive online classes with our expert teachers',
    },
    {
      id: 2,
      video: '/4494801-uhd_3840_2160_25fps.mp4',
      title: 'Global Education Network',
      description: 'Connect with students and teachers from around the world',
    },
  ]

  useEffect(() => {
    // Auto-play the active video
    if (videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].play().catch(() => {
        // Autoplay was prevented, which is fine
      })
    }
  }, [activeVideo])

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeInDown" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-bold border border-white/20 shadow-lg">
            🎬 See It In Action
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Experience <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quality Education</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how thousands of students are transforming their learning journey with Edgen Institute
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {videos.map((video, index) => (
            <AnimatedSection
              key={video.id}
              animation="scaleIn"
              delay={index * 200}
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => setActiveVideo(index)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 transform group-hover:scale-[1.02]">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.video}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause()
                      e.target.currentTime = 0
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{video.title}</h3>
                      <p className="text-sm sm:text-base text-gray-200">{video.description}</p>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Video Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <AnimatedSection animation="fadeInUp" delay={400} className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">1M+</div>
              <div className="text-sm sm:text-base text-gray-300">Video Lessons</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={500} className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Access Anytime</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={600} className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">HD</div>
              <div className="text-sm sm:text-base text-gray-300">Quality Content</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

