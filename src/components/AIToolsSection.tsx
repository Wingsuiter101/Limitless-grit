'use client'

import { motion } from 'framer-motion'
import { Zap, Clapperboard, ImageIcon, AudioWaveform } from 'lucide-react'

const capabilities = [
  {
    icon: Zap,
    title: 'AI-Powered Editing',
    description:
      'We leverage AI to accelerate the editing process, identifying the most compelling moments, removing silences, and ensuring a seamless flow.',
  },
  {
    icon: Clapperboard,
    title: 'Generative Video',
    description:
      'From creating b-roll to generating entire scenes, we use generative AI to produce unique video content that would be impossible with traditional methods.',
  },
  {
    icon: ImageIcon,
    title: 'AI Image Generation',
    description:
      'We create stunning, custom thumbnails, social media assets, and in-video graphics using state-of-the-art AI image generation models.',
  },
  {
    icon: AudioWaveform,
    title: 'Enhanced Audio',
    description:
      'Our AI tools can clean up audio, remove background noise, and even clone voices for seamless ad-reads or corrections, ensuring crystal-clear sound.',
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark">
            AI <span className="font-inria italic text-primary">Capabilities</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We integrate the latest AI technologies to push the boundaries of creativity and efficiency in content production.
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
              <h3 className="text-xl font-bold text-primary-dark mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

