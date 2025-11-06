'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
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
            <h1 className="text-5xl md:text-6xl font-medium text-primary-dark mb-6">
              Terms of <span className="text-primary">Service</span>
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
                Welcome to Limitless Grit. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Limitless Grit provides creative services including but not limited to video editing, content strategy, content production, branding, and web development. The specific services provided will be outlined in individual project agreements or statements of work.
              </p>
            </div>

            {/* Use of Services */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Use of Services
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to any portion of our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-xl font-medium text-primary-dark mb-2">Our Content</h3>
                  <p className="leading-relaxed">
                    All content on our website, including text, graphics, logos, images, and software, is the property of Limitless Grit or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary-dark mb-2">Client Content</h3>
                  <p className="leading-relaxed">
                    You retain all rights to the content and materials you provide to us. By providing content, you grant us a license to use, reproduce, and modify such content solely for the purpose of delivering our services to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary-dark mb-2">Deliverables</h3>
                  <p className="leading-relaxed">
                    Upon full payment for services, you will receive the agreed-upon rights to the final deliverables as specified in your project agreement. Unless otherwise stated, Limitless Grit retains the right to showcase completed work in our portfolio and marketing materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Payment Terms
              </h2>
              <div className="space-y-3 text-gray-600">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment terms will be specified in individual project agreements</li>
                  <li>Invoices are typically due within 15 days of receipt unless otherwise agreed</li>
                  <li>Late payments may incur interest charges or suspension of services</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Refund policies will be outlined in project-specific agreements</li>
                </ul>
              </div>
            </div>

            {/* Project Agreements */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Project Agreements
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Each project will be governed by a specific agreement or statement of work that outlines the scope, deliverables, timeline, and payment terms. In the event of any conflict between these Terms and a project-specific agreement, the project-specific agreement shall prevail.
              </p>
            </div>

            {/* Revisions and Changes */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Revisions and Changes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The number of revisions and the process for requesting changes will be specified in your project agreement. Additional revisions beyond the agreed-upon number may incur additional fees. Significant scope changes may require a new agreement and additional payment.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Warranties and Disclaimers
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  We strive to provide high-quality services but make no warranties, expressed or implied, regarding:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The specific results or outcomes of our services</li>
                  <li>The accuracy or completeness of any information provided</li>
                  <li>The uninterrupted or error-free operation of our website</li>
                  <li>Any specific business results or revenue increases</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Our services are provided "as is" and "as available" without warranties of any kind.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Limitless Grit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Confidentiality
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We understand that you may share confidential information with us during the course of our work together. We agree to maintain the confidentiality of such information and not disclose it to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Termination
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">
                  Either party may terminate a project agreement under the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By mutual written agreement</li>
                  <li>For material breach of the agreement, with written notice and opportunity to cure</li>
                  <li>As otherwise specified in the project agreement</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Upon termination, you will be responsible for payment for all work completed up to the termination date.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in New York.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-medium text-primary-dark mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:hello@limitlessgrit.com" className="text-primary hover:underline font-medium">hello@limitlessgrit.com</a></p>
                <p>Location: New York, NY</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

