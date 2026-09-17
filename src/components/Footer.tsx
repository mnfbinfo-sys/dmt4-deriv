import React from 'react';
import { Activity, Download, ShieldAlert, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DOWNLOAD_URL, SUPPORT_CONTACTS } from '../data/pricing';

interface FooterProps {
  currentLang: Language;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenContact }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#080d16] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Version */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1f2733] border border-[#35c04c]/30 flex items-center justify-center">
              <Activity className="w-4 h-4 text-[#35c04c]" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                DMT4-<span className="text-[#35c04c]">Deriv</span> Pro
              </span>
              <span className="text-[11px] text-slate-500 ml-2 font-mono">
                {t.meta.version}
              </span>
            </div>
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#simulador" className="hover:text-[#35c04c] transition-colors">
              Simulador
            </a>
            <a href="#recursos" className="hover:text-[#35c04c] transition-colors">
              Recursos
            </a>
            <a href="#modos" className="hover:text-[#35c04c] transition-colors">
              Modos de Entrada
            </a>
            <a href="#ativos" className="hover:text-[#35c04c] transition-colors">
              Índices Sintéticos
            </a>
            <a href="#precos" className="hover:text-[#35c04c] transition-colors font-bold text-white">
              Planos & Preços
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-[#35c04c] transition-colors cursor-pointer"
            >
              Suporte WhatsApp
            </button>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#35c04c] hover:underline font-bold"
            >
              Google Drive (Download)
            </a>
          </div>
        </div>

        {/* Risk Disclaimer Box */}
        <div className="bg-[#0e1726] border border-slate-800/80 rounded-xl p-4 sm:p-5 text-slate-400 text-[11px] leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>{t.footer.disclaimer}</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido para traders de alta performance</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#35c04c] font-mono font-bold">Latency ~50ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
