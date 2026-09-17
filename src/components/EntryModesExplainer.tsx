import React, { useState } from 'react';
import { Sliders, Zap, Clock, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface EntryModesExplainerProps {
  currentLang: Language;
}

export const EntryModesExplainer: React.FC<EntryModesExplainerProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const m = t.modes;
  const [selectedMode, setSelectedMode] = useState<'same' | 'next' | 'cross'>('same');

  return (
    <section id="modos" className="py-20 bg-[#0b1320] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Estratégia de Execução Precisa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {m.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {m.subtitle}
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mode 1: Mesma Vela */}
          <div
            onClick={() => setSelectedMode('same')}
            className={`rounded-xl p-6 border transition-all cursor-pointer ${
              selectedMode === 'same'
                ? 'bg-[#1f2733] border-[#35c04c] shadow-xl shadow-[#35c04c]/10'
                : 'bg-[#101b2d] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-[#35c04c]/15 text-[#35c04c] flex items-center justify-center font-black">
                <Zap className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold text-[#35c04c] bg-[#35c04c]/10 px-2.5 py-1 rounded-full border border-[#35c04c]/30">
                {m.sameBadge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {m.sameTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {m.sameDesc}
            </p>

            <div className="p-3 bg-black/40 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              <div className="text-slate-400">Tempo de disparo:</div>
              <div className="text-[#35c04c] font-bold">Imediato (ao clicar ou receber sinal)</div>
            </div>
          </div>

          {/* Mode 2: Próxima Vela */}
          <div
            onClick={() => setSelectedMode('next')}
            className={`rounded-xl p-6 border transition-all cursor-pointer ${
              selectedMode === 'next'
                ? 'bg-[#1f2733] border-[#17a2b8] shadow-xl shadow-[#17a2b8]/10'
                : 'bg-[#101b2d] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-[#17a2b8]/15 text-[#17a2b8] flex items-center justify-center font-black">
                <Clock className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold text-[#17a2b8] bg-[#17a2b8]/10 px-2.5 py-1 rounded-full border border-[#17a2b8]/30">
                {m.nextBadge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {m.nextTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {m.nextDesc}
            </p>

            <div className="p-3 bg-black/40 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              <div className="text-slate-400">Tempo de disparo:</div>
              <div className="text-[#17a2b8] font-bold">Abertura da nova vela</div>
            </div>
          </div>

          {/* Mode 3: Cruzada */}
          <div
            onClick={() => setSelectedMode('cross')}
            className={`rounded-xl p-6 border transition-all cursor-pointer ${
              selectedMode === 'cross'
                ? 'bg-[#1f2733] border-amber-400 shadow-xl shadow-amber-400/10'
                : 'bg-[#101b2d] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-amber-400/15 text-amber-400 flex items-center justify-center font-black">
                <Sliders className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                {m.crossBadge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              {m.crossTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {m.crossDesc}
            </p>

            <div className="p-3 bg-black/40 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
              <div className="text-slate-400">Tempo de disparo:</div>
              <div className="text-amber-400 font-bold">Duração contínua (cruza o término do candle)</div>
            </div>
          </div>
        </div>

        {/* Visual Timeline Diagram */}
        <div className="mt-10 bg-[#1f2733] border border-slate-800 rounded-xl p-6 text-white">
          <div className="text-xs uppercase font-bold text-slate-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#35c04c]" />
            Linha do Tempo Visual do Candle &amp; Ponto de Abertura da Ordem
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-4 rounded-lg bg-[#0e1726] border border-slate-800">
              <div className="font-bold text-[#35c04c] mb-1">MESMA VELA (Scalping)</div>
              <div className="text-slate-400 text-[11px] mb-3">
                [Vela Atual: 00:23s] ➔ Disparo Instantâneo ➔ Validade: 60s
              </div>
              <div className="w-full bg-slate-800 h-2 rounded overflow-hidden">
                <div className="w-1/3 bg-[#35c04c] h-full" />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0e1726] border border-slate-800">
              <div className="font-bold text-[#17a2b8] mb-1">PRÓXIMA VELA (Price Action)</div>
              <div className="text-slate-400 text-[11px] mb-3">
                [Prepara Ordem] ➔ Disparo na Abertura da Nova Vela
              </div>
              <div className="w-full bg-slate-800 h-2 rounded overflow-hidden">
                <div className="w-full bg-[#17a2b8] h-full" />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0e1726] border border-slate-800">
              <div className="font-bold text-amber-400 mb-1">CRUZADA (Duração Contínua)</div>
              <div className="text-slate-400 text-[11px] mb-3">
                [Entrada aos 20s do Candle 1] ➔ [Expira aos 20s do Candle 2]
              </div>
              <div className="w-full bg-slate-800 h-2 rounded overflow-hidden">
                <div className="w-3/4 bg-amber-400 h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
