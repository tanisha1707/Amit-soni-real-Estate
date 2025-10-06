import Image from "next/image"

export default function PropertyCard({ item }) {
  const { title, price, address, beds, baths, sqft, imageUrl, status = "For Sale" } = item || {}
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl || "/placeholder.svg?height=640&width=960&query=modern house exterior"}
          alt={title || "Property"}
          fill
          className="object-cover"
        />
        <span className="badge absolute left-2 top-2">{status}</span>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium">{title || "Untitled Property"}</h3>
        <p className="text-sm opacity-80">{address || "Address TBA"}</p>
        <div className="flex items-center justify-between text-sm pt-1">
          <span className="font-semibold">${price ? price.toLocaleString() : "—"}</span>
          <span className="opacity-70">
            {beds ?? "—"} bd · {baths ?? "—"} ba · {sqft ?? "—"} ft²
          </span>
        </div>
      </div>
    </article>
  )
}
