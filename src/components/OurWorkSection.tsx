'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion, AnimatePresence, PanInfo, useAnimationControls } from 'framer-motion'
import Link from 'next/link'
import AIToolsSection from './AIToolsSection'

const videos = [
  {
    kind: 'Short',
    embedUrl: 'https://www.youtube.com/embed/Z5YVjVKAqJw',
    aspectClass: 'aspect-[9/16]'
  },
  {
    kind: 'Short',
    embedUrl: 'https://www.youtube.com/embed/hpbayFYlRxw',
    aspectClass: 'aspect-[9/16]'
  },
  {
    kind: 'Long-Form',
    embedUrl: 'https://www.youtube.com/embed/MFsYKQdcdz0?start=92',
    aspectClass: 'aspect-video'
  },
  {
    kind: 'Long-Form',
    embedUrl: 'https://www.youtube.com/embed/o7Asyo9s2_M?start=2220',
    aspectClass: 'aspect-video'
  },
  {
    kind: 'Short',
    embedUrl: 'https://www.youtube.com/embed/wVfyy3mjU-M',
    aspectClass: 'aspect-[9/16]'
  }
]

export default function OurWorkSection() {
  const shorts = [
    { id: 'ZZgX3-Ep9YY', title: 'Pareto Principle - Jay Papasan' },
    { id: 't58yCZzzfOc', title: 'AI Writing - Steve Yegge' },
    { id: 'ojSA_KCf17A', title: 'Side Hustle - Sundas Khalid' },
    { id: 'M8ioFOt5R4k', title: 'No Shortcuts - Ani Sanyal' }
  ]

  const longFormVideos = [
    { id: 'o7Asyo9s2_M', title: 'Gergely Orosz - A Life Engineered' },
    { id: 'Dou3EjQBpuM', title: 'Jay Papasan - Limitless Grit' },
    { id: 'XvtuW0UN4aA', title: 'Sundas Khalid - A Life Engineered' },
    { id: '8PkIXuPm-Fo', title: 'Bill Simmons - MadTech Momentum' }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDraggingShorts, setIsDraggingShorts] = useState(false)
  const [isPlayingShorts, setIsPlayingShorts] = useState(false)
  const shortsAutoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const shortsProgressControls = useAnimationControls()

  // YT API player instances and readiness
  const shortsPlayerRef = useRef<any | null>(null)
  const longFormPlayerRef = useRef<any | null>(null)
  const shortsPlayerWrapperRef = useRef<HTMLDivElement | null>(null)
  const longsPlayerWrapperRef = useRef<HTMLDivElement | null>(null)
  const shortsMountRef = useRef<HTMLDivElement | null>(null)
  const longFormMountRef = useRef<HTMLDivElement | null>(null)
  const [ytApiReady, setYtApiReady] = useState(false)

  // Load YouTube IFrame API once
  useEffect(() => {
    if (typeof window === 'undefined') return
    const w = window as any
    if (w.YT && w.YT.Player) {
      setYtApiReady(true)
      return
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else {
      document.head.appendChild(tag)
    }
    w.onYouTubeIframeAPIReady = () => {
      setYtApiReady(true)
    }
  }, [])

  const ordered = useMemo(() => {
    return shorts.map((item, idx) => ({
      ...item,
      rel: (idx - activeIndex + shorts.length) % shorts.length
    }))
  }, [activeIndex])

  // Auto-play for shorts
  useEffect(() => {
    const startAutoPlay = () => {
      if (shortsAutoPlayRef.current) {
        clearInterval(shortsAutoPlayRef.current)
      }
      shortsAutoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % shorts.length)
      }, 10000)
    }

    if (!isDraggingShorts && !isPlayingShorts) {
      startAutoPlay()
    } else {
      if (shortsAutoPlayRef.current) {
        clearInterval(shortsAutoPlayRef.current)
      }
    }

    return () => {
      if (shortsAutoPlayRef.current) {
        clearInterval(shortsAutoPlayRef.current)
      }
    }
  }, [isDraggingShorts, isPlayingShorts])

  const handleShortsDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous
        setActiveIndex((prev) => (prev - 1 + shorts.length) % shorts.length)
      } else {
        // Swiped left - go to next
        setActiveIndex((prev) => (prev + 1) % shorts.length)
      }
      setIsPlayingShorts(false)
      setIsPlayingLongForm(false)
    }
    setIsDraggingShorts(false)
  }

  const [longFormActiveIndex, setLongFormActiveIndex] = useState(0)
  const [isDraggingLongForm, setIsDraggingLongForm] = useState(false)
  const [isPlayingLongForm, setIsPlayingLongForm] = useState(false)
  const longFormAutoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const longFormProgressControls = useAnimationControls()
  
  const longFormOrdered = useMemo(() => {
    return longFormVideos.map((item, idx) => ({
      ...item,
      rel: (idx - longFormActiveIndex + longFormVideos.length) % longFormVideos.length
    }))
  }, [longFormActiveIndex])

  // Auto-play for long form
  useEffect(() => {
    const startAutoPlay = () => {
      if (longFormAutoPlayRef.current) {
        clearInterval(longFormAutoPlayRef.current)
      }
      longFormAutoPlayRef.current = setInterval(() => {
        setLongFormActiveIndex((prev) => (prev + 1) % longFormVideos.length)
      }, 10000)
    }

    if (!isDraggingLongForm && !isPlayingLongForm) {
      startAutoPlay()
    } else {
      if (longFormAutoPlayRef.current) {
        clearInterval(longFormAutoPlayRef.current)
      }
    }

    return () => {
      if (longFormAutoPlayRef.current) {
        clearInterval(longFormAutoPlayRef.current)
      }
    }
  }, [isDraggingLongForm, isPlayingLongForm])

  // Shorts progress bar
  useEffect(() => {
    const startProgress = () => {
      shortsProgressControls.set({ width: '0%' })
      shortsProgressControls.start({
        width: '100%',
        transition: { duration: 10, ease: 'linear' }
      })
    }

    if (!isDraggingShorts && !isPlayingShorts) {
      startProgress()
    } else {
      shortsProgressControls.stop()
    }
  }, [activeIndex, isDraggingShorts, isPlayingShorts, shortsProgressControls])

  // Long form progress bar
  useEffect(() => {
    const startProgress = () => {
      longFormProgressControls.set({ width: '0%' })
      longFormProgressControls.start({
        width: '100%',
        transition: { duration: 10, ease: 'linear' }
      })
    }

    if (!isDraggingLongForm && !isPlayingLongForm) {
      startProgress()
    } else {
      longFormProgressControls.stop()
    }
  }, [longFormActiveIndex, isDraggingLongForm, isPlayingLongForm, longFormProgressControls])

  const handleLongFormDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous
        setLongFormActiveIndex((prev) => (prev - 1 + longFormVideos.length) % longFormVideos.length)
      } else {
        // Swiped left - go to next
        setLongFormActiveIndex((prev) => (prev + 1) % longFormVideos.length)
      }
      setIsPlayingShorts(false)
      setIsPlayingLongForm(false)
    }
    setIsDraggingLongForm(false)
  }

  // Create players once when API is ready
  useEffect(() => {
    if (!ytApiReady) return
    const w = window as any

    if (shortsPlayerWrapperRef.current && !shortsPlayerRef.current) {
      const mount = document.createElement('div')
      shortsMountRef.current = mount
      shortsPlayerWrapperRef.current.appendChild(mount)
      shortsPlayerRef.current = new w.YT.Player(mount, {
        videoId: shorts[activeIndex].id,
        playerVars: { modestbranding: 1, rel: 0, controls: 1, autoplay: 0 },
        events: {
          onReady: () => {
            const iframe = shortsPlayerRef.current?.getIframe?.()
            if (iframe) {
              iframe.style.width = '100%'
              iframe.style.height = '100%'
            }
          },
          onStateChange: (e: any) => {
            const playing = e?.data === 1
            setIsPlayingShorts(playing)
            if (playing && longFormPlayerRef.current?.pauseVideo) {
              try { longFormPlayerRef.current.pauseVideo() } catch {}
            }
            if (!playing) {
              // no-op
            }
          }
        }
      })
    }

    if (longsPlayerWrapperRef.current && !longFormPlayerRef.current) {
      const mount = document.createElement('div')
      longFormMountRef.current = mount
      longsPlayerWrapperRef.current.appendChild(mount)
      longFormPlayerRef.current = new w.YT.Player(mount, {
        videoId: longFormVideos[longFormActiveIndex].id,
        playerVars: { modestbranding: 1, rel: 0, controls: 1, autoplay: 0 },
        events: {
          onReady: () => {
            const iframe = longFormPlayerRef.current?.getIframe?.()
            if (iframe) {
              iframe.style.width = '100%'
              iframe.style.height = '100%'
            }
          },
          onStateChange: (e: any) => {
            const playing = e?.data === 1
            setIsPlayingLongForm(playing)
            if (playing && shortsPlayerRef.current?.pauseVideo) {
              try { shortsPlayerRef.current.pauseVideo() } catch {}
            }
          }
        }
      })
    }

    return () => {
      // Cleanup on unmount
      try {
        if (shortsPlayerRef.current && typeof shortsPlayerRef.current.destroy === 'function') {
          const iframe = shortsPlayerRef.current.getIframe?.()
          if (!iframe || iframe.parentNode) shortsPlayerRef.current.destroy()
        }
      } catch {}
      if (shortsMountRef.current && shortsPlayerWrapperRef.current?.contains(shortsMountRef.current)) {
        try { shortsPlayerWrapperRef.current.removeChild(shortsMountRef.current) } catch {}
      }
      try {
        if (longFormPlayerRef.current && typeof longFormPlayerRef.current.destroy === 'function') {
          const iframe = longFormPlayerRef.current.getIframe?.()
          if (!iframe || iframe.parentNode) longFormPlayerRef.current.destroy()
        }
      } catch {}
      if (longFormMountRef.current && longsPlayerWrapperRef.current?.contains(longFormMountRef.current)) {
        try { longsPlayerWrapperRef.current.removeChild(longFormMountRef.current) } catch {}
      }
      shortsPlayerRef.current = null
      longFormPlayerRef.current = null
      shortsMountRef.current = null
      longFormMountRef.current = null
    }
  }, [ytApiReady])

  // Update video on index change (no re-mount)
  useEffect(() => {
    const p = shortsPlayerRef.current
    if (ytApiReady && p) {
      try {
        if (typeof p.cueVideoById === 'function') {
          p.cueVideoById(shorts[activeIndex].id)
        } else if (typeof p.loadVideoById === 'function') {
          p.loadVideoById(shorts[activeIndex].id)
        }
      } catch {}
    }
  }, [activeIndex, ytApiReady])

  useEffect(() => {
    const p = longFormPlayerRef.current
    if (ytApiReady && p) {
      try {
        if (typeof p.cueVideoById === 'function') {
          p.cueVideoById(longFormVideos[longFormActiveIndex].id)
        } else if (typeof p.loadVideoById === 'function') {
          p.loadVideoById(longFormVideos[longFormActiveIndex].id)
        }
      } catch {}
    }
  }, [longFormActiveIndex, ytApiReady])

  // Removed per-slide mount/unmount player effects in favor of persistent players

  return (
    <section className="pt-16 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark">
            Our <span className="font-inria italic text-primary">Work</span>
          </h2>
          <p className="mt-8 mb-4 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            A mix of long-form podcasts and shorts. Two deep-dive episodes and two vertical highlights
            that showcase the storytelling and production quality we bring to every project.
          </p>
        </motion.div>

        {/* Shorts Row - Simple two-column layout */}
        <section className="mt-12 mb-24 pt-24">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="flex flex-col items-center lg:items-end">
              <div className="space-y-4 text-center lg:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-[15vw] leading-none md:text-[12rem] font-inria italic font-medium tracking-tight text-primary-dark select-none"
                >
                  <span className="text-primary">S</span>horts
                </motion.h3>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-lg md:text-2xl font-semibold text-gray-800"
                  >
                    {shorts[activeIndex]?.title}
                  </motion.p>
                </AnimatePresence>

                <div className="w-full max-w-[200px] mt-4 self-center lg:self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center lg:justify-start space-x-4 mt-4"
                  >
                    <button
                      onClick={() => setActiveIndex((prev) => (prev - 1 + shorts.length) % shorts.length)}
                      className="group p-2 rounded-full bg-gray-200 hover:bg-primary transition-colors shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gray-700 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold text-gray-600">
                        {activeIndex + 1} of {shorts.length}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveIndex((prev) => (prev + 1) % shorts.length)}
                      className="group p-2 rounded-full bg-gray-200 hover:bg-primary transition-colors shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gray-700 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] md:h-[560px] flex items-center justify-center touch-pan-y">
              <motion.div 
                className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16]"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDraggingShorts(true)}
                onDragEnd={handleShortsDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                {/* Drag handle overlay */}
                <div 
                  className="absolute inset-x-0 top-0 bottom-0 z-50 cursor-grab active:cursor-grabbing"
                  style={{ 
                    pointerEvents: isDraggingShorts ? 'auto' : 'none',
                    touchAction: 'pan-y'
                  }}
                />
                
                {/* Drag handles on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 z-40 cursor-grab active:cursor-grabbing" />
                <div className="absolute right-0 top-0 bottom-0 w-12 z-40 cursor-grab active:cursor-grabbing" />
                {ordered
                  .filter((item) => item.rel < 3) // Render active and next 2 cards
                  .map((item) => {
                    const isActive = item.rel === 0
                    return (
                      <motion.div
                        key={item.id}
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800"
                        style={{ 
                          zIndex: 10 - item.rel,
                          pointerEvents: isDraggingShorts ? 'none' : 'auto'
                        }}
                        initial={{ y: 20, scale: 0.9, opacity: 0 }}
                        animate={{
                          x: item.rel * 8,
                          y: item.rel * 16,
                          scale: 1 - item.rel * 0.05,
                          rotate: 2 + item.rel * 1.5,
                          opacity: 1 - item.rel * 0.2,
                        }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      >
                        {isActive ? (
                          <div className="w-full h-full relative z-10" />
                        ) : (
                          <img
                            src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                            alt="Upcoming short preview"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    )
                  })}
                {/* Persistent Shorts player overlay (wrapper only; YT mounts inside) */}
                <div ref={shortsPlayerWrapperRef} className="absolute inset-0 w-full h-full z-30 rounded-2xl overflow-hidden" />
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Long Form Row */}
      <section className="mt-24 pt-24 pb-48 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-0 lg:gap-24">
            <div className="flex flex-col items-center lg:items-start">
              <div className="space-y-4 text-center lg:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-[15vw] leading-none md:text-[12rem] font-inria italic font-medium tracking-tight text-primary-dark select-none"
                >
                  <span className="text-primary">L</span>ong Form
                </motion.h3>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={longFormActiveIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-lg md:text-2xl font-semibold text-gray-800"
                  >
                    {longFormVideos[longFormActiveIndex]?.title}
                  </motion.p>
                </AnimatePresence>

                <div className="w-full max-w-[200px] mt-4 self-center lg:self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center lg:justify-start space-x-4 mt-4"
                  >
                    <button
                      onClick={() =>
                        setLongFormActiveIndex((prev) => (prev - 1 + longFormVideos.length) % longFormVideos.length)
                      }
                      className="group p-2 rounded-full bg-gray-200 hover:bg-primary transition-colors shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gray-700 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold text-gray-600">
                        {longFormActiveIndex + 1} of {longFormVideos.length}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setLongFormActiveIndex((prev) => (prev + 1) % longFormVideos.length)
                      }
                      className="group p-2 rounded-full bg-gray-200 hover:bg-primary transition-colors shadow-sm"
                    >
                      <svg
                        className="w-4 h-4 text-gray-700 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="lg:order-first relative h-[320px] md:h-[480px] flex items-center justify-center lg:justify-end mt-4 lg:mt-0 touch-pan-y">
              <motion.div 
                className="relative w-full max-w-lg aspect-video"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDraggingLongForm(true)}
                onDragEnd={handleLongFormDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                {/* Drag handle overlay */}
                <div 
                  className="absolute inset-x-0 top-0 bottom-0 z-50 cursor-grab active:cursor-grabbing"
                  style={{ 
                    pointerEvents: isDraggingLongForm ? 'auto' : 'none',
                    touchAction: 'pan-y'
                  }}
                />
                
                {/* Drag handles on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-40 cursor-grab active:cursor-grabbing" />
                <div className="absolute right-0 top-0 bottom-0 w-16 z-40 cursor-grab active:cursor-grabbing" />
                {longFormOrdered
                  .filter((item) => item.rel < 3)
                  .map((item) => {
                    const isActive = item.rel === 0
                    return (
                      <motion.div
                        key={item.id}
                        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800"
                        style={{ 
                          zIndex: 10 - item.rel,
                          pointerEvents: isDraggingLongForm ? 'none' : 'auto'
                        }}
                        initial={{ y: 20, scale: 0.9, opacity: 0 }}
                        animate={{
                          x: item.rel * -10,
                          y: item.rel * 10,
                          scale: 1 - item.rel * 0.05,
                          rotate: -2 - item.rel,
                          opacity: 1 - item.rel * 0.2,
                        }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                      >
                        {isActive ? (
                          <div className="w-full h-full relative z-10" />
                        ) : (
                          <img
                            src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                            alt="Upcoming video preview"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    )
                  })}
                {/* Persistent Long-form player overlay (wrapper only; YT mounts inside) */}
                <div ref={longsPlayerWrapperRef} className="absolute inset-0 w-full h-full z-30 rounded-2xl overflow-hidden" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <div className="pt-24">
        <AIToolsSection />
      </div>

      {/* CTA Banner - Full width, flush to footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <div className="bg-gradient-to-r from-neutral-700 to-neutral-800 p-16 md:p-20 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to create standout <span className="font-inria italic text-primary">content?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's turn ideas into standout episodes and scroll-stopping shorts.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

