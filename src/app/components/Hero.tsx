import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#1a252f]"></div>
      
      {/* Side Lightening Gradient - lighter on sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Lawyer Images - Left */}
      <div className="absolute left-0 bottom-0 w-96 h-[550px] lg:w-[480px] lg:h-[680px] hidden md:block z-0">
        <div className="relative w-full h-full">
          <img
            src="/images/hero-lawyer-left.png"
            alt="Prawnik"
            className="w-full h-full object-cover opacity-95"
            style={{
              objectPosition: 'center 10%',
              filter: 'saturate(0.85) brightness(1.05)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 3%, rgba(0,0,0,1) 10%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 3%, rgba(0,0,0,1) 10%), linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 70%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          />
        </div>
      </div>

      {/* Lawyer Images - Right */}
      <div className="absolute right-0 bottom-0 w-96 h-[550px] lg:w-[480px] lg:h-[680px] hidden md:block z-0">
        <div className="relative w-full h-full">
          <img
            src="/images/hero-lawyer-right.png"
            alt="Prawnik"
            className="w-full h-full object-cover opacity-95"
            style={{
              objectPosition: 'center 10%',
              filter: 'saturate(0.85) brightness(1.05)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 3%, rgba(0,0,0,1) 10%), linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 3%, rgba(0,0,0,1) 10%), linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 70%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="text-sm text-[#D4AF37] font-semibold mb-4 tracking-wide uppercase">
          Steidler, Luty, Adamski, Bućko - Adwokaci i Radcowie Prawni
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Sprawdź, Czy Twój Kredyt<br />
          Kwalifikuje Się do Sankcji<br />
          <span className="text-[#D4AF37]">Kredytu Darmowego</span>
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Bank nie poinformował Cię o prawie odstąpienia od umowy? Możesz być uprawniony do darmowego kredytu. Odzyskaj zapłacone odsetki i prowizje.
        </p>

        <div className="mb-10 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          <p className="text-white font-semibold">
            ✓ Bezpłatna analiza umowy i opinia prawna
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#kontakt" 
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#2C3E50] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c49d2e] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Bezpłatna Analiza
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={scrollToForm}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-white/30"
          >
            Skontaktuj się z nami
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            <span>Doświadczeni prawnicy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            <span>100% poufności</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            <span>Analiza bez zobowiązań</span>
          </div>
        </div>
      </div>
    </div>
  );
}
