'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: "Jugal Sheth",
    role: "Marketing Head",
    specialty: "Strategic Growth",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Shristi Sheth",
    role: "Content Lead/Creative Head",
    specialty: "Content Strategy",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Saurav Dhungana",
    role: "Editor Designer",
    specialty: "Visual Creation",
    image: "/api/placeholder/300/400"
  }
]

export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
            Our <span className="font-inria italic text-primary">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the creative minds behind Limitless Grit - a passionate team dedicated to 
            simplifying content creation and building impactful personal brands for leaders across industries.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6">
                {/* Placeholder for team member photo */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-primary-dark/5 flex items-center justify-center group-hover:bg-primary-dark/10 transition-colors duration-300">
                    <span className="text-gray-400 text-sm">Team Photo</span>
                  </div>
                </div>
                
                {/* Specialty badge */}
                <div className="absolute -bottom-3 left-4 right-4 bg-white rounded-full py-2 px-4 shadow-lg">
                  <p className="text-primary font-semibold text-sm text-center">
                    {member.specialty}
                  </p>
                </div>
              </div>

              <div className="text-center pt-4">
                <h4 className="text-xl font-bold text-primary-dark mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Ready to transform your{' '}
              <span className="font-inria italic text-primary">personal brand?</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of leaders who have discovered their unique voice 
              and amplified their impact with our proven methodology.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
