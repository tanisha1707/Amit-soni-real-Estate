export default function VideoSection() {
  return (
    <section id="video" className="section-tight py-10 md:py-28">
      {/* Heading with premium spacing */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet The Owner</h2>
      </div>
      
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-16 lg:gap-20 items-center">
        {/* Video on Left with enhanced card - Larger size */}
        <div className="card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full aspect-video">
            <iframe
              title="Owner Introduction"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content on Right with border and premium spacing */}
        <div className="flex flex-col justify-center h-full border border-border rounded-xl  md:p-10 bg-transparent">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed opacity-90">
              With years of experience in real estate, we&apos;re passionate about helping families find their perfect home. 
              Our personalized approach ensures every client receives dedicated attention and expert guidance throughout their journey.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              We believe that finding a home is more than just a transaction—it&apos;s about discovering a place where memories 
              are made and dreams come true.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}