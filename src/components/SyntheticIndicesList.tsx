import React, { useState } from 'react';
import { SYNTHETIC_INDICES, TIMEFRAMES_LIST } from '../data/indices';
import { Language } from '../types';
import { translations } from '../data/translations';
import { TrendingUp, Clock, Filter, ArrowUpRight } from 'lucide-react';

interface SyntheticIndicesListProps {
  currentLang: Language;
}

export const SyntheticIndicesList: React.FC<SyntheticIndicesListProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const ind = t.indices;
  const [filter, setFilter] = useState<'all' | 'volatility' | 'volatility_1s' | 'jump'>('all');

  const filteredIndices = SYNTHETIC_INDICES.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="ativos" className="py-20 bg-[#0d1626] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#35c04c] text-xs font-bold uppercase tracking-wider bg-[#35c04c]/10 border border-[#35c04c]/20 px-3 py-1 rounded-full inline-block mb-3">
            Cobertura Completa Deriv
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {ind.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {ind.subtitle}
          </p>
        </div>

        {/* Timeframe Badges Showcase */}
        <div className="bg-[#1f2733]/60 border border-slate-800 rounded-xl p-4 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Clock className="w-4 h-4 text-[#35c04c]" />
            <span>Timeframes Gerados Simultaneamente para Cada Ativo:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap font-mono">
            {TIMEFRAMES_LIST.map((tf) => (
              <span
                key={tf.code}
                className="px-2.5 py-1 rounded bg-[#0d1626] border border-slate-700 text-[#35c04c] text-xs font-bold"
              >
                {tf.code} ({tf.label})
              </span>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#35c04c] text-slate-950 font-black shadow-md'
                : 'bg-[#1f2733] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {ind.filterAll}
          </button>
          <button
            onClick={() => setFilter('volatility')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'volatility'
                ? 'bg-[#35c04c] text-slate-950 font-black shadow-md'
                : 'bg-[#1f2733] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {ind.filterVol}
          </button>
          <button
            onClick={() => setFilter('volatility_1s')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'volatility_1s'
                ? 'bg-[#35c04c] text-slate-950 font-black shadow-md'
                : 'bg-[#1f2733] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {ind.filterVol1s}
          </button>
          <button
            onClick={() => setFilter('jump')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'jump'
                ? 'bg-[#35c04c] text-slate-950 font-black shadow-md'
                : 'bg-[#1f2733] text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            {ind.filterJump}
          </button>
        </div>

        {/* Indices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredIndices.map((item) => (
            <div
              key={item.symbol}
              className="bg-[#1f2733]/70 hover:bg-[#1f2733] border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-white font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-700/80 group-hover:border-[#35c04c]/50 transition-colors">
                    {item.mt4Code}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ({item.symbol})
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-[#0d1626] px-2 py-0.5 rounded border border-slate-800">
                  {item.digits} dígitos
                </span>
              </div>

              <h4 className="font-bold text-slate-200 text-sm mb-1 group-hover:text-[#35c04c] transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {item.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Formato MT4:</span>
                <span className="text-emerald-400 font-bold">{item.mt4Code}1.hst ... {item.mt4Code}1440.hst</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
