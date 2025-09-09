'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Content Starter',
    price: '$2,500',
    duration: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      '10 social media posts/month',
      '2 blog posts/month',
      'Basic brand guidelines',
      'Monthly strategy call',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth Package',
    price: '$7,500',
    duration: '/month',
    description: 'Ideal for growing companies',
    features: [
      '25 social media posts/month',
      '4 blog posts/month',
      'Video content (2 per month)',
      'Advanced analytics',
      'Weekly strategy calls',
      'Priority support',
      'Brand intelligence reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom',
    duration: '',
    description: 'For large-scale content needs',
    features: [
      'Unlimited content creation',
      'Dedicated account manager',
      'Custom workflows',
      'Advanced AI tools',
      '24/7 support',
      'Quarterly strategy sessions',
      'Full brand management',
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
            Choose Your <span className="font-inria italic text-primary">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for every stage of your content journey. All plans include our signature creative
            excellence and data-driven approach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need something different? We create custom packages for unique requirements.
          </p>
          <button className="text-primary hover:text-primary/80 font-semibold underline">
            Schedule a consultation →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
