import { Shield, Award, Users, TrendingUp, Clock, FileCheck, Scale } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Scale,
      title: "Doświadczeni Prawnicy",
      description: "Nasi adwokaci i radcowie prawni specjalizują się w prawie bankowym i ochronie konsumentów."
    },
    {
      icon: Award,
      title: "Setki Wygranych Spraw",
      description: "Z sukcesem przeprowadziliśmy setki postępowań przeciwko bankom, odzyskując miliony złotych dla klientów."
    },
    {
      icon: Shield,
      title: "100% Poufność",
      description: "Gwarantujemy pełną dyskrecję i bezpieczeństwo Twoich danych osobowych zgodnie z RODO."
    },
    {
      icon: Clock,
      title: "Szybka Reakcja",
      description: "Odpowiadamy na zapytania w ciągu 24h. Bezpłatna konsultacja jeszcze tego samego dnia."
    },
    {
      icon: FileCheck,
      title: "Kompleksowa Obsługa",
      description: "Od analizy umowy, przez pozew, aż po egzekucję wyroku – zajmiemy się wszystkim."
    },
    {
      icon: TrendingUp,
      title: "Wysoka Skuteczność",
      description: "Nasze działania opierają się na aktualnym orzecznictwie Sądu Najwyższego i TSUE."
    },
    {
      icon: Users,
      title: "Indywidualne Podejście",
      description: "Każda sprawa jest unikalna – dostosowujemy strategię do Twojej konkretnej sytuacji."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dlaczego Wybrać Naszą Kancelarię?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesjonalizm, doświadczenie i skuteczność w walce o Twoje prawa konsumenckie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="team-group.png"
                alt="Zespół Kancelarii"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="grid gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2C3E50] to-[#1a2633] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-[#2C3E50] mb-2">500+</div>
            <div className="text-gray-600">Zadowolonych Klientów</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">24h</div>
            <div className="text-gray-600">Bezpłatna Analiza Umowy</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-[#2C3E50] mb-2">10+</div>
            <div className="text-gray-600">Lat Doświadczenia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
