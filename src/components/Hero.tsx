import React from 'react';
import {
  Download,
  Zap,
  TrendingUp,
  Server,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DOWNLOAD_URL } from '../data/pricing';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800 bg-gradient-to-b from-[#0d1626] via-[#101b2d] to-[#0d1626]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-[#35c04c]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f2733] border border-slate-700 text-slate-300 text-xs font-semibold mb-6 shadow-md hover:border-[#35c04c]/50 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35c04c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35c04c]"></span>
            </span>
            <span className="text-[#35c04c] font-bold">{t.hero.badge}</span>
            <span className="text-slate-500">•</span>
            <span>{t.meta.version}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {t.hero.titleHighlight}
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35c04c] to-emerald-400">
              {t.hero.titleSuffix}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 mb-9 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#28a745] to-[#35c04c] text-white font-extrabold text-base shadow-xl shadow-[#35c04c]/20 hover:shadow-[#35c04c]/35 hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              <Download className="w-5 h-5" />
              {t.hero.btnDownload}
            </a>

            <a
              href="#precos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1f2733] hover:bg-[#2c3645] border border-slate-700 hover:border-slate-600 text-white font-bold text-base transition-all shadow-md"
            >
              {t.hero.btnViewPlans}
              <ChevronRight className="w-4 h-4 text-[#35c04c]" />
            </a>

            <a
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-semibold transition-all"
            >
              {t.hero.btnLiveDemo}
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#35c04c]" />
              {t.hero.activeTraders}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#35c04c]" />
              Sem necessidade de cartão para testar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#35c04c]" />
              {t.hero.trustNotice}
            </span>
          </div>
        </div>

        {/* 4 Key Performance Metric Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#1f2733]/70 backdrop-blur border border-slate-800/80 rounded-xl p-5 text-center hover:border-[#35c04c]/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#35c04c]/10 text-[#35c04c] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              ~50<span className="text-[#35c04c] text-lg">ms</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Latência Streaming WebSocket
            </div>
          </div>

          <div className="bg-[#1f2733]/70 backdrop-blur border border-slate-800/80 rounded-xl p-5 text-center hover:border-[#35c04c]/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#35c04c]/10 text-[#35c04c] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              99.9<span className="text-[#35c04c] text-lg">%</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Uptime com Heartbeat Seguro
            </div>
          </div>

          <div className="bg-[#1f2733]/70 backdrop-blur border border-slate-800/80 rounded-xl p-5 text-center hover:border-[#35c04c]/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#35c04c]/10 text-[#35c04c] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              3 <span className="text-[#35c04c] text-lg">DIAS</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Trial Grátis 100% Desbloqueado
            </div>
          </div>

          <div className="bg-[#1f2733]/70 backdrop-blur border border-slate-800/80 rounded-xl p-5 text-center hover:border-[#35c04c]/40 transition-colors group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#35c04c]/10 text-[#35c04c] flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              15 <span className="text-[#35c04c] text-lg">ÍNDICES</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Volatility & Jump em 7 Timeframes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
