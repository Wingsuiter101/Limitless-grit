'use client'

import { motion } from 'framer-motion'
import { Scissors, Bot, BarChart3, Monitor } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: "Content Alchemy",
    description: "Short-form & long form edits with intention. We shape podcasts, reels, and shorts into scroll-stopping stories built to resonate across platforms."
  },
  {
    icon: Bot,
    title: "AI-Led Creation",
    description: "We harness AI tools to accelerate production without losing personality. Think faster turnarounds, deeper ideation, and more dynamic outputs."
  },
  {
    icon: BarChart3,
    title: "Brand Intelligence",
    description: "We define the essentials so your brand shows up clearly and consistently. That means copies that land, messaging that sticks, and guides you can actually use."
  },
  {
    icon: Monitor,
    title: "Web & Digital Build",
    description: "We design and ship beautiful, performant websites/apps using Next.js, Tailwind, and Sanity. Modular, scalable, and built with you in mind."
  }
]

export default function ContentSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Services
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight">
                What we{' '}
                <span className="font-inria italic text-primary">deliver</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From content creation to AI-powered production, brand strategy to web development - 
                we offer a comprehensive suite of services designed to amplify your digital presence 
                and build meaningful connections with your audience.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Content
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main content showcase */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96">
                <div className="bg-white rounded-xl p-6 h-full shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                      <div>
                        <div className="h-3 bg-gray-300 rounded w-24 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-secondary rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-32 bg-primary/20 rounded-lg mt-6"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-light rounded-full opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
