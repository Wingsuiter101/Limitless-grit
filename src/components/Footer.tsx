'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shristigajurel/' },
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
                <div className="relative w-20 h-20 md:w-14 md:h-14">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/limitless-monogram.png`}
                    alt="Limitless Grit Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 56px"
                  />
                </div>
                <div className="relative w-40 h-8 md:w-44 md:h-8">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/limitless-logo-text.png`}
                    alt="Limitless Grit"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 176px"
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
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider md:mt-3">Contact</h4>
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
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider md:mt-3">Pages</h4>
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
              <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wider md:mt-3">Legal</h4>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 hover:ring-2 hover:ring-white/20"
                    aria-label={social.name}
                  >
                    {/* Solid LinkedIn Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
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
                  <span className="font-medium text-white">Next.js</span>
                  <span>•</span>
                  <span className="font-medium text-white">Tailwind</span>
                  <span>•</span>
                  <span className="font-medium text-white">Sanity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
