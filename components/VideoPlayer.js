'use client'

import { useState, useRef, useEffect } from 'react'

export default function VideoPlayer({ videoUrl, title, autoPlay = false }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (video) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      video.currentTime = pos * duration
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen()
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate)
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
    }
  }

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl">
      {title && (
        <div className="px-4 py-3 bg-gray-900 border-b border-gray-800">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      )}
      
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full"
          onClick={togglePlay}
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110"
            >
              <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress Bar */}
          <div
            className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all group-hover:bg-opacity-100"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="w-3 h-3 bg-white rounded-full -mt-0.5 float-right opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="text-white hover:text-primary transition-colors"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className="flex items-center space-x-2 flex-1">
              <span className="text-white text-sm">{formatTime(currentTime)}</span>
              <span className="text-white/60 text-sm">/</span>
              <span className="text-white/60 text-sm">{formatTime(duration)}</span>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20"
              />
            </div>

            {/* Playback Speed */}
            <div className="relative group">
              <button className="text-white hover:text-primary transition-colors text-sm font-semibold">
                {playbackRate}x
              </button>
              <div className="absolute bottom-full right-0 mb-2 bg-gray-900 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="p-2 space-y-1">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => changePlaybackRate(rate)}
                      className={`block w-full text-left px-3 py-1 text-sm rounded hover:bg-gray-800 ${
                        playbackRate === rate ? 'text-primary' : 'text-white'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}




