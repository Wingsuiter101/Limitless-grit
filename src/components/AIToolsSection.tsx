'use client'

import { motion } from 'framer-motion'
import { Video, Drama, Music, Film, Sparkles, Headphones } from 'lucide-react'

const aiTools = [
  {
    name: "KlingAI",
    description: "Cinematic video generation",
    logo: Video
  },
  {
    name: "Google Veo 3",
    description: "Concept-to-frame storytelling",
    logo: Drama
  },
  {
    name: "Suno",
    description: "Dynamic audio creation",
    logo: Music
  },
  {
    name: "DaVinci Resolve",
    description: "Professional video editing",
    logo: Film
  },
  {
    name: "After Effects",
    description: "Motion graphics & VFX",
    logo: Sparkles
  },
  {
    name: "Audition",
    description: "Audio post-production",
    logo: Headphones
  }
]

export default function AIToolsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
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
              <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight">
                Leveraging{' '}
                <span className="font-inria italic text-primary">AI</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We leverage cutting-edge AI tools to supercharge our creative pipeline. From ideation to final 
                delivery. Our toolkit includes but is not limited to: KlingAI for cinematic video, Google Veo for 
                concept-to-frame storytelling, Suno for dynamic audio, and a growing roster of generative and 
                assistive platforms that help us move fast without compromising on craft.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Process
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - AI Tools Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tool.logo className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary/30 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

