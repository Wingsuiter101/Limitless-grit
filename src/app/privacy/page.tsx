'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
              Privacy <span className="font-inria italic text-primary">Policy</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-12 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto prose prose-lg"
        >
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                At Limitless Grit, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Fill out contact forms</li>
                    <li>Request information about our services</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage with us through email or other communication channels</li>
                  </ul>
                  <p className="mt-2 leading-relaxed">
                    This information may include your name, email address, company name, phone number, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services and updates</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and optimize user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Information Sharing and Disclosure
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering our services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Your Rights
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  To exercise these rights, please contact us at <a href="mailto:hello@limitlessgrit.com" className="text-primary hover:underline">hello@limitlessgrit.com</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:hello@limitlessgrit.com" className="text-primary hover:underline font-medium">hello@limitlessgrit.com</a></p>
                <p>Location: New York, NY</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

