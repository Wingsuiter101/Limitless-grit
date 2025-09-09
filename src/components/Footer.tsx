'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  Services: [
    'Brand Strategy',
    'Content Creation',
    'Growth Marketing',
    'Video Production',
    'Analytics & Insights'
  ],
  Company: [
    'About Us',
    'Our Team',
    'Careers',
    'Press',
    'Contact'
  ],
  Resources: [
    'Blog',
    'Case Studies',
    'Whitepapers',
    'Webinars',
    'Tools'
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'GDPR',
    'Accessibility'
  ]
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Limitless <span className="font-inria italic text-primary">Grit</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Empowering visionary leaders and companies to unlock their potential 
                  through transformative brand storytelling and strategic growth.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href="mailto:hello@limitlessgrit.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@limitlessgrit.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300">
                    New York, NY • Los Angeles, CA
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Follow our journey</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold mb-6 text-white">
                      {category}
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-primary transition-colors duration-300"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay ahead of the{' '}
                <span className="font-inria italic text-primary">curve</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest insights on brand building, content strategy, 
                and growth tactics delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-8 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Limitless Grit. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <span>Made with ❤️ for creators everywhere</span>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-white">Next.js</span>
                  <span>•</span>
                  <span className="font-bold text-white">Tailwind</span>
                  <span>•</span>
                  <span className="font-bold text-white">Sanity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
