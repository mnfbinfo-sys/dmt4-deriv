import React, { useState } from 'react';
import { X, MessageCircle, Send, Mail, Copy, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { SUPPORT_CONTACTS } from '../data/pricing';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);
  const t = translations[currentLang];
  const c = t.contactModal;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SUPPORT_CONTACTS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#1f2733] border border-slate-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Title Bar matching app MT_BAR_BG */}
        <div className="bg-[#151c27] px-5 py-4 flex items-center justify-between border-b border-slate-800">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#35c04c]" />
            {c.title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-300 text-center leading-relaxed">
            {c.desc}
          </p>

          {/* WhatsApp Button */}
          <a
            href={SUPPORT_CONTACTS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            {c.btnWhatsApp}
          </a>

          {/* Telegram Button */}
          <a
            href={SUPPORT_CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
          >
            <Send className="w-5 h-5" />
            {c.btnTelegram}
          </a>

          {/* Email Copy Box */}
          <div className="pt-2">
            <button
              onClick={handleCopyEmail}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#35c04c]" />
                  <span className="text-[#35c04c] font-bold">{c.emailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-[#ff444f]" />
                  <span>{c.copyEmail}</span>
                  <Copy className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#151c27] px-6 py-3 text-center border-t border-slate-800">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white font-medium cursor-pointer"
          >
            {c.close}
          </button>
        </div>
      </div>
    </div>
  );
};
