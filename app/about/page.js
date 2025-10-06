import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 antialiased">
      <Navbar />

      {/* About Section */}
      <section className="container mx-auto px-4 py-14 md:py-22">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Connecting You to <br /> Your <span className="text-indigo-600 dark:text-indigo-400">Dream Home.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto md:mx-0">
              We're not just about properties; we're about people and their dreams. At Amit Soni Real Estate, we believe that finding a home is one of life's most significant milestones. Our mission is to make that journey seamless, transparent, and exciting.
            </p>
            <Link href="/listings" className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Explore Listings
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-full h-80 md:h-96 rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/home-office-bright.jpg"
                alt="A smiling family in front of their new home"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white rounded-xl shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Founded with a passion for connecting people with their ideal living spaces, Amit Soni Real Estate has grown to become a trusted name in the industry. We started with a simple goal: to redefine the real estate experience by putting our clients first. Our journey is built on a foundation of integrity, market expertise, and an unwavering commitment to excellence.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We pride ourselves on our deep local knowledge and a personalized approach. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are dedicated to providing you with the insights and support you need to make informed decisions.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-300">We operate with honesty and transparency. Your trust is our most valuable asset.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">We go above and beyond to provide outstanding service, from consultation to closing.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Community</h3>
            <p className="text-gray-600 dark:text-gray-300">We are committed to building strong, lasting relationships within the communities we serve.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">We leverage the latest technology and market data to give you a competitive edge.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white rounded-xl shadow-inner">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founder</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/amit-soni.jpg"
                alt="Amit Soni"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Amit Soni</h3>
            <p className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full font-medium">Founder & CEO</p>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg">
              A visionary leader with years of experience, Amit founded the company with a vision to create a client-centric real estate firm. His expertise and passion for helping people find their perfect home drive our success.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
      </div>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Ready to find your perfect property? Our team is here to help.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Contact Us
          </Link>
          <Link href="/listings" className="inline-block px-8 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            View All Listings
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}