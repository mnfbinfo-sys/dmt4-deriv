import React from 'react';
import {
  Zap,
  Sliders,
  Layers,
  BarChart3,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FeaturesProps {
  currentLang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const f = t.features;

  const featureItems = [
    {
      icon: <Zap className="w-6 h-6 text-[#35c04c]" />,
      title: f.item1Title,
      description: f.item1Desc,
      tag: 'Latência <50ms',
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#17a2b8]" />,
      title: f.item2Title,
      description: f.item2Desc,
      tag: 'OrderBridge v5.7',
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      title: f.item3Title,
      description: f.item3Desc,
      tag: 'Execução 1-Click',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: f.item4Title,
      description: f.item4Desc,
      tag: '105 Gráficos Simultâneos',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: f.item5Title,
      description: f.item5Desc,
      tag: 'Métricas ao Vivo',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-rose-400" />,
      title: f.item6Title,
      description: f.item6Desc,
      tag: 'Demo & Real Integrados',
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-[#0d1626] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#35c04c] text-xs font-bold uppercase tracking-wider bg-[#35c04c]/10 border border-[#35c04c]/20 px-3 py-1 rounded-full inline-block mb-3">
            Engenharia de Alta Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {f.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {f.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2733]/80 hover:bg-[#1f2733] border border-slate-800 hover:border-slate-700 rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-700/50">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#35c04c] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
