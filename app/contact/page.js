// app/contact/page.js

import Link from 'next/link';
import Navbar from "../../components/navbar"; // Assuming these paths are correct
import Footer from "../../components/footer"; // Assuming these paths are correct
import { Phone, Mail, MapPin, Clock } from 'lucide-react'; // For icons, you'll need to install lucide-react

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="section py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Contact our support team and with any questions or queries you may have.
          </p>
        </div>
      </section>

      {/* Contact Info Grid Section */}
      <section className="section pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Card */}
          <div className="card p-8 bg-card flex flex-col items-start space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-muted">
              <Phone className="w-6 h-6 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Phone</h2>
            <p className="text-lg text-muted-foreground">+1 899 8123</p>
          </div>

          {/* Email Card */}
          <div className="card p-8 bg-card flex flex-col items-start space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-muted">
              <Mail className="w-6 h-6 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Email</h2>
            <p className="text-lg text-muted-foreground">support@amitsoni.com</p>
          </div>

          {/* Address Card */}
          <div className="card p-8 bg-card flex flex-col items-start space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-muted">
              <MapPin className="w-6 h-6 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Address</h2>
            <p className="text-lg text-muted-foreground">
              USA
              <br />
              San Francisco, CA 94107
            </p>
          </div>

          {/* Opening Hours Card */}
          <div className="card p-8 bg-card flex flex-col items-start space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-muted">
              <Clock className="w-6 h-6 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Opening hours</h2>
            <p className="text-lg text-muted-foreground">
              Monday – Friday: 8am – 8pm
              <br />
              Saturday: 9am – 5pm
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}