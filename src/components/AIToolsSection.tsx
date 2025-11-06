'use client'

import { motion } from 'framer-motion'
import { Zap, Clapperboard, ImageIcon, AudioWaveform } from 'lucide-react'

const capabilities = [
  {
    icon: Zap,
    title: 'Precision Editing',
    description:
      'We identify the most compelling moments, remove silences, and ensure seamless flow, accelerated by AI to deliver faster without compromising quality.',
  },
  {
    icon: Clapperboard,
    title: 'Dynamic Visuals',
    description:
      'From custom b-roll to entire scenes, we produce unique video content that enhances your narrative using generative tools to create what traditional methods can\'t.',
  },
  {
    icon: ImageIcon,
    title: 'Visual Assets',
    description:
      'Custom thumbnails, social media assets, and in-video graphics designed to capture attention and drive engagement, powered by advanced image generation.',
  },
  {
    icon: AudioWaveform,
    title: 'Professional Audio',
    description:
      'Crystal-clear sound that elevates your content. We clean up audio, remove background noise, and ensure consistent quality, enhanced by AI audio tools.',
  },
]

export default function AIToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-primary-dark">
            AI <span className="font-medium text-primary">Capabilities</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Studio-quality content, delivered faster with AI-powered tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block bg-primary text-white p-4 rounded-full mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-primary-dark mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

