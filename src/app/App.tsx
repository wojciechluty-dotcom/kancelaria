import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSection } from './components/WhatIsSection';
import { WhoBenefits } from './components/WhoBenefits';
import { ProcessSteps } from './components/ProcessSteps';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Sankcja Kredytu - Kancelaria Steidler, Luty, Adamski, Bućko';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <WhatIsSection />
        <WhoBenefits />
        <ProcessSteps />
        <WhyChooseUs />
        <TeamSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
