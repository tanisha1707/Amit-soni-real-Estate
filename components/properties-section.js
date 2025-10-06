"use client"

import { useState } from "react"
import Link from "next/link"
import PropertyCard from "./property-card"
import { PROPERTIES } from "../lib/data"

// Enhanced Property Card with Hover Carousel
function PropertyCardWithCarousel({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Dummy images array with different property images
  const images = item.images || [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
  ]

  const handlePrevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Link href={`/properties/${item.id}`} className="group block">
      <div className="card overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Container with Carousel */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-muted"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* For Sale Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="badge bg-card text-foreground px-3 py-1.5 text-xs font-medium shadow-md">
              For Sale
            </span>
          </div>

          {/* Image */}
          <img
            src={images[currentImageIndex]}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Carousel Navigation - Shows on Hover */}
          {isHovering && images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-all"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-card transition-all"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setCurrentImageIndex(idx)
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-primary w-6" : "bg-card/70"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Property Details */}
        <div className="p-5">
          {/* Property Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{item.bedrooms} BEDROOMS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{item.sqft} FT²</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          {/* Price and Location */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">${item.price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function PropertiesSection() {
  const list = [...PROPERTIES]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6)

  const cities = ["Los Angeles", "San Francisco", "New York", "Paso Alto"]
  const [activeCity, setActiveCity] = useState("Los Angeles")

  return (
    <section className="section py-16 md:py-24" id="explore">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-wider uppercase text-muted-foreground mb-2">
          SEAMLESS AND FRIENDLY SERVICE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Popular choices nearby</h2>

        {/* City Filter Tabs */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`text-base font-medium pb-1 transition-all ${
                activeCity === city
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {list.map((p) => (
          <PropertyCardWithCarousel key={p.id} item={p} />
        ))}
      </div>
    </section>
  )
}