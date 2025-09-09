'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scissors, Bot, BarChart3, Monitor } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: "Content Alchemy",
    description: "Short-form & long form edits with intention. We shape podcasts, reels, and shorts into scroll-stopping stories built to resonate across platforms.",
    features: [
      "Podcast editing and production",
      "Social media content creation",
      "Long-form video editing",
      "Multi-platform optimization",
      "Story-driven content structure"
    ],
    process: "We start by understanding your brand voice and audience, then craft content that maintains authenticity while maximizing engagement across all platforms."
  },
  {
    icon: Bot,
    title: "AI-Led Creation",
    description: "We harness AI tools to accelerate production without losing personality. Think faster turnarounds, deeper ideation, and more dynamic outputs.",
    features: [
      "KlingAI for cinematic video",
      "Google Veo for storytelling",
      "Suno for dynamic audio",
      "AI-powered post-production",
      "Automated workflow optimization"
    ],
    process: "Our AI toolkit enhances human creativity rather than replacing it, allowing us to deliver higher quality content in shorter timeframes."
  },
  {
    icon: BarChart3,
    title: "Brand Intelligence",
    description: "We define the essentials so your brand shows up clearly and consistently. That means copies that land, messaging that sticks, and guides you can actually use.",
    features: [
      "Brand strategy development",
      "Messaging framework creation",
      "Visual identity guidelines",
      "Content style guides",
      "Market positioning analysis"
    ],
    process: "We dive deep into your brand's unique value proposition and create comprehensive guidelines that ensure consistent, impactful communication."
  },
  {
    icon: Monitor,
    title: "Web & Digital Build",
    description: "We design and ship beautiful, performant websites/apps using Next.js, Tailwind, and Sanity. Modular, scalable, and built with you in mind.",
    features: [
      "Next.js development",
      "Tailwind CSS styling",
      "Sanity CMS integration",
      "Responsive design",
      "Performance optimization"
    ],
    process: "From concept to deployment, we build digital experiences that not only look great but perform exceptionally across all devices and platforms."
  }
]

const editingProcess = [
  {
    title: "Main Edit",
    description: "Built in DaVinci Resolve using multicam workflows, precision color grading, denoising, upscaling, and facial refinement.",
    tools: ["DaVinci Resolve", "Color Grading", "Audio Sync", "Multi-cam Editing"]
  },
  {
    title: "Audio Polishing",
    description: "Using Audition or Fairlight, we isolate noise, apply parametric EQ, and normalize to exact platform specs.",
    tools: ["Adobe Audition", "Fairlight", "Noise Reduction", "EQ Balancing"]
  },
  {
    title: "Shorts Creation",
    description: "Crafted with After Effects and enhanced by AI. Motion graphics, auto-captioning, and generative audio.",
    tools: ["After Effects", "CapCut", "Suno AI", "Motion Graphics"]
  },
  {
    title: "Thumbnail Design",
    description: "Composed in Photoshop, extended through Flux and Sora. Stylized portraits to conceptual scenes.",
    tools: ["Photoshop", "Flux", "Sora", "Visual Design"]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gray-50">
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
              From content creation to AI-powered production, brand strategy to web development - 
              we offer comprehensive solutions for modern digital storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <service.icon className="w-6 h-6" />
                    <span className="font-semibold">Service {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">
                    {service.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary-dark">What's Included:</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-primary-dark mb-2">Our Approach:</h4>
                    <p className="text-gray-600">{service.process}</p>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                          <service.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary-dark">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Process */}
      <section className="py-20 px-6 bg-gray-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {editingProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
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
                    <div key={idx} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mr-2">
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to elevate your{' '}
              <span className="font-inria italic">content?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help simplify your content creation 
              and amplify your brand's digital presence.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Project
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
