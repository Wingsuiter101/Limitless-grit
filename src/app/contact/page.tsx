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

      {/* Get In Touch cards */}
      <section className="pt-8 md:pt-24 pb-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-12"
          >
            Get In <span className="font-inria italic text-primary">Touch</span>
          </motion.h2>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">Email Us</h3>
                  <p className="text-primary font-medium">hello@limitlessgrit.com</p>
                  <p className="text-sm text-gray-600 mt-1">We'll get back to you within 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <a href="YOUR_CALENDLY_LINK_HERE" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">Book a Meeting</h3>
                  <p className="text-primary font-medium">Schedule a Discovery Call</p>
                  <p className="text-sm text-gray-600 mt-1">Find a time that works for you</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-36 pb-48 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              Start Your <span className="font-inria italic text-primary">Project</span>
            </h2>
            <p className="text-gray-600 mt-3">Fill out the form and we'll prepare next steps for you.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">Full Name *</label>
                  <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">Email *</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="your.email@company.com" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">Company</label>
                  <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your company" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">Your Role</label>
                  <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="CEO, CMO, Founder..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">Service Interest *</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Content Alchemy</option>
                  <option>AI-Led Creation</option>
                  <option>Brand Intelligence</option>
                  <option>Web & Digital Build</option>
                  <option>Video Production</option>
                  <option>Brand Strategy</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-2">Project Details *</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Tell us about goals, timelines, and success criteria" required />
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-shadow shadow-lg hover:shadow-xl">
                Send Project Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
