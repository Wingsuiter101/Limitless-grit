'use client'

import { motion } from 'framer-motion'
import { Palette, Handshake, TrendingUp, Star, Rocket } from 'lucide-react'

const principles = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "We believe in pushing creative boundaries to tell stories that captivate and inspire."
  },
  {
    icon: Handshake,
    title: "Authentic Partnerships", 
    description: "We build genuine relationships with our clients, becoming true extensions of their teams."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every creative decision is backed by insights and measured for maximum impact."
  },
  {
    icon: Star,
    title: "Continuous Innovation",
    description: "We stay ahead of trends and technologies to keep our clients at the forefront."
  }
]

const achievements = [
  { metric: "12.5M+", label: "Shorts/Reels Views Generated" },
  { metric: "18%", label: "Avg. Watch Time Lift" },
  { metric: "3.2x", label: "Engagement vs. Baseline" },
  { metric: "+42k", label: "YouTube Subscribers Added" }
]

export default function CreatorCompany() {
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
                Our Philosophy
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight">
                A Creator-First{' '}
                <span className="font-inria italic text-primary">Company</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're not just another agency. We're creators at heart, building 
                authentic brands through innovative storytelling and strategic partnerships 
                that drive real business results.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">
                      {principle.description}
                    </p>
                  </div>
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
                Partner With Us
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
            {/* Main image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">Creator Workspace</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                  <div>
                    <div className="h-2 bg-gray-300 rounded w-16 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                  <div>
                    <div className="h-2 bg-gray-300 rounded w-20 mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Impact by the{' '}
              <span className="font-inria italic">Numbers</span>
            </h3>
            <p className="text-xl opacity-90">
              Our commitment to creator success translates into measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.metric}
                </div>
                <div className="text-lg opacity-90">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
