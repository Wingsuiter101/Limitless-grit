'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand, Contact, Pages, Legal */}
          <div className="grid grid-cols-1 md:grid-cols-4 items-stretch md:items-start justify-items-center md:justify-items-start gap-10 md:gap-16 lg:gap-20 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="justify-self-center md:justify-self-start text-center md:text-left"
            >
              <Link href="/" className="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start gap-2 md:gap-3 mb-2">
                <div className="relative w-20 h-20 md:w-10 md:h-10">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/limitless-monogram.png`}
                    alt="Limitless Grit Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 40px"
                  />
                </div>
                <div className="relative w-40 h-8 md:w-32 md:h-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/limitless-logo-text.png`}
                    alt="Limitless Grit"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 128px"
                  />
                </div>
              </Link>
              <p className="text-gray-300 leading-relaxed text-center md:text-left mt-1 max-w-[22rem] md:max-w-none mx-auto md:mx-0">
                Simplifying content creation for visionary leaders and brands.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full flex flex-col items-center md:items-start text-center md:text-left space-y-3"
            >
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
              <a href="mailto:hello@limitlessgrit.com" className="block text-gray-300 hover:text-primary transition-colors">
                hello@limitlessgrit.com
              </a>
              <p className="text-gray-300">New York, NY</p>
            </motion.div>

            {/* Pages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="h-full flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Pages</h4>
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary hover:underline underline-offset-4 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="h-full flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary hover:underline underline-offset-4 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-between">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 hover:ring-2 hover:ring-white/20"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              {/* Removed caption for a cleaner look */}
            </div>
          </motion.div>
        </div>
      </div>

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
              © 2025 Limitless Grit. All rights reserved.
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
