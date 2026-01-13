import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-[#2C3E50] to-[#34495e] px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Polityka Prywatności</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">1. Postanowienia ogólne</h3>
            <p className="mb-3">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej prowadzonej przez Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c.
            </p>
            <p>
              <strong>Administratorem danych osobowych jest:</strong> Steidler, Luty, Adamski – Adwokaci i Radcowie Prawni s.c., ul. Krupnicza 14/9, 31-123 Kraków, email: kontakt@wsla.pl, tel: +48 694 491 095.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">2. Rodzaj przetwarzanych danych</h3>
            <p className="mb-2">Administrator przetwarza następujące dane osobowe:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Imię i nazwisko</li>
              <li>Adres email</li>
              <li>Numer telefonu</li>
              <li>Informacje podane w formularzu kontaktowym</li>
              <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">3. Cel i podstawa prawna przetwarzania danych</h3>
            <p className="mb-2">Dane osobowe są przetwarzane w celu:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy (art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)</li>
              <li>Świadczenia usług prawniczych (art. 6 ust. 1 lit. b RODO - wykonanie umowy)</li>
              <li>Wywiązania się z obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
              <li>Marketingu bezpośredniego (art. 6 ust. 1 lit. f RODO - za zgodą użytkownika)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">4. Okres przechowywania danych</h3>
            <p>
              Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, a także zgodnie z obowiązującymi przepisami prawa, w tym przepisami o archiwizacji dokumentów. Po upływie tego okresu dane są usuwane lub anonimizowane.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">5. Udostępnianie danych</h3>
            <p className="mb-2">
              Dane osobowe mogą być przekazywane podmiotom uprawnionym do ich otrzymania na mocy obowiązujących przepisów prawa oraz podmiotom współpracującym z Administratorem, tj.:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Dostawcom usług IT i hostingowych</li>
              <li>Dostawcom usług księgowych i prawnych</li>
              <li>Organom państwowym na podstawie przepisów prawa</li>
            </ul>
            <p>
              Administrator nie przekazuje danych osobowych do państw trzecich ani organizacji międzynarodowych.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">6. Prawa osób, których dane dotyczą</h3>
            <p className="mb-2">Użytkownikowi przysługuje prawo do:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">7. Pliki cookies</h3>
            <p className="mb-2">
              Strona internetowa używa plików cookies (ciasteczka) w celu zapewnienia prawidłowego funkcjonowania serwisu, analizy ruchu oraz dostosowania treści do preferencji użytkownika.
            </p>
            <p>
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">8. Bezpieczeństwo danych</h3>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym, utratą czy uszkodzeniem.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">9. Zmiany polityki prywatności</h3>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O wszelkich zmianach użytkownicy będą informowani poprzez publikację zaktualizowanej wersji na stronie internetowej.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">10. Kontakt</h3>
            <p className="mb-2">W sprawach związanych z ochroną danych osobowych można się kontaktować:</p>
            <ul className="list-none space-y-1">
              <li><strong>Email:</strong> kontakt@wsla.pl</li>
              <li><strong>Telefon:</strong> +48 694 491 095</li>
              <li><strong>Adres:</strong> ul. Krupnicza 14/9, 31-123 Kraków</li>
            </ul>
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