'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: "Shristi Sheth",
    role: "Content Lead / Creative Head",
    bio: "Shristi is the creative visionary behind Limitless Grit's content strategy. With a keen eye for storytelling and brand development, she ensures every piece of content resonates with authenticity and purpose.",
    expertise: ["Content Strategy", "Brand Development", "Creative Direction", "Storytelling"],
    image: "SS"
  },
  {
    name: "Jugal Sheth",
    role: "Marketing Head",
    bio: "Jugal brings strategic marketing expertise and business acumen to the team. He focuses on growth initiatives, client relationships, and ensuring our creative work drives real business results.",
    expertise: ["Marketing Strategy", "Business Development", "Client Relations", "Growth Planning"],
    image: "JS"
  },
  {
    name: "Saurav Dhungana",
    role: "Editor Designer",
    bio: "Saurav is the technical wizard who brings our creative visions to life. With expertise in video editing and design, he ensures every project meets the highest quality standards.",
    expertise: ["Video Editing", "Motion Graphics", "Visual Design", "Post-Production"],
    image: "SD"
  }
]

// Values section removed per request

const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started as a podcast exploring creative storytelling and brand development"
  },
  {
    year: "2021", 
    title: "Evolution",
    description: "Naturally evolved into a focused studio for video editing and branding services"
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Pioneered the integration of AI tools into our creative workflow for enhanced efficiency"
  },
  {
    year: "2023",
    title: "Full Service",
    description: "Expanded to offer comprehensive creative services including web development and brand intelligence"
  },
  {
    year: "2024",
    title: "Limitless Growth",
    description: "Established as a leading creative-first agency with a focus on simplifying content creation"
  }
]

export default function AboutPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <video
          src={`${basePath}/about-loop.mp4`}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-primary-dark mb-6">
              About <span className="font-inria italic text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              We are a creative-first agency powered by AI, technology, and storytelling that connects, resonates, and inspires action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pt-8 md:pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 text-center md:text-left">
                  Our <span className="font-inria italic text-primary">Story</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-primary-dark">Limitless Grit</strong> began with a simple yet powerful focus: exploring the intersection of creativity and technology. What started as conversations about meaningful content creation naturally evolved into a creative-first agency powered by AI, technology, and storytelling.
                  </p>
                  
                  <p>
                    Founded by <strong className="text-primary-dark">Shristi</strong> and <strong className="text-primary-dark">Jugal</strong>, our journey has been driven by one core belief: that every brand has a unique story worth telling, and technology should amplify, not replace, human creativity to craft narratives that connect, resonate, and inspire action.
                  </p>
                  
                  <p>
                    Today, we're a focused studio specializing in video editing, branding, AI-integrated creative services, and web development. We collaborate with founders, creators, and early-stage teams to develop high-quality, high-impact content that moves fast without losing clarity or soul.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5]  rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/about-us.jpg`}
                  alt="Limitless Grit Team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-36 pb-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Our <span className="font-inria italic text-primary">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming a creative-first agency
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Mobile: left side, Desktop: center */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile & Desktop Layout */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center sm:mr-4 shrink-0">
                          <span className="text-white font-bold text-base sm:text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary-dark">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot - Mobile: left side, Desktop: center */}
                  <div className="absolute left-8 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full md:relative md:left-auto md:transform-none z-10"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section removed per request */}

      {/* CTA Section - Full width, no outer spacing */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary p-16 md:p-20 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to work <span className="font-inria italic">together?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's start a conversation about how we can help simplify your content creation 
              and amplify your brand's unique story.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
      <Footer />
    </main>
  )
}
