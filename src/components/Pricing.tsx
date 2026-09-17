import React from 'react';
import { Check, ShieldCheck, Sparkles, ExternalLink, Download } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PRICING_PLANS, DOWNLOAD_URL } from '../data/pricing';

interface PricingProps {
  currentLang: Language;
}

export const Pricing: React.FC<PricingProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const p = t.pricing;

  return (
    <section id="precos" className="py-24 bg-[#0d1626] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#35c04c] text-xs font-bold uppercase tracking-wider bg-[#35c04c]/10 border border-[#35c04c]/20 px-3 py-1 rounded-full inline-block mb-3">
            Planos &amp; Assinaturas Oficiais
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {p.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {p.subtitle}
          </p>

          {/* Trial Guarantee Banner */}
          <div className="mt-6 inline-flex items-center gap-2 bg-[#1f2733] border border-amber-400/40 rounded-full px-4 py-2 text-xs text-amber-300 font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{p.trialGuarantee}</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-[#1f2733] border-2 border-[#35c04c] shadow-2xl shadow-[#35c04c]/15 lg:-translate-y-2'
                  : 'bg-[#16202e] border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#28a745] to-[#35c04c] text-slate-950 font-black text-[11px] uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <span className="text-xs font-semibold text-[#35c04c] bg-[#35c04c]/10 border border-[#35c04c]/20 px-2.5 py-0.5 rounded-full">
                    Acesso Imediato
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white font-mono tracking-tight">
                      {plan.priceMonth}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">
                      {plan.periodLabel}
                    </span>
                  </div>
                  {plan.billingSummary && (
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {plan.billingSummary}
                    </p>
                  )}
                </div>

                {/* Free Trial Tag Inside Card */}
                <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-2.5 mb-6 text-xs text-amber-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>3 Dias Grátis:</strong> Baixe e teste agora mesmo!</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#35c04c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Hotmart Direct Checkout Button */}
                <a
                  href={plan.hotmartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all text-center mb-3 shadow-lg ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#28a745] to-[#35c04c] text-white hover:brightness-110 shadow-[#35c04c]/20'
                      : 'bg-[#ff444f] hover:bg-[#e03843] text-white shadow-red-900/20'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  {p.buyNow}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="text-center text-[11px] text-slate-400">
                  {p.cancelAnytime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Download Fallback */}
        <div className="mt-14 max-w-2xl mx-auto bg-[#1f2733] border border-slate-700/80 rounded-xl p-6 text-center">
          <h4 className="font-bold text-white text-base mb-1">
            Prefere testar antes de comprar?
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Baixe o executável com 3 dias de trial 100% liberado direto no Google Drive.
          </p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#35c04c] font-bold text-xs border border-slate-700 hover:border-[#35c04c]/40 transition-colors"
          >
            <Download className="w-4 h-4" />
            Baixar DMT4-Deriv v5.7 Grátis (Google Drive)
          </a>
        </div>
      </div>
    </section>
  );
};
