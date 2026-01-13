import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import logoImage from '@/assets/images/logo-wsla.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="WSLA Kancelaria" 
              className="h-25 sm:h-12 w-auto"
            />
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+48694491095" 
              className="flex items-center gap-2 text-[#2C3E50] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+48 694 491 095</span>
            </a>
            <a 
              href="mailto:kontakt@wsla.pl" 
              className="flex items-center gap-2 text-[#2C3E50] hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">kontakt@wsla.pl</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Bezpłatna Analiza
          </button>
        </div>
      </div>
    </header>
  );
}
