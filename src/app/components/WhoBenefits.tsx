import { AlertCircle, FileText, DollarSign, Calculator, CreditCard, Info } from 'lucide-react';

export function WhoBenefits() {
  const benefits = [
    {
      icon: FileText,
      title: "Brak pełnej informacji o RRSO",
      description: "Umowa nie zawiera wszystkich wymaganych informacji o rzeczywistej rocznej stopie oprocentowania"
    },
    {
      icon: DollarSign,
      title: "Nieprawidłowe koszty kredytu",
      description: "Bank niepoprawnie obliczył lub przedstawił całkowity koszt kredytu w umowie"
    },
    {
      icon: Calculator,
      title: "Błędne obliczenie RRSO",
      description: "Wskazane w umowie RRSO różni się od rzeczywistego lub zostało błędnie wyliczone"
    },
    {
      icon: Info,
      title: "Brak informacji przedumownych",
      description: "Nie otrzymałeś wymaganej prawem informacji przed podpisaniem umowy kredytowej"
    },
    {
      icon: CreditCard,
      title: "Kredyty gotówkowe i konsumenckie",
      description: "Kredyty gotówkowe, konsolidacyjne, na zakup towarów lub usług"
    },
    {
      icon: AlertCircle,
      title: "Niedozwolone klauzule umowne",
      description: "Umowa zawiera postanowienia naruszające prawa konsumenta lub niezgodne z przepisami"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kto Może Skorzystać?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sprawdź, czy Twoja sytuacja kwalifikuje się do skorzystania z sankcji kredytu darmowego
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2C3E50]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">
            Nie Jesteś Pewien, Czy Się Kwalifikujesz?
          </h3>
          <p className="text-lg text-amber-50 mb-6 max-w-2xl mx-auto">
            Skontaktuj się z nami. Przeprowadzimy bezpłatną analizę Twojej umowy kredytowej i poinformujemy o możliwościach.
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#2C3E50] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Zamów Bezpłatną Analizę
          </button>
        </div>
      </div>
    </section>
  );
}