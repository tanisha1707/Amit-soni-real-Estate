import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-20 py-10">
      <div className="section grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold text-primary mb-2">
            Amit Soni Real Estate
          </Link>
          <p className="text-sm text-muted-foreground">
            Your trusted partner in finding the perfect property.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-4 mb-4">
            
            <a 
              href="#" 
              aria-label="Instagram" 
              className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
    
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Amit Soni Real Estate. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with Love by Botmartz IT Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}