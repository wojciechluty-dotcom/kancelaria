import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const emailBody = `
NOWE ZGŁOSZENIE - SANKCJA KREDYTU DARMOWEGO

Dane kontaktowe:
- Imię i Nazwisko: ${formData.name}
- Email: ${formData.email}
- Telefon: ${formData.phone}

Informacje o kredycie:
- Rodzaj kredytu: ${formData.loanType}
- Kwota kredytu: ${formData.loanAmount}

Opis sytuacji:
${formData.message || 'Brak dodatkowych informacji'}

---
Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    // Create FormSubmit URL with email
    const formSubmitURL = 'https://formsubmit.co/kontakt@wsla.pl';
    
    // Create form element dynamically
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formSubmitURL;
    form.style.display = 'none';

    // Add form fields
    const fields = {
      '_subject': `Nowe zgłoszenie: ${formData.name} - Sankcja Kredytu Darmowego`,
      '_template': 'table',
      '_captcha': 'false',
      'Imię i Nazwisko': formData.name,
      'Email': formData.email,
      'Telefon': formData.phone,
      'Rodzaj kredytu': formData.loanType,
      'Kwota kredytu': formData.loanAmount,
      'Wiadomość': formData.message || 'Brak dodatkowych informacji'
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        loanAmount: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-[#2C3E50] via-[#1e2d3d] to-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bezpłatna Analiza Twojej Umowy
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Wypełnij formularz, a nasi prawnicy skontaktują się z Tobą w ciągu 24 godzin
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">Informacje Kontaktowe</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-blue-100">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Telefon</div>
                    <div>+48 694 491 095</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-blue-100">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div>kontakt@wsla.pl</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-blue-100">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Adres</div>
                    <div>ul. Krupnicza 14/9<br />31-123 Kraków</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#D4AF37]/20 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/30">
              <h4 className="font-semibold text-white mb-3">Gwarantujemy:</h4>
              <ul className="space-y-2 text-amber-50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  Odpowiedź w 24h
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  Pełną poufność
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  Bezpłatną wstępną analizę
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  Profesjonalną obsługę
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#2C3E50] to-[#34495e] px-8 py-8 text-white">
                <h2 className="text-3xl font-bold mb-3">Bezpłatna Konsultacja</h2>
                <p className="text-blue-100 text-lg">
                  Wypełnij formularz, a my przeprowadzimy bezpłatną analizę Twojej umowy kredytowej i przygotujemy opinię prawną - bez żadnych zobowiązań.
                </p>
              </div>
              {isSubmitted ? (
                <div className="text-center py-12 px-8">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Dziękujemy za Twoje zgłoszenie!
                  </h3>
                  <p className="text-gray-600">
                    Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Imię i Nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Adres Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                        placeholder="jan.kowalski@email.pl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Numer Telefonu *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                        placeholder="+48 123 456 789"
                      />
                    </div>

                    <div>
                      <label htmlFor="loanType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Rodzaj Kredytu *
                      </label>
                      <select
                        id="loanType"
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <option value="">Wybierz rodzaj kredytu</option>
                        <option value="gotówkowy">Kredyt gotówkowy</option>
                        <option value="konsumencki">Kredyt konsumencki</option>
                        <option value="konsolidacyjny">Kredyt konsolidacyjny</option>
                        <option value="samochodowy">Kredyt samochodowy</option>
                        <option value="ratalna">Sprzedaż ratalna</option>
                        <option value="inny">Inny</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-700 mb-2">
                        Kwota Kredytu *
                      </label>
                      <select
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <option value="">Wybierz kwotę kredytu</option>
                        <option value="ponad-10k">Ponad 10 tysięcy</option>
                        <option value="ponad-50k">Ponad 50 tysięcy</option>
                        <option value="ponad-100k">Ponad 100 tysięcy</option>
                        <option value="ponad-200k">Ponad 200 tysięcy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Opisz Swoją Sytuację
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E50] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Podaj dodatkowe informacje o swoim kredycie, które pomogą nam w analizie..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-[#2C3E50] border-gray-300 rounded focus:ring-[#2C3E50]"
                      />
                      <span className="text-sm text-gray-600">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                        <button
                          type="button"
                          onClick={() => setIsPrivacyOpen(true)}
                          className="text-[#2C3E50] hover:underline font-semibold"
                        >
                          Polityką Prywatności
                        </button>{' '}
                        w celu przeprowadzenia analizy umowy kredytowej. Administratorem danych jest Kancelaria Prawna. 
                        Masz prawo do wglądu, poprawiania i usuwania swoich danych.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#9a7a1a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Wyślij Formularz
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    * Pola wymagane
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </section>
  );
}