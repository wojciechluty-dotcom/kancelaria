import { X } from 'lucide-react';

interface RodoClauseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RodoClauseModal({ isOpen, onClose }: RodoClauseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-[#2C3E50] to-[#34495e] px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Klauzula informacyjna RODO</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-gray-700">
          <p className="text-sm leading-relaxed">
            Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych – RODO), informujemy że:
          </p>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">1. Administrator danych osobowych</h3>
            <p className="mb-2">Administratorem Pani/Pana danych osobowych jest:</p>
            <p className="font-semibold mb-2">Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c.</p>
            <ul className="list-none space-y-1">
              <li>ul. Krupnicza 14/9, 31-123 Kraków</li>
              <li>Email: kontakt@wsla.pl</li>
              <li>Tel: +48 694 491 095</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">2. Cel i podstawa prawna przetwarzania danych</h3>
            <p className="mb-2">Pani/Pana dane osobowe będą przetwarzane w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Świadczenie usług prawniczych</strong> – na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy) oraz art. 9 ust. 2 lit. f RODO w zakresie danych szczególnych kategorii</li>
              <li><strong>Kontakt z klientem</strong> – na podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora)</li>
              <li><strong>Realizacja obowiązków prawnych</strong> – na podstawie art. 6 ust. 1 lit. c RODO, w tym obowiązków wynikających z prawa adwokackiego, podatkowego i rachunkowego</li>
              <li><strong>Dochodzenie roszczeń</strong> – na podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">3. Okres przechowywania danych</h3>
            <p className="mb-2">Pani/Pana dane osobowe będą przechowywane przez okres:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Niezbędny do realizacji usługi prawniczej oraz dochodzenia roszczeń z niej wynikających</li>
              <li>Wymagany przepisami prawa, w szczególności:
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>5 lat – zgodnie z przepisami podatkowymi</li>
                  <li>Do czasu przedawnienia roszczeń wynikających z umowy</li>
                  <li>Zgodnie z Kodeksem Etyki Adwokackiej i przepisami o adwokaturze</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">4. Odbiorcy danych osobowych</h3>
            <p className="mb-2">Pani/Pana dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sądom i organom państwowym – w zakresie wymaganym przepisami prawa</li>
              <li>Podmiotom świadczącym usługi IT i hostingowe</li>
              <li>Biurom rachunkowym i księgowym</li>
              <li>Innym adwokatom lub radcom prawnym w ramach zastępstwa procesowego lub konsultacji</li>
              <li>Podmiotom uprawnionym na podstawie przepisów prawa</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">5. Prawa osób, których dane dotyczą</h3>
            <p className="mb-2">W związku z przetwarzaniem danych osobowych przysługują Pani/Panu następujące prawa:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prawo dostępu do swoich danych osobowych (art. 15 RODO)</li>
              <li>Prawo do sprostowania danych (art. 16 RODO)</li>
              <li>Prawo do usunięcia danych „prawo do bycia zapomnianym" (art. 17 RODO)</li>
              <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
              <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
              <li>Prawo do sprzeciwu wobec przetwarzania danych (art. 21 RODO)</li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">6. Wymóg podania danych</h3>
            <p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do zawarcia i wykonania umowy o świadczenie usług prawniczych. Niepodanie danych uniemożliwi świadczenie usługi.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">7. Zautomatyzowane podejmowanie decyzji</h3>
            <p>
              Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany, w tym w formie profilowania.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">8. Tajemnica zawodowa</h3>
            <p className="mb-3">
              Informujemy, że wszystkie dane przekazane adwokatowi w związku ze świadczeniem pomocy prawnej są objęte tajemnicą adwokacką, która jest chroniona przepisami ustawy Prawo o adwokaturze oraz Kodeksu Etyki Adwokackiej.
            </p>
            <p>
              Tajemnica adwokacka jest bezwzględna i obejmuje wszystkie informacje uzyskane w związku z udzielaniem pomocy prawnej, niezależnie od źródła ich pochodzenia.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">9. Realizacja praw</h3>
            <p className="mb-2">W celu realizacji swoich praw prosimy o kontakt:</p>
            <ul className="list-none space-y-1 mb-4">
              <li><strong>Email:</strong> kontakt@wsla.pl</li>
              <li><strong>Telefon:</strong> +48 694 491 095</li>
              <li><strong>Adres:</strong> ul. Krupnicza 14/9, 31-123 Kraków</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-[#D4AF37] p-4 rounded">
              <p className="font-semibold text-[#2C3E50] mb-2">Prezes Urzędu Ochrony Danych Osobowych</p>
              <p className="text-sm">
                W przypadku uznania, że przetwarzanie danych osobowych narusza przepisy RODO, przysługuje Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
              </p>
            </div>
          </section>

          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Ostatnia aktualizacja: 12 stycznia 2026</p>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-[#2C3E50] hover:bg-[#1e2d3d] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}