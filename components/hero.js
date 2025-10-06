import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="section py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <div className="badge">4.9/5 from 800+ reviews</div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          Simplify your Real Estate Journey
        </h1>
        <p className="text-base md:text-lg opacity-80">
          Discover properties that fit your lifestyle and make you feel comfortable.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/properties" className="btn-primary">
            Browse Properties
          </Link>
          <Link href="#video" className="btn-accent">
            Watch Video
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3.5] rounded-xl overflow-hidden">
        <Image src="/neighborhood-aerial-real-estate.jpg" alt="Aerial neighborhood" fill className="object-cover" priority />
      </div>
    </section>
  )
}
