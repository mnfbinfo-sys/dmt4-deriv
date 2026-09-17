import React, { useState } from 'react';
import {
  Activity,
  Download,
  Menu,
  X,
  Globe,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DOWNLOAD_URL } from '../data/pricing';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const langLabels: Record<Language, string> = {
    PT: 'PT-BR',
    EN: 'EN',
    ES: 'ES',
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0e1726] border-b border-slate-800 text-xs py-1.5 px-4 text-center flex items-center justify-center gap-3 text-slate-300">
        <span className="inline-flex items-center gap-1.5 font-semibold text-[#35c04c]">
          <span className="w-2 h-2 rounded-full bg-[#35c04c] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#35c04c]" />
          {t.meta.version}
        </span>
        <span className="hidden sm:inline text-slate-500">|</span>
        <span className="font-medium text-amber-300/90 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          {t.meta.trialBadge}
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#1f2733]/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo with Desktop App Aesthetic */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1f2733] to-[#0d1626] border border-[#35c04c]/40 flex items-center justify-center shadow-md shadow-[#35c04c]/10 group-hover:border-[#35c04c] transition-colors">
              <Activity className="w-5 h-5 text-[#35c04c]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-tight text-white">
                  DMT4-<span className="text-[#35c04c]">Deriv</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#35c04c]/15 text-[#35c04c] px-1.5 py-0.5 rounded border border-[#35c04c]/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Bridge Deriv ➔ MT4 .HST
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
            <a href="#simulador" className="hover:text-[#35c04c] transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35c04c]" />
              {t.nav.liveDemo}
            </a>
            <a href="#recursos" className="hover:text-[#35c04c] transition-colors">
              {t.nav.features}
            </a>
            <a href="#modos" className="hover:text-[#35c04c] transition-colors">
              {t.nav.modes}
            </a>
            <a href="#ativos" className="hover:text-[#35c04c] transition-colors">
              {t.nav.indices}
            </a>
            <a href="#passos" className="hover:text-[#35c04c] transition-colors">
              {t.nav.howItWorks}
            </a>
            <a href="#precos" className="hover:text-[#35c04c] transition-colors font-semibold text-white">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="hover:text-[#35c04c] transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher matching app combobox */}
            <div className="relative flex items-center bg-[#0d1626] rounded-md border border-slate-700 px-2 py-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
              <select
                aria-label="Selecionar Idioma"
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-slate-200 font-bold focus:outline-none cursor-pointer pr-1"
              >
                <option value="PT" className="bg-[#1f2733] text-white">PT-BR</option>
                <option value="EN" className="bg-[#1f2733] text-white">EN</option>
                <option value="ES" className="bg-[#1f2733] text-white">ES</option>
              </select>
            </div>

            {/* Direct Support Button */}
            <button
              onClick={onOpenContact}
              className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Suporte WhatsApp / Telegram"
            >
              <MessageCircle className="w-4 h-4 text-[#35c04c]" />
            </button>

            {/* Download Free Trial CTA */}
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-md bg-gradient-to-r from-[#28a745] to-[#35c04c] text-white hover:brightness-110 transition-all shadow-sm hover:shadow-[#35c04c]/20"
            >
              <Download className="w-3.5 h-3.5" />
              {t.nav.downloadBtn}
            </a>

            {/* Buy / Hotmart anchor */}
            <a
              href="#precos"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-md bg-[#ff444f] hover:bg-[#e03843] text-white transition-all shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="relative flex items-center bg-[#0d1626] rounded border border-slate-700 px-1.5 py-1 text-xs">
              <select
                aria-label="Idioma"
                value={currentLang}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-slate-200 font-bold focus:outline-none"
              >
                <option value="PT" className="bg-[#1f2733]">PT</option>
                <option value="EN" className="bg-[#1f2733]">EN</option>
                <option value="ES" className="bg-[#1f2733]">ES</option>
              </select>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1f2733] border-t border-slate-700 px-4 py-6 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#35c04c] font-bold py-1"
              >
                {t.nav.liveDemo}
              </a>
              <a
                href="#recursos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 py-1"
              >
                {t.nav.features}
              </a>
              <a
                href="#modos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 py-1"
              >
                {t.nav.modes}
              </a>
              <a
                href="#ativos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 py-1"
              >
                {t.nav.indices}
              </a>
              <a
                href="#passos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 py-1"
              >
                {t.nav.howItWorks}
              </a>
              <a
                href="#precos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-bold py-1"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 py-1"
              >
                {t.nav.faq}
              </a>
            </div>

            <div className="pt-4 border-t border-slate-700 flex flex-col gap-2.5">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-[#35c04c] font-bold text-white shadow-md text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.nav.downloadBtn}
              </a>
              <a
                href="#precos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-[#ff444f] font-bold text-white text-sm"
              >
                {t.nav.getStarted}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-2 rounded-lg bg-slate-800 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 border border-slate-700"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#35c04c]" />
                Suporte WhatsApp / Telegram
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
