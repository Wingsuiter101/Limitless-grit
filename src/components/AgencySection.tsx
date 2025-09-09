'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "We dive deep into your vision, values, and goals to create a comprehensive brand strategy that guides every decision.",
    features: ["Brand Positioning", "Market Analysis", "Competitive Research", "Value Proposition"]
  },
  {
    number: "02", 
    title: "Content Creation",
    description: "From thought leadership articles to engaging social content, we create compelling narratives that resonate with your audience.",
    features: ["Thought Leadership", "Social Content", "Video Production", "Copywriting"]
  },
  {
    number: "03",
    title: "Growth Acceleration",
    description: "We implement proven strategies to amplify your reach, increase engagement, and drive measurable business growth.",
    features: ["SEO Optimization", "Paid Campaigns", "Analytics & Insights", "Conversion Optimization"]
  },
  {
    number: "04",
    title: "Long-term Partnership",
    description: "We become an extension of your team, providing ongoing support and strategic guidance as your brand evolves.",
    features: ["Monthly Strategy Sessions", "Performance Reviews", "Continuous Optimization", "24/7 Support"]
  }
]

export default function AgencySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-primary-dark mb-8">
            We're more than just an{' '}
            <span className="font-inria italic text-primary">Agency.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're your strategic partners in building a brand that not only stands out 
            but drives meaningful business results and lasting impact in your industry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gray-50 hover:bg-gray-100 rounded-3xl p-8 transition-all duration-300 group-hover:shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">
                        {service.number}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
