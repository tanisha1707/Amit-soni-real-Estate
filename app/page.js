import Navbar from "../components/navbar"
import Hero from "../components/hero"
import PropertiesSection from "../components/properties-section"
import Gallery from "../components/gallery"
import VideoSection from "../components/video-section"
import TestimonialsCarousel from "../components/testimonials-carousel"
import CTA from "../components/cta"
import Footer from "../components/footer"

export const dynamic = "force-static"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoSection />
      <PropertiesSection />
      <TestimonialsCarousel />
      <CTA />
      <Footer />
    </main>
  )
}
