'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const clientResults = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CEO at TechCorp",
    image: "SC",
    result: "How she grew 500+ leads to Jesse Pujji's portfolio companies and grew Net Revenue by 50% subscribers.",
    metrics: "500+ leads, 50% revenue growth"
  },
  {
    id: 2,
    name: "Michael Foster",
    title: "Founder at MedVision",
    image: "MF", 
    result: "From 0 LinkedIn following to Top LinkedIn Influencer $2M+ 2021.",
    metrics: "Top LinkedIn Influencer, $2M raised"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "CMO at SustainableCo",
    image: "LR",
    result: "From 100 to 10K LinkedIn Followers and 6K+ Monthly Audience for her brand from being a startup founder.",
    metrics: "10K LinkedIn followers, 6K monthly audience"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Former Uber Manager",
    image: "DK",
    result: "How native former Uber Manager Uber got promoted to the most successful in house lead.",
    metrics: "Promoted to lead position"
  },
  {
    id: 5,
    name: "Emma Watson",
    title: "Newsletter Subscribers",
    image: "EW",
    result: "How we doubled Sam Parr's Newsletter Subscribers to just 3 months.",
    metrics: "Doubled newsletter subscribers"
  },
  {
    id: 6,
    name: "James Park",
    title: "LinkedIn influence",
    image: "JP",
    result: "How we helped Rand Fishkin generate 94M UGC of relevant reach after 6 weeks of supporting his Linkedin and thought content.",
    metrics: "94M reach in 6 weeks"
  },
  {
    id: 7,
    name: "Alex Thompson",
    title: "Brand Development",
    image: "AT",
    result: "How to build a brand over demand gen engine on LinkedIn.",
    metrics: "Built demand gen engine"
  },
  {
    id: 8,
    name: "Rachel Green",
    title: "Startup Competitions",
    image: "RG",
    result: "Frederik Pack decided to not a startup competition. We found him just $5M Series A.",
    metrics: "Secured $5M Series A"
  }
]

const socialTestimonials = [
  {
    id: 1,
    author: "Amy Park",
    handle: "@amypark",
    avatar: "AP",
    content: "Just got done reading Shristi's latest post on content strategy. Her framework for personal brand building is incredibly actionable. Can't wait to implement these strategies!",
    likes: "127",
    platform: "LinkedIn"
  },
  {
    id: 2,
    author: "Tim Edwards",
    handle: "@timedwards",
    avatar: "TE", 
    content: "Working with @limitlessgrit has been a game changer for our content. They understand how to balance authenticity with strategy. Highly recommended!",
    likes: "89",
    platform: "LinkedIn"
  },
  {
    id: 3,
    author: "Jenny Wu",
    handle: "@jennywu",
    avatar: "JW",
    content: "Attending Jugal's talk on AI-powered content creation today. The insights about maintaining human connection while leveraging AI tools were spot on.",
    likes: "156",
    platform: "LinkedIn"
  },
  {
    id: 4,
    author: "Nina Rogers",
    handle: "@ninarogers",
    avatar: "NR",
    content: "The personal brand workshop by Limitless Grit was incredible. Finally have clarity on my content strategy and brand positioning. Thank you!",
    likes: "203",
    platform: "LinkedIn"
  },
  {
    id: 5,
    author: "Alex Garcia",
    handle: "@alexgarcia",
    avatar: "AG",
    content: "Limitless Grit doesn't just create content - they help you find your authentic voice. The difference in engagement has been remarkable.",
    likes: "134",
    platform: "LinkedIn"
  },
  {
    id: 6,
    author: "Sam Turner",
    handle: "@samturner",
    avatar: "ST",
    content: "Their AI-first approach to content creation is revolutionary. They're not replacing creativity, they're amplifying it. Brilliant work from the team.",
    likes: "178",
    platform: "LinkedIn"
  }
]

export default function CaseStudiesPage() {
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
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
              Case Studies
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-dark mb-8 leading-tight">
              Real clients, real results, real{' '}
              <span className="font-inria italic text-primary">case studies.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Here's how we've helped founders and executives build their 
              personal brands and generate demand through content & 
              community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Results Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientResults.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Client Photo */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary font-bold text-xl">{client.image}</span>
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary-dark mb-1">
                      {client.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {client.title}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {client.result}
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Key Results
                      </span>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-primary-dark font-medium text-sm mt-1">
                      {client.metrics}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Customer Testimonials
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Stories From Brand Builders{' '}
              <span className="font-inria italic text-primary">We've Empowered</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked glimpses of stories from our network about our responsive to build 
              game-changing personal brands on LinkedIn.
            </p>
          </motion.div>

          {/* Social Media Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialTestimonials.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Post Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{post.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-dark text-sm">
                      {post.author}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {post.handle} • {post.platform}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* Post Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>❤️ {post.likes}</span>
                    <span>Share</span>
                  </div>
                  <div className="text-xs text-primary font-medium">
                    View on {post.platform}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to become our next{' '}
              <span className="font-inria italic">success story?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your brand's digital presence 
              and create content that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Project
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Schedule a Call
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
