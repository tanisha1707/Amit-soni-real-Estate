import Link from "next/link"

export default function CTA() {
  return (
    <section className="section-tight py-14 md:py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance">Ready to start your real estate journey?</h2>
      <p className="mt-3 opacity-80">Talk to our experts and schedule a viewing today.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/properties" className="btn-primary">
          Browse Listings
        </Link>
        <Link href="#contact" className="btn-accent">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
