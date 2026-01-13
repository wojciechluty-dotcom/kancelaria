import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { RodoClauseModal } from './RodoClauseModal';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRodoOpen, setIsRodoOpen] = useState(false);

  return (
    <footer className="bg-[#2C3E50] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 text-2xl font-bold">
              <span className="text-[#D4AF37]">WSLA</span>
              <span className="text-white"> Kancelaria</span>
            </div>
            <p className="text-sm text-gray-400">
              Steidler, Luty, Adamski, Bućko<br />
              Adwokaci i Radcowie Prawni<br />
              <span className="mt-2 block">
                Profesjonalna pomoc prawna w zakresie sankcji kredytu darmowego.
              </span>
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informacje Prawne</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Polityka prywatności
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsRodoOpen(true)}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  RODO
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span>+48 694 491 095</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span>kontakt@wsla.pl</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#D4AF37]" />
                <span>ul. Krupnicza 14/9<br />31-123 Kraków</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2026 Steidler, Luty, Adamski, Bućko - Adwokaci i Radcowie Prawni. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-center md:text-right">
              Serwis ma charakter informacyjny i nie stanowi porady prawnej.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Zastrzeżenie prawne:</strong> Informacje zawarte na stronie mają charakter 
            wyłącznie informacyjny i nie stanowią porady prawnej. Każda sprawa wymaga indywidualnej analizy. 
            Skorzystanie z usług kancelarii wymaga zawarcia umowy. Kancelaria nie gwarantuje uzyskania sankcji kredytu 
            darmowego – decyzja zależy od sądu oraz specyfiki konkretnej umowy kredytowej.
          </p>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <RodoClauseModal isOpen={isRodoOpen} onClose={() => setIsRodoOpen(false)} />
    </footer>
  );
}