'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Palette, Handshake, TrendingUp, Rocket } from 'lucide-react'

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

const values = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "We believe in pushing creative boundaries to tell stories that captivate and inspire audiences across all platforms."
  },
  {
    icon: Handshake,
    title: "Authentic Partnerships",
    description: "We build genuine relationships with our clients, becoming true extensions of their teams and understanding their unique voices."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description: "Every creative decision is backed by insights and measured for maximum impact, ensuring your content drives real business growth."
  },
  {
    icon: Rocket,
    title: "Continuous Innovation",
    description: "We stay ahead of trends and technologies to keep our clients at the forefront of digital storytelling and content creation."
  }
]

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
              About <span className="font-inria italic text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              We're a creative-first agency shaped by content, technology, and a relentless drive 
              to build meaningful stories that resonate and inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
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
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                  Our <span className="font-inria italic text-primary">Story</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-primary-dark">Limitless Grit</strong> began as something 
                    simple yet powerful - a podcast exploring the intersection of creativity, technology, 
                    and storytelling. What started as conversations about meaningful content creation 
                    naturally evolved into something much bigger.
                  </p>
                  
                  <p>
                    Founded by <strong className="text-primary-dark">Shristi</strong> and <strong className="text-primary-dark">Jugal</strong>, 
                    our journey from podcast to full-service creative agency has been driven by one core belief: 
                    that every brand has a unique story worth telling, and technology should amplify, not replace, 
                    human creativity.
                  </p>
                  
                  <p>
                    Today, we're a focused studio specializing in video editing, branding, AI-integrated 
                    creative services, and web development. We collaborate with founders, creators, and 
                    early-stage teams to develop high-quality, high-impact content that moves fast without 
                    losing clarity or soul.
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
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">From Podcast to Agency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
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
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
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
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Our <span className="font-inria italic text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and creative choice we make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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
              Ready to work{' '}
              <span className="font-inria italic">together?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's start a conversation about how we can help simplify your content creation 
              and amplify your brand's unique story.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
