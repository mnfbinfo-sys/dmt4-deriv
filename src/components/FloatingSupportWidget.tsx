import React from 'react';
import { MessageCircle, Download, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SUPPORT_CONTACTS, DOWNLOAD_URL } from '../data/pricing';

interface FloatingSupportWidgetProps {
  currentLang: Language;
  onOpenContact: () => void;
}

export const FloatingSupportWidget: React.FC<FloatingSupportWidgetProps> = ({
  currentLang,
  onOpenContact,
}) => {
  return (
    <aside aria-label="Ações Rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* 3-day trial pill alert */}
      <a
        href={DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-[#1f2733] border border-[#35c04c]/40 text-white text-xs px-3.5 py-1.5 rounded-full shadow-xl hover:border-[#35c04c] transition-all group"
      >
        <span className="w-2 h-2 rounded-full bg-[#35c04c] animate-ping" />
        <span className="font-bold text-[#35c04c]">Trial 3 Dias Grátis</span>
        <span className="text-slate-400 group-hover:text-white">Baixar Agora ➔</span>
      </a>

      {/* WhatsApp direct floating button */}
      <button
        onClick={onOpenContact}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer group"
        title="Suporte WhatsApp / Telegram"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    </aside>
  );
};
