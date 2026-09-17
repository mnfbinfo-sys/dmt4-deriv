import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveAppSimulator } from './components/InteractiveAppSimulator';
import { Features } from './components/Features';
import { EntryModesExplainer } from './components/EntryModesExplainer';
import { SyntheticIndicesList } from './components/SyntheticIndicesList';
import { SetupTutorial } from './components/SetupTutorial';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingSupportWidget } from './components/FloatingSupportWidget';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('PT');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0b1320] text-slate-100 flex flex-col selection:bg-[#35c04c]/30 selection:text-white">
      {/* Header with language picker and direct trial download */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with stats & CTAs */}
        <Hero currentLang={currentLang} />

        {/* The interactive desktop app simulator & orders panel */}
        <InteractiveAppSimulator
          currentLang={currentLang}
          onOpenOrdersModal={() => {}}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* High performance feature breakdown */}
        <Features currentLang={currentLang} />

        {/* 3 Entry Modes visual guide (Mesma Vela, Próxima Vela, Cruzada) */}
        <EntryModesExplainer currentLang={currentLang} />

        {/* Complete 15 Synthetic Indices catalog & 7 timeframes */}
        <SyntheticIndicesList currentLang={currentLang} />

        {/* 3-Step easy installation & token guide */}
        <SetupTutorial currentLang={currentLang} />

        {/* Pricing plans & 3-day trial guarantee */}
        <Pricing currentLang={currentLang} />

        {/* Technical FAQ */}
        <FAQ currentLang={currentLang} />
      </main>

      {/* Footer with legal disclaimer and fast links */}
      <Footer
        currentLang={currentLang}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Contact & Support Modal (WhatsApp / Telegram / Email) */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        currentLang={currentLang}
      />

      {/* Floating fast support & trial badge */}
      <FloatingSupportWidget
        currentLang={currentLang}
        onOpenContact={() => setContactModalOpen(true)}
      />
    </div>
  );
}
