import { Send, FileSearch, Scale, CheckCircle, FileText, FileCheck } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Bezpłatna Analiza Umowy",
      description: "Wyślij nam swoją umowę kredytową. Nasi prawnicy przeprowadzą szczegółową, całkowicie bezpłatną analizę i oceną, czy Twoja umowa zawiera nieprawidłowości dające podstawę do sankcji kredytu darmowego."
    },
    {
      number: "02",
      icon: FileCheck,
      title: "Opinia Prawna i Plan Działania",
      description: "Otrzymasz bezpłatną opinię prawną z oceną Twoich szans oraz szczegółowy plan działania. Przedstawimy wszystkie opcje i pomożemy wybrać najlepsze rozwiązanie dla Twojej sytuacji."
    },
    {
      number: "03",
      icon: Scale,
      title: "Reprezentacja w Sądzie",
      description: "Jeśli się kwalifikujesz, przejmiemy pełną odpowiedzialność za prowadzenie sprawy. Reprezentujemy Cię w sądzie i negocjacjach z bankiem."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Odzyskanie Pieniędzy",
      description: "Po wygranej sprawie odzyskujesz zapłacone odsetki i prowizje. Nasi prawnicy przeprowadzą całą procedurę od początku do końca."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jak Przebiega Proces?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proste kroki do odzyskania Twoich pieniędzy - zaczynamy od bezpłatnej analizy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line - hidden on mobile, shown on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="inline-block mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#1a2633] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#2C3E50]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Cały proces rozpoczyna się od prostego formularza. Nie czekaj – sprawdź swoje możliwości już dziś.
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#2C3E50] hover:bg-[#1a2633] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Rozpocznij Teraz
          </button>
        </div>
      </div>
    </section>
  );
}