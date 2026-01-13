import { CheckCircle2, Scale, Wallet } from 'lucide-react';

export function WhatIsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Czym Jest Sankcja Kredytu Darmowego?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To konsekwencja prawna dla banków, które naruszyły przepisy przy udzielaniu kredytu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-[#2C3E50] rounded-lg flex items-center justify-center mb-4">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Podstawa Prawna
            </h3>
            <p className="text-gray-700">
              Sankcja kredytu darmowego wynika z przepisów ustawy o kredycie konsumenckim. 
              Bank, który naruszył obowiązki informacyjne, może stracić prawo do odsetek.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
              <Wallet className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Korzyści dla Ciebie
            </h3>
            <p className="text-gray-700">
              Przy uznaniu sankcji spłacasz tylko kapitał – bez odsetek, prowizji i innych opłat. 
              To może oznaczać oszczędności sięgające nawet kilkudziesięciu tysięcy złotych.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-[#2C3E50] rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Kiedy Przysługuje?
            </h3>
            <p className="text-gray-700">
              Sankcja przysługuje, gdy bank nieprawidłowo poinformował o RRSO, kosztach kredytu, 
              lub nie wypełnił innych obowiązków wynikających z prawa konsumenckiego.
            </p>
          </div>
        </div>

        <div className="bg-[#2C3E50] text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Czy Twój Kredyt Jest Objęty Sankcją?
          </h3>
          <p className="text-lg text-center text-slate-200 mb-6">
            Wiele umów kredytowych zawiera nieprawidłowości. Nie czekaj – sprawdź swoje możliwości już dziś.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Sprawdź Swoją Umowę
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}