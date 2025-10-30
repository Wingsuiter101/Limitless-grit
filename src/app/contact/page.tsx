'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <video
          src={`${basePath}/contact-loop.mp4`}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-primary-dark mb-6">
              Let's <span className="font-inria italic text-primary">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Tell us about your project and goals. We'll get back within 24 hours with the best next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section removed per request */}

      {/* Premium Email Badge */}
      <section className="pt-20 md:pt-32 pb-36 md:pb-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                <a href="mailto:hello@limitlessgrit.com" className="group">
                  <motion.span 
                    className="absolute -inset-8 rounded-[999px] bg-gradient-to-r from-primary/30 to-primary/10 blur-3xl opacity-70"
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  ></motion.span>
                  <span className="relative block rounded-[999px] p-[3px] bg-white shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
                    <span className="relative flex items-center gap-5 md:gap-7 rounded-[999px] bg-primary px-10 md:px-20 lg:px-24 py-6 md:py-8 lg:py-10 transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden">
                      <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </span>
                      <span className="hidden md:inline text-xs font-semibold tracking-wider uppercase text-white/80">Email Us</span>
                      <span className="flex items-baseline">
                        <span className="text-2xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">hello@</span>
                        <span className="text-3xl md:text-6xl lg:text-7xl font-inria italic tracking-tight text-white">limitlessgrit.com</span>
                      </span>
                      {/* sheen over entire pill */}
                      <motion.span 
                        className="pointer-events-none absolute -inset-2 rounded-[999px]"
                        initial={{ x: '-120%' }}
                        animate={{ x: ['-120%', '120%'] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)' }}
                      />
                    </span>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 mt-6 text-sm"
          >
            We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 py-24 md:py-32 bg-gradient-to-r from-neutral-700 to-neutral-800 flex flex-col justify-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-inria italic text-white leading-relaxed"
          >
            “Marketing is no longer about the stuff that you make, but about the <span className="text-primary">stories you tell</span>.”
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-300 font-semibold"
          >
            — Seth Godin
          </motion.p>
        </div>
      </motion.section>
      <Footer />
    </main>
  )
}
