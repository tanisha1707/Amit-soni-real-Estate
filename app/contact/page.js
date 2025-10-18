// app/contact/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from "../../components/navbar"; 
import Footer from "../../components/footer"; 
import { Phone, Mail, MapPin, Clock, AlertCircle, CheckCircle } from 'lucide-react'; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
    budget: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success', 'error', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', propertyType: '', message: '', budget: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

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
            Contact our support team with any questions or queries you may have.
          </p>
        </div>
      </section>

      {/* Contact Layout Section */}
      <section className="section pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: Contact Info */}
          <div className="space-y-6">
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
                USA<br />
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
                Monday – Friday: 8am – 8pm<br />
                Saturday: 9am – 5pm
              </p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="card p-8 bg-card">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground"
                >
                  <option value="">Select property type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground"
                  placeholder="e.g., $500K - $1M"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground resize-none"
                  placeholder="Tell us about your property needs..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700">Thank you! Your inquiry has been sent successfully.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-700">Error sending message. Please try again.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}