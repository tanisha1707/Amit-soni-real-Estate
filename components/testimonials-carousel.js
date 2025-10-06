"use client"

import { useEffect, useRef } from "react"

const TESTIMONIALS = [
  {
    id: 1,
    text: "We were amazed by how quickly Monolith helped us secure a home that checked every box on our list.",
    name: "Megan Fox",
    location: "Washington, NY",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    text: "Monolith truly goes above and beyond. Their dedication to finding the right property for us was evident from day one.",
    name: "Jessica Mercedes",
    location: "CEO @ Scarscan",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    text: "Working with Monolith was a game-changer. They understood exactly what we needed and delivered beyond our expectations.",
    name: "Daniel Kardashian",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    text: "Monolith's attention to detail and commitment to the real estate process was exceptional. They made everything such precision and professionalism, saving us time and money, and making us happier.",
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    text: "The team at Monolith provided exceptional service from start to finish. Their expertise made our home buying journey smooth and stress-free.",
    name: "Michael Chen",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
]

// Duplicate testimonials for seamless loop
const DOUBLED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS]

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-[380px] md:w-[440px] mx-4">
      <div className="bg-muted rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          {testimonial.text}
        </p>
        
        <div className="flex items-center gap-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsCarousel() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId
    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust speed here (lower = slower)

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset when we've scrolled through one set of testimonials
      const cardWidth = 380 + 32 // card width + gap
      const resetPoint = TESTIMONIALS.length * cardWidth
      
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId)
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="section mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Happy new<br></br> home owners
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {DOUBLED_TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}