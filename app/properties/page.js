import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import PropertyCard from "../../components/property-card"
import { PROPERTIES } from "../../lib/data"

export const dynamic = "force-static"

export default function PropertiesPage() {
  const list = [...PROPERTIES].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <main>
      <Navbar />
      <section className="section py-10 md:py-14">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">All Properties</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((p) => (
            <PropertyCard key={p.id} item={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
