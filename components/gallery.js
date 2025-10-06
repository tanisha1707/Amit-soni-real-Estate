import Image from "next/image"

export default function Gallery() {
  const imgs = [
    "/interior-modern-living-room.jpg",
    "/modern-kitchen.png",
    "/backyard-garden-patio.jpg",
    "/home-office-bright.jpg",
  ]
  return (
    <section className="section py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imgs.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image src={src || "/placeholder.svg"} alt={`Gallery ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
