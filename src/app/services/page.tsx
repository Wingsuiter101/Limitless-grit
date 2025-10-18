'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Video, Headphones, Smartphone, Image, Check } from 'lucide-react'
import Footer from '@/components/Footer'

const editingProcess = [
  {
    icon: Video,
    title: "Main Edit",
    description: "Built in DaVinci Resolve using multicam workflows, precision color grading, denoising, upscaling, and facial refinement.",
    tools: ["DaVinci Resolve", "Color Grading", "Audio Sync", "Multi-cam Editing"]
  },
  {
    icon: Headphones,
    title: "Audio Polishing",
    description: "Using Audition or Fairlight, we isolate noise, apply parametric EQ, and normalize to exact platform specs.",
    tools: ["Adobe Audition", "Fairlight", "Noise Reduction", "EQ Balancing"]
  },
  {
    icon: Smartphone,
    title: "Shorts Creation",
    description: "Crafted with After Effects and enhanced by AI. Motion graphics, auto-captioning, and generative audio.",
    tools: ["After Effects", "CapCut", "Suno AI", "Motion Graphics"]
  },
  {
    icon: Image,
    title: "Thumbnail Design",
    description: "Composed in Photoshop, extended through Flux and Sora. Stylized portraits to conceptual scenes.",
    tools: ["Photoshop", "Flux", "Sora", "Visual Design"]
  }
]

const whatYouGet = [
  "Long-Form Podcast Production",
  "Custom Podcast Episode Thumbnails",
  "Social Clips Identification",
  "Custom intro for each episode",
  "Weekly one on one content strategy",
  "Audio engineering"
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-36 pb-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-primary-dark mb-6">
              Our <span className="font-inria italic text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              A refined four-stage production process that transforms raw content into 
              polished podcasts, engaging shorts, and scroll-stopping visuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-36 pb-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
              Our Production{' '}
              <span className="font-inria italic text-primary">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of content goes through our refined four-stage process, 
              ensuring maximum quality and platform optimization.
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {editingProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                style={{ zIndex: 1 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {step.tools.map((tool, idx) => (
                    <div key={idx} className="text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mr-2">
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-36 pb-48 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
              What You{' '}
              <span className="font-inria italic text-primary">Get</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive package designed to elevate your podcast presence 
              and maximize your content's impact across all platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {whatYouGet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <p className="text-lg font-semibold text-primary-dark">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary p-16 md:p-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-left">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-[0.01em] mb-2">
                  Ready to elevate your <span className="font-inria italic">content?</span>
                </h2>
                <p className="text-base md:text-lg opacity-90">
                  Let's discuss how our services can help simplify your content creation 
                  and amplify your brand's digital presence.
                </p>
              </div>
              <Link href="/contact">
                <button className="inline-block bg-white text-primary hover:bg-gray-50 px-10 md:px-12 py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </main>
  )
}
