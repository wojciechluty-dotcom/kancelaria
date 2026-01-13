# Strona Kancelarii - Sankcja Kredytu Darmowego

Profesjonalna strona internetowa dla kancelarii prawnej **Steidler, Luty, Adamski, Bućko - Adwokaci i Radcowie Prawni** specjalizującej się w sankcjach kredytu darmowego.

## 🎯 O Stronie

Strona typu landing page zaprojektowana do generowania leadów prawniczych z naciskiem na bezpłatne konsultacje. Zawiera:

- ✅ Sekcję Hero z CTA
- ✅ Wyjaśnienie czym jest sankcja kredytu darmowego
- ✅ Kto może skorzystać
- ✅ Jak przebiega proces
- ✅ Dlaczego wybrać kancelarię
- ✅ Profile prawników
- ✅ Formularz kontaktowy z wysyłką emaili
- ✅ Footer z disclaimerami i RODO

## 📧 Wysyłanie Formularzy

Formularz kontaktowy jest skonfigurowany do wysyłania wiadomości na **kontakt@wsla.pl** poprzez usługę **FormSubmit**.

### ⚠️ PIERWSZA AKTYWACJA (WAŻNE!)

Przy **pierwszym** wysłaniu formularza po wdrożeniu:

1. FormSubmit wyśle email weryfikacyjny na **kontakt@wsla.pl**
2. **MUSISZ kliknąć link aktywacyjny** w tym emailu
3. Dopiero po aktywacji formularze będą przychodzić automatycznie

**To trzeba zrobić tylko raz!**

### Format otrzymywanych wiadomości

Każda wiadomość z formularza zawiera:
- Imię i nazwisko klienta
- Email kontaktowy
- Numer telefonu
- Rodzaj kredytu
- Kwota kredytu
- Dodatkowy opis sytuacji
- Datę zgłoszenia

## 🚀 Jak Uruchomić Lokalnie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Budowanie wersji produkcyjnej
npm run build
```

## 🌐 Wdrożenie na Netlify

### Metoda 1: Przez Git (ZALECANA)

1. **Utwórz repozytorium GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TWOJA-NAZWA/nazwa-repo.git
   git push -u origin main
   ```

2. **Połącz z Netlify**
   - Wejdź na [netlify.com](https://netlify.com)
   - Kliknij "Add new site" → "Import an existing project"
   - Wybierz GitHub i autoryzuj
   - Wybierz swoje repozytorium
   - Konfiguracja:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Kliknij "Deploy site"

3. **Aktywuj formularz**
   - Po wdrożeniu wyślij testowy formularz
   - Sprawdź email **kontakt@wsla.pl**
   - Kliknij link aktywacyjny z FormSubmit

### Metoda 2: Ręczne wdrożenie (drag & drop)

1. **Zbuduj projekt**
   ```bash
   npm run build
   ```

2. **Wdroż folder `dist`**
   - Wejdź na [netlify.com](https://netlify.com)
   - Przeciągnij folder `dist` na Netlify
   - Poczekaj na wdrożenie

3. **Aktywuj formularz** (jak wyżej)

## 📝 Własna Domena

1. W panelu Netlify → "Domain settings"
2. Kliknij "Add custom domain"
3. Wpisz swoją domenę (np. `kredyt-darmowy.pl`)
4. Dodaj rekordy DNS zgodnie z instrukcjami Netlify
5. Poczekaj na propagację DNS (do 48h)

## 🎨 Personalizacja

### Kolorystyka Brandingowa
- **Ciemny niebieski:** `#2C3E50`
- **Złoty:** `#D4AF37`

### Zmiana Treści
Wszystkie komponenty znajdują się w `/src/app/components/`:
- `Hero.tsx` - Główna sekcja z nagłówkiem
- `WhatIsSection.tsx` - Czym jest sankcja kredytu darmowego
- `WhoBenefits.tsx` - Kto może skorzystać
- `ProcessSteps.tsx` - Jak przebiega proces
- `WhyChooseUs.tsx` - Dlaczego wybrać kancelarię
- `TeamSection.tsx` - Profile prawników
- `ContactForm.tsx` - Formularz kontaktowy
- `Footer.tsx` - Stopka

### Zmiana Zdjęć Prawników

Obecnie strona używa profesjonalnych zdjęć z Unsplash jako tymczasowych.

**Aby dodać prawdziwe zdjęcia:**

1. Przygotuj zdjęcia w dobrym rozmiarze i jakości
2. Upload zdjęć na Imgur, Cloudinary lub inny hosting obrazów
3. Skopiuj URL zdjęć
4. Otwórz `/src/app/components/TeamSection.tsx`
5. Zamień URL w linii `image:` na URL Twoich zdjęć
6. Zrób to samo w `/src/app/components/Hero.tsx` i `/src/app/components/WhyChooseUs.tsx`

Przykład:
```typescript
image: "https://twoj-hosting.com/wojciech-luty.jpg"
```

### Zmiana Logo

Obecnie logo to tekstowe "WSLA Kancelaria".

**Aby dodać graficzne logo:**

1. Upload logo (PNG z przezroczystym tłem) na hosting
2. Otwórz `/src/app/components/Header.tsx`
3. Zamień sekcję logo na:
```tsx
<img 
  src="https://twoj-hosting.com/logo.png" 
  alt="WSLA Kancelaria" 
  className="h-16 w-auto"
/>
```

## 📞 Dane Kontaktowe

- **Telefon:** +48 694 491 095
- **Email:** kontakt@wsla.pl
- **Adres:** ul. Krupnicza 14/9, 31-123 Kraków

## 🛠 Technologie

- **React** - Framework UI
- **TypeScript** - Typowanie
- **Tailwind CSS v4** - Stylowanie
- **Vite** - Build tool
- **Lucide React** - Ikony
- **FormSubmit** - Wysyłka emaili bez backendu

## 📄 Licencja

© 2026 Steidler, Luty, Adamski, Bućko - Adwokaci i Radcowie Prawni

---

**Pytania?** Skontaktuj się z deweloperem lub kancelarią.
