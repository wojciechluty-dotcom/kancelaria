import { Award, Scale, Briefcase, Phone, Mail } from 'lucide-react';
import adamskiImage from '@/assets/images/wojciech-adamski.jpg';

export function TeamSection() {
  const lawyers = [
    {
      name: "Wojciech Luty",
      title: "Adwokat",
      image: "/images/team-luty.png",
      phone: "+48 694 491 095",
      email: "wojciech.luty@wsla.pl",
      specializations: [
        "Prawo cywilne i bankowe",
        "Prowadzenie spraw frankowych",
        "Reprezentacja w sporach z bankami",
        "Zastępowanie przed sądami"
      ],
      experience: "Kilkaset wygranych spraw w zakresie ochrony konsumentów"
    },
    {
      name: "Wojciech Adamski",
      title: "Radca Prawny",
      image: adamskiImage,
      phone: "+48 533 704 477",
      email: "wojciech.adamski@wsla.pl",
      specializations: [
        "Prawo bankowe i konsumenckie",
        "Prowadzenie spraw frankowych",
        "Sankcje kredytu darmowego",
        "Postępowania sądowe przeciwko bankom"
      ],
      experience: "Kilkaset wygranych spraw przeciwko instytucjom finansowym"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasi Specjaliści
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doświadczeni prawnicy, którzy z sukcesem przeprowadzili setki spraw przeciwko bankom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-900">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name and Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {lawyer.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    {lawyer.title}
                  </p>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#2C3E50]" />
                    Specjalizacje
                  </h4>
                  <ul className="space-y-2">
                    {lawyer.specializations.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience Badge */}
                <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Award className="w-6 h-6 text-[#2C3E50]" />
                    </div>
                    <p className="text-sm text-gray-700 font-medium">
                      {lawyer.experience}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  <a 
                    href={`tel:${lawyer.phone}`}
                    className="text-sm text-gray-700 hover:text-[#2C3E50] font-medium flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    {lawyer.phone}
                  </a>
                  <a 
                    href={`mailto:${lawyer.email}`}
                    className="text-sm text-gray-700 hover:text-[#2C3E50] font-medium flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    {lawyer.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Doświadczenie, Któremu Możesz Zaufać
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nasi prawnicy z kancelarii Steidler, Luty, Adamski, Bućko specjalizują się w sprawach przeciwko bankom i instytucjom finansowym. 
              Przeprowadzili setki postępowań zakończonych sukcesem, odzyskując dla klientów miliony złotych. 
              Znają wszystkie mechanizmy działania banków i skutecznie walczą o Twoje prawa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
