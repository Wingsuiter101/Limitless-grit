'use client'

import { motion } from 'framer-motion'

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for image - replace with actual image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-primary-dark/10 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Professional Photo</span>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Company Intro
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
                A Creative-First{' '}
                <span className="font-inria italic text-primary">Agency</span>
              </h3>
              
              <div className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  <strong>Limitless Grit</strong> is a creative-first agency shaped by content, technology, 
                  and a relentless drive to build meaningful stories.
                </p>
                <p>
                  Founded by <strong>Shristi</strong> and <strong>Jugal</strong>, the agency began as a podcast 
                  and naturally evolved into a focused studio for video editing, branding, and AI-integrated creative services.
                </p>
                <p>
                  With a strong foundation in both media and tech, we collaborate with founders, creators, and 
                  early-stage teams to develop high-quality, high-impact content that moves fast without losing 
                  clarity or soul.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-dark">Shristi Sheth</p>
                  <p className="text-gray-500">Content Lead / Creative Head</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              {/* Stats removed as requested */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
