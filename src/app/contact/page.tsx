'use client'

import { motion } from 'framer-motion'
import PricingSection from '@/components/PricingSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-gray-50 flex items-center justify-center px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-secondary rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary-light rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-6 leading-tight">
              Let's <span className="font-inria italic text-primary">Connect</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Tell us about your project and goals. We'll get back within 24 hours with the best next step.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <PricingSection />
      </section>

      {/* Get In Touch cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
            Get In <span className="font-inria italic text-primary">Touch</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
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
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.5a1 1 0 01.95.684l1.1 3.3a1 1 0 01-.27 1.046l-1.2 1.2a14.5 14.5 0 006.6 6.6l1.2-1.2a1 1 0 011.046-.27l3.3 1.1A1 1 0 0121 17.5V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">Call Us</h3>
                  <p className="text-primary font-medium">+1 (234) 567-8900</p>
                  <p className="text-sm text-gray-600 mt-1">Mon–Fri, 9AM–6PM EST</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">Book a Meeting</h3>
                  <p className="text-primary font-medium">Schedule a call with us</p>
                  <p className="text-sm text-gray-600 mt-1">We'll find the best time to chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              Start Your <span className="font-inria italic text-primary">Project</span>
            </h2>
            <p className="text-gray-600 mt-3">Fill out the form and we'll prepare next steps for you.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
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
          </div>
        </div>
      </section>
    </main>
  )
}
