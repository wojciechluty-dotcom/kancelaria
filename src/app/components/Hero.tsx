import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/30 pt-32 pb-20 overflow-hidden">
      {/* Lawyer Images - Left */}
      <div className="absolute left-0 bottom-0 w-96 h-[550px] lg:w-[480px] lg:h-[680px] hidden md:block z-0">
        <div className="relative w-full h-full">
          <img
            src="'@/assets/images/wojciech-adamski.jpg"
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
            src="https://images.unsplash.com/photo-1589307904488-7d60ff29c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRvcm5leSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODMxNjA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    </section>
  );
}
