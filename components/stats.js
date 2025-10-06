export default function Stats() {
  const items = [
    { k: "350+", v: "Listings" },
    { k: "98%", v: "Client Satisfaction" },
    { k: "12+", v: "Years Experience" },
    { k: "24/7", v: "Support" },
  ]
  return (
    <section className="section-tight py-8 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.k} className="card p-5 text-center">
            <div className="text-2xl font-semibold text-[color:var(--primary)]">{it.k}</div>
            <div className="text-sm opacity-70">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
