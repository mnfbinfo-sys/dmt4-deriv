import React from 'react';
import { Download, Key, Play, ExternalLink, ArrowRight, FolderCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DOWNLOAD_URL, SUPPORT_CONTACTS } from '../data/pricing';

interface SetupTutorialProps {
  currentLang: Language;
}

export const SetupTutorial: React.FC<SetupTutorialProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const s = t.steps;

  return (
    <section id="passos" className="py-20 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Simplicidade Máxima
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {s.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {s.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-[#1f2733] border border-slate-800 rounded-xl p-7 relative flex flex-col justify-between group hover:border-[#35c04c]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#35c04c]/10 text-[#35c04c] flex items-center justify-center font-black text-lg mb-5 border border-[#35c04c]/20">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#35c04c] transition-colors">
                {s.step1Title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {s.step1Desc}
              </p>
            </div>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#35c04c] hover:underline"
            >
              Baixar pacote no Google Drive
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1f2733] border border-slate-800 rounded-xl p-7 relative flex flex-col justify-between group hover:border-[#ff444f]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ff444f]/10 text-[#ff444f] flex items-center justify-center font-black text-lg mb-5 border border-[#ff444f]/20">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff444f] transition-colors">
                {s.step2Title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {s.step2Desc}
              </p>
            </div>
            <a
              href={SUPPORT_CONTACTS.derivTokenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff444f] hover:underline"
            >
              Gerar Token PAT na Deriv (Grátis)
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1f2733] border border-slate-800 rounded-xl p-7 relative flex flex-col justify-between group hover:border-[#17a2b8]/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#17a2b8]/10 text-[#17a2b8] flex items-center justify-center font-black text-lg mb-5 border border-[#17a2b8]/20">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#17a2b8] transition-colors">
                {s.step3Title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {s.step3Desc}
              </p>
            </div>
            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <FolderCheck className="w-4 h-4 text-[#17a2b8]" />
              Detecção automática da pasta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
