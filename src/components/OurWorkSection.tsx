'use client'

import { motion } from 'framer-motion'

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
  return (
    <section className="pt-32 pb-0 bg-white">
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

        {/* Shorts Row */}
        <section className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-primary-dark mb-12 text-center"
          >
            Shorts
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos
              .filter((v) => v.kind === 'Short')
              .slice(0, 3)
              .map((video, index) => (
                <motion.div
                  key={`short-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 ease-out hover:scale-[1.02] will-change-transform"
                >
                  <div className={`${video.aspectClass} w-full relative`}>
                    <iframe
                      className="w-full h-full"
                      src={video.embedUrl}
                      title={`Short ${index + 1}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-200 ease-out"></div>
                  </div>
                  <div className="px-2 py-3 text-center">
                    <p className="text-sm text-gray-600 font-medium">Short {index + 1}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Long-Form Row */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-primary-dark mb-12 text-center"
          >
            Long-Form
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos
              .filter((v) => v.kind === 'Long-Form')
              .slice(0, 2)
              .map((video, index) => (
                <motion.div
                  key={`long-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 ease-out hover:scale-[1.02] will-change-transform"
                >
                  <div className={`${video.aspectClass} w-full relative`}>
                    <iframe
                      className="w-full h-full"
                      src={video.embedUrl}
                      title={`Long-Form ${index + 1}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-200 ease-out"></div>
                  </div>
                  <div className="px-2 py-3 text-center">
                    <p className="text-sm text-gray-600 font-medium">Episode {index + 1}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

      </div>

      {/* CTA Banner - Full width, flush to footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <div className="bg-gradient-to-r from-primary to-secondary p-16 md:p-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left">
                <h4 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-[0.01em] mb-2">
                  Ready to create standout <span className="font-inria italic">content?</span>
                </h4>
                <p className="text-base md:text-lg opacity-90">
                  Let’s turn your ideas into memorable episodes and scroll-stopping shorts.
                </p>
              </div>
              <a href="/contact" className="inline-block bg-white text-primary hover:bg-gray-50 px-10 md:px-12 py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
