"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/properties", label: "Property Listings" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <div className="section h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Amit Soni Real Estate
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:opacity-80 ${pathname === n.href ? "font-medium" : "opacity-90"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/properties" className="btn-primary h-9 px-4 text-sm">
         Contact Us
        </Link>
      </div>
    </header>
  )
}
