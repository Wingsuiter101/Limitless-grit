'use client'

import { motion } from 'framer-motion'
import { Video, Headphones, Smartphone, Image } from 'lucide-react'

const processSteps = [
  {
    title: "Main Edit",
    description: "Built in DaVinci Resolve using multicam workflows, precision color grading, denoising, upscaling, and facial refinement. Every frame is sculpted for clarity, tone, and rhythm.",
    color: "bg-gray-100",
    textColor: "text-gray-900",
    image: Video
  },
  {
    title: "Audio Polishing", 
    description: "Using Audition or Fairlight, we isolate noise, apply parametric EQ, and normalize to exact platform specs. The goal is transparency — sound that feels effortless yet engineered.",
    color: "bg-primary",
    textColor: "text-white",
    image: Headphones
  },
  {
    title: "Shorts",
    description: "Crafted with After Effects and enhanced by AI. We deploy motion graphics, auto-captioning via CapCut, and generative audio from Suno to create compact, high-performance edits.",
    color: "bg-gray-700",
    textColor: "text-white",
    image: Smartphone
  },
  {
    title: "Thumbnail",
    description: "Composed in Photoshop, extended through Flux and Sora. From stylized portraits to conceptual scenes, each visual is calibrated for immediate recognition and long-term recall.",
    color: "bg-gray-200",
    textColor: "text-gray-900",
    image: Image
  }
]

export default function EditingProcessSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Editing{' '}
            <span className="font-inria italic text-primary">Process</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Every piece of content goes through our refined four-stage process, ensuring 
            maximum quality and platform optimization from start to finish.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${step.color} ${step.textColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.image className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    step.textColor === 'text-white' ? 'opacity-90' : 'opacity-80'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Visual element for the process flow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="w-1 h-8 bg-primary rounded-full"
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to see our process{' '}
              <span className="font-inria italic">in action?</span>
            </h3>
            <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              From raw footage to polished content that drives engagement - 
              let us show you what our refined process can do for your brand.
            </p>
            <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

