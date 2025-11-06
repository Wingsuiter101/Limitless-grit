'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
	return (
		<section className="relative min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden pt-20">
			{/* Background Video */}
			<video
				src={`${basePath}/hero-loop.mp4`}
				className="absolute inset-0 w-full h-full object-cover"
				autoPlay
				muted
				loop
				playsInline
			/>
			{/* Gradient overlay fading to white at the bottom */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />

			<div className="max-w-6xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium text-primary-dark mb-6 leading-tight">
						Simplify
					</h1>
					<h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-dark mb-12 leading-tight">
						Content{' '}
						<span className="text-primary">Creation</span>
					</h2>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="text-lg md:text-xl text-gray-600 mb-32 max-w-4xl mx-auto leading-relaxed"
				>
					We partner with CMOs and executives to scale their company and personal brands through purposeful storytelling and consistent content execution.
				</motion.p>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<div className="flex flex-col items-center">
						<span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
						<motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
						>
							<div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
