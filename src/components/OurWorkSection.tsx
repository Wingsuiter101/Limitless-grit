'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
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
    { id: 'ZZgX3-Ep9YY', title: 'Short 1' },
    { id: 't58yCZzzfOc', title: 'Short 2' },
    { id: '9LPIIrAS3G', title: 'Short 3' },
    { id: 'M8ioFOt5R4k', title: 'Short 4' }
  ]

  const longFormVideos = [
    { id: 'o7Asyo9s2_M', title: 'The Truth About Hard Work' },
    { id: 'Dou3EjQBpuM', title: 'Navigating Your 20s' },
    { id: 'XvtuW0UN4aA', title: 'The Power of Story' },
    { id: 'jnbxMCmpyj8', title: 'Embracing Change' }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDraggingShorts, setIsDraggingShorts] = useState(false)
  const shortsAutoPlayRef = useRef<NodeJS.Timeout | null>(null)
  
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
      }, 5000)
    }

    if (!isDraggingShorts) {
      startAutoPlay()
    }

    return () => {
      if (shortsAutoPlayRef.current) {
        clearInterval(shortsAutoPlayRef.current)
      }
    }
  }, [isDraggingShorts])

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
    }
    setIsDraggingShorts(false)
  }

  const [longFormActiveIndex, setLongFormActiveIndex] = useState(0)
  const [isDraggingLongForm, setIsDraggingLongForm] = useState(false)
  const longFormAutoPlayRef = useRef<NodeJS.Timeout | null>(null)
  
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
      }, 5000)
    }

    if (!isDraggingLongForm) {
      startAutoPlay()
    }

    return () => {
      if (longFormAutoPlayRef.current) {
        clearInterval(longFormAutoPlayRef.current)
      }
    }
  }, [isDraggingLongForm])

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
    }
    setIsDraggingLongForm(false)
  }

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

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  {shorts.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to short ${idx + 1}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 w-3.5'
                      }`}
                    />
                  ))}
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
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${shorts[activeIndex].id}?modestbranding=1&rel=0&controls=1`}
                            title={`YouTube Short ${activeIndex + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.id}?modestbranding=1&rel=0&controls=1`}
                            title={`YouTube Short ${item.rel + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        )}
                      </motion.div>
                    )
                  })}
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

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  {longFormVideos.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to video ${idx + 1}`}
                      onClick={() => setLongFormActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === longFormActiveIndex ? 'bg-primary w-8' : 'bg-gray-300 w-3.5'
                      }`}
                    />
                  ))}
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
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.id}?modestbranding=1&rel=0&controls=1`}
                            title={`YouTube Video ${longFormActiveIndex + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
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
              Let’s turn ideas into standout episodes and scroll-stopping shorts.
            </p>
            <a href="/contact" className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Project
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
