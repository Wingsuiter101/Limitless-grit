'use client'

import { motion } from 'framer-motion'
import React from 'react'

const testimonials = [
  {
    name: "Lisa Thompson",
    role: "Tech Entrepreneur",
    company: "InnovateTech",
    quote: "They transformed our brand story from generic to genuinely compelling. Our engagement rates tripled within months.",
    videoThumbnail: "/api/placeholder/400/300"
  },
  {
    name: "Michael Foster",
    role: "Business Consultant",
    company: "Foster & Associates",
    quote: "The strategic approach to content creation has been game-changing for my personal brand and client acquisition.",
    videoThumbnail: "/api/placeholder/400/300"
  },
  {
    name: "Amanda Rivera",
    role: "Healthcare Leader",
    company: "MedVision Group",
    quote: "Working with this team elevated our thought leadership and positioned us as industry innovators.",
    videoThumbnail: "/api/placeholder/400/300"
  }
]

export default function VideoTestimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
            We make sure we build every
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-primary-dark mb-8">
            brand on a solid{' '}
            <span className="font-inria italic text-primary">foundation.</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from leaders who have transformed their brands and 
            achieved remarkable growth through our strategic approach.
          </p>
        </motion.div>

        {/* Single Testimonial Carousel */}
        <SingleTestimonialCarousel />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to share your{' '}
              <span className="font-inria italic">success story?</span>
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join these successful leaders and start building your brand 
              on a foundation that drives real results.
            </p>
            <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SingleTestimonialCarousel() {
  const [index, setIndex] = React.useState(0)
  const total = testimonials.length
  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  const t = testimonials[index]

  return (
    <div className="relative max-w-4xl mx-auto">
      <button
        onClick={prev}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-primary-dark p-3 rounded-full shadow-lg border border-black/5 z-10"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-primary-dark p-3 rounded-full shadow-lg border border-black/5 z-10"
        aria-label="Next"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>

      <motion.div
        key={index}
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -24, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 250, damping: 24 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="p-8">
          <blockquote className="text-gray-600 mb-6 leading-relaxed text-lg">"{t.quote}"</blockquote>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{t.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div>
              <p className="font-semibold text-primary-dark">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <p className="text-primary text-sm font-medium">{t.company}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-primary scale-125 shadow' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}
