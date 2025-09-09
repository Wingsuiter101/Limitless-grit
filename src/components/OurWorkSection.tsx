'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

const workSamples = [
  {
    id: 1,
    title: "Brand Story Reel",
    description: "Tech Startup Launch",
    duration: "0:45",
    thumbnail: "/placeholder-reel-1.jpg"
  },
  {
    id: 2,
    title: "Product Demo Short",
    description: "SaaS Platform Feature",
    duration: "0:30",
    thumbnail: "/placeholder-reel-2.jpg"
  },
  {
    id: 3,
    title: "Founder Story",
    description: "Personal Brand Content",
    duration: "1:20",
    thumbnail: "/placeholder-reel-3.jpg"
  },
  {
    id: 4,
    title: "Company Culture",
    description: "Behind the Scenes",
    duration: "0:55",
    thumbnail: "/placeholder-reel-4.jpg"
  },
  {
    id: 5,
    title: "Product Launch",
    description: "Announcement Video",
    duration: "1:10",
    thumbnail: "/placeholder-reel-5.jpg"
  },
  {
    id: 6,
    title: "Client Testimonial",
    description: "Success Story",
    duration: "0:40",
    thumbnail: "/placeholder-reel-6.jpg"
  }
]

export default function OurWorkSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
            Our <span className="font-inria italic text-primary">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From brand stories to product launches, see how we transform ideas into engaging content that drives results.
          </p>
        </motion.div>

        {/* Work Carousel (3 visible, center highlighted) */}
        <Carousel />

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 px-6"
        >
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Work
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalItems = workSamples.length;

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-visible">
      {/* Carousel Container - allow overflow for scaling */}
      <div className="px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Show 3 items: previous, current (center), next */}
          {[0, 1, 2].map((offset) => {
            const itemIndex = (currentIndex + offset) % totalItems;
            const work = workSamples[itemIndex];
            const isCenter = offset === 1; // Middle item is highlighted
            const positionKey = offset === 0 ? 'pos-left' : offset === 1 ? 'pos-center' : 'pos-right'
            
            return (
              <motion.div
                key={positionKey}
                layout="position"
                animate={{ scale: isCenter ? 1.04 : 0.98, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`${isCenter ? 'z-10' : ''} ${offset === 0 ? 'hidden lg:block' : ''} ${offset === 2 ? 'hidden lg:block' : ''}`}
              >
                <div className={`relative rounded-3xl overflow-hidden aspect-[9/16] shadow-lg ${
                  isCenter ? 'ring-2 ring-primary/30 shadow-xl' : 'shadow-md'
                }`}>
                  {/* Featured Badge for center item */}
                  {isCenter && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg">
                      ✨ Featured
                    </div>
                  )}
                  
                  {/* Video Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`${
                        isCenter 
                          ? 'w-16 h-16 bg-gradient-to-r from-primary to-secondary' 
                          : 'w-12 h-12 bg-primary/90'
                      } rounded-full flex items-center justify-center mx-auto mb-4 shadow`}>
                        <Play className={`${
                          isCenter ? 'w-7 h-7 ml-1' : 'w-5 h-5 ml-0.5'
                        } text-white fill-white`} />
                      </div>
                      <span className={`${
                        isCenter ? 'text-gray-700 font-medium' : 'text-gray-600 text-sm'
                      }`}>Video Preview</span>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className={`absolute top-4 right-4 text-white rounded-md font-medium ${
                    isCenter 
                      ? 'bg-black/80 px-3 py-1.5 text-sm' 
                      : 'bg-black/70 px-2 py-1 text-xs'
                  }`}>
                    {work.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="mt-4 text-center">
                  <h3 className={`${
                    isCenter 
                      ? 'text-lg font-bold text-primary-dark' 
                      : 'text-base font-semibold text-primary-dark'
                  }`}>
                    {work.title}
                  </h3>
                  <p className={`${
                    isCenter 
                      ? 'text-gray-600 mt-1 font-medium' 
                      : 'text-gray-600 text-sm mt-1'
                  }`}>
                    {work.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-primary-dark p-3 rounded-full shadow-lg z-30 border border-gray-200 hover:shadow-xl hover:bg-gray-50 disabled:opacity-50 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary-dark p-3 rounded-full shadow-lg z-30 border border-gray-200 hover:shadow-xl hover:bg-gray-50 disabled:opacity-50 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {workSamples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentIndex(index);
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125 shadow' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
