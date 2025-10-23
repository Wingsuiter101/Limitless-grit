'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Edit, Film, Search, Sparkles } from 'lucide-react'
import Footer from '@/components/Footer'

const editingProcess = [
	{
		icon: Edit,
		title: 'Setup Sprint',
		description:
			'We work with you to establish a workflow, brand guidelines, and a content calendar for the upcoming month.',
	},
	{
		icon: Film,
		title: 'Editing',
		description:
			'Our team edits your long-form content, focusing on narrative flow, pacing, and visual appeal.',
	},
	{
		icon: Search,
		title: 'Content Strategy',
		description:
			'We identify the most impactful moments from your content to create a series of high-performing short-form clips.',
	},
	{
		icon: Sparkles,
		title: 'Revision',
		description:
			'We deliver the assets for your review, incorporating your feedback to ensure the final product exceeds expectations.',
	},
]

const whatYouGet = [
  "Long Form Podcast Production",
  "Social Clips Identification",
  "Custom Podcast Episode Thumbnails",
  "Custom Intro for each episode",
]

export default function ServicesPage() {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center px-6 overflow-hidden">
				<video
					src={`${basePath}/services-loop.mp4`}
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
							Our <span className="font-inria italic text-primary">Services</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
							A refined four-stage production process that transforms raw content into 
							polished podcasts, engaging shorts, and scroll-stopping visuals.
						</p>
					</motion.div>
				</div>
			</section>

		{/* Production Process */}
		<section className="pt-8 md:pt-24 pb-32 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
						Our Production{' '}
						<span className="font-inria italic text-primary">Process</span>
					</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							A clear, collaborative four-step process designed for quality and efficiency.
						</p>
					</motion.div>

					<div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{editingProcess.map((step, index) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-primary/20 hover:shadow-xl transition-all duration-300"
								style={{ zIndex: 1 }}
							>
								<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<step.icon className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-xl font-bold text-primary-dark mb-3">
									{step.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* What You Get */}
			<section className="py-24 pb-32 bg-gray-50">
				<div className="max-w-5xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
							What You{' '}
							<span className="font-inria italic text-primary">Get</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							A comprehensive package designed to elevate your podcast presence 
							and maximize your content's impact across all platforms.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-6"
					>
						{whatYouGet.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
							>
								<div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
									<Check className="w-6 h-6 text-white" strokeWidth={3} />
								</div>
								<p className="text-lg font-semibold text-primary-dark">{item}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

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
							Ready to elevate your <span className="font-inria italic">content?</span>
						</h2>
						<p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
							Let's discuss how our services can amplify your brand's digital presence.
						</p>
						<Link href="/contact">
							<button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
								Start Your Project
							</button>
						</Link>
					</div>
				</div>
			</motion.section>
			<Footer />
		</main>
	)
}
