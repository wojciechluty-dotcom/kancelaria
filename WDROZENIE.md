# 🚀 Szybkie Wdrożenie na Netlify

## Krok 1: Przygotowanie Projektu

Upewnij się, że projekt działa lokalnie:

```bash
npm install
npm run dev
```

Otwórz http://localhost:5173 i sprawdź czy strona się wyświetla.

## Krok 2: Wyślij kod na GitHub

```bash
# Inicjalizuj repozytorium Git
git init

# Dodaj wszystkie pliki
git add .

# Wykonaj pierwszy commit
git commit -m "Strona kancelarii - sankcja kredytu darmowego"

# Utwórz repozytorium na GitHub (github.com)
# Następnie połącz lokalne repo z GitHub:
git remote add origin https://github.com/TWOJA-NAZWA/NAZWA-REPO.git

# Wyślij kod na GitHub
git push -u origin main
```

## Krok 3: Wdróż na Netlify

1. **Wejdź na https://netlify.com i zaloguj się**

2. **Kliknij "Add new site" → "Import an existing project"**

3. **Wybierz GitHub** i zaautoryzuj dostęp do swojego konta

4. **Wybierz swoje repozytorium** z listy

5. **Ustaw konfigurację:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Branch to deploy:** `main`

6. **Kliknij "Deploy site"** i poczekaj na zakończenie

## Krok 4: Aktywacja Formularza ⚠️ WAŻNE!

**MUSISZ TO ZROBIĆ, inaczej formularze nie będą działać:**

1. Po wdrożeniu otwórz swoją stronę na Netlify
2. Wypełnij formularz kontaktowy testowymi danymi i wyślij
3. **Sprawdź email kontakt@wsla.pl**
4. **Znajdź email od FormSubmit i KLIKNIJ link aktywacyjny**
5. Od teraz wszystkie formularze będą automatycznie wysyłane

## Krok 5: Dodaj Własną Domenę (opcjonalnie)

1. W panelu Netlify → **"Domain settings"**
2. Kliknij **"Add custom domain"**
3. Wpisz swoją domenę (np. `kredyt-darmowy.pl`)
4. Netlify pokaże jakie rekordy DNS musisz dodać
5. Wejdź do panelu swojego dostawcy domeny i dodaj rekordy
6. Poczekaj 24-48h na propagację DNS

---

## 🔄 Aktualizacje Strony

Jeśli chcesz zmienić coś na stronie:

```bash
# Edytuj pliki w /src/app/components/

# Zapisz zmiany w Git
git add .
git commit -m "Opis zmian"
git push

# Netlify automatycznie zaktualizuje stronę!
```

---

## 📝 Najważniejsze Pliki do Edycji

- `/src/app/components/Hero.tsx` - Główny nagłówek
- `/src/app/components/TeamSection.tsx` - Profile prawników
- `/src/app/components/ContactForm.tsx` - Formularz (jeśli chcesz zmienić email)
- `/src/app/components/Footer.tsx` - Stopka

---

## ❓ Problemy?

**Strona nie buduje się:**
- Sprawdź czy masz zainstalowane `node_modules`: `npm install`
- Uruchom `npm run build` lokalnie i sprawdź błędy

**Formularze nie działają:**
- Sprawdź czy aktywowałeś FormSubmit (Krok 4)
- Sprawdź skrzynkę SPAM w emailu kontakt@wsla.pl

**Strona się nie aktualizuje:**
- Sprawdź czy zmiany są na GitHubie: `git push`
- Poczekaj 1-2 minuty na rebuild Netlify
- Wymuś rebuild w panelu Netlify: "Trigger deploy"

---

**Powodzenia! 🎉**
