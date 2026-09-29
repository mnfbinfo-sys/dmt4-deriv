import React, { useState } from 'react';
import {
  Zap,
  Sliders,
  Layers,
  BarChart3,
  ShieldCheck,
  RefreshCw,
  Bot,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Settings,
  AlertTriangle,
  Play,
  ArrowRight,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FeaturesProps {
  currentLang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const f = t.features;

  const [activeStepTab, setActiveStepTab] = useState<'passo' | 'parametros'>('passo');
  const [copiedConfig, setCopiedConfig] = useState(false);

  const isPT = currentLang === 'PT';
  const isES = currentLang === 'ES';

  const autoTradeTexts = {
    badge: isPT
      ? '🔥 GRANDE NOVIDADE: OPERAÇÕES NO AUTOMÁTICO'
      : isES
      ? '🔥 GRAN NOVEDAD: OPERACIONES EN AUTOMÁTICO'
      : '🔥 MAJOR UPDATE: 100% AUTOMATED TRADING',
    card1Title: isPT
      ? 'Envio 100% Automático de Ordens'
      : isES
      ? 'Envío 100% Automático de Órdenes'
      : '100% Automated Order Execution',
    card1Desc: isPT
      ? 'Conecte qualquer indicador MQL4 com setas ou buffers. O DMT4 detecta o sinal em tempo real e dispara na Deriv via WebSocket sem intervenção manual.'
      : isES
      ? 'Conecte cualquier indicador MQL4 con flechas o búferes. DMT4 detecta la señal en tiempo real y dispara en Deriv vía WebSocket sin clics manuales.'
      : 'Connect any MQL4 arrow indicator. DMT4 reads buffer signals in real time and fires orders on Deriv via WebSocket with zero human clicks.',
    card2Title: isPT
      ? 'Gestão de Martingale & Stop Automático'
      : isES
      ? 'Gestión de Martingale y Stop Automático'
      : 'Automated Martingale & Risk Engine',
    card2Desc: isPT
      ? 'Recuperação inteligente de perdas (Gale 1 e 2 configuráveis), travas de Stop Loss diário e Take Profit automático para proteger seu capital.'
      : isES
      ? 'Recuperación inteligente de pérdidas (Gale 1 y 2), bloqueo de Stop Loss diario y Take Profit automático para proteger su capital.'
      : 'Intelligent loss recovery (configurable Gale 1 & 2), daily Stop Loss safeguard and auto Take Profit to protect your balance.',
    panelTitle: isPT
      ? 'Como Configurar o Envio Automático no MetaTrader 4'
      : isES
      ? 'Cómo Configurar el Envío Automático en MetaTrader 4'
      : 'How to Setup Automated Order Sending in MetaTrader 4',
    panelSubtitle: isPT
      ? 'Siga os 4 passos abaixo para colocar seus indicadores do MT4 para enviar ordens diretamente na Deriv sem você precisar clicar em nada.'
      : isES
      ? 'Siga estos 4 pasos para conectar sus indicadores de MT4 y enviar órdenes a Deriv de forma 100% automática.'
      : 'Follow these 4 steps to link your MT4 indicators and send automated trades to Deriv without manual intervention.',
  };

  const featureItems = [
    {
      icon: <Bot className="w-6 h-6 text-[#35c04c]" />,
      title: autoTradeTexts.card1Title,
      description: autoTradeTexts.card1Desc,
      tag: isPT ? '🔥 NOVO: Robô Auto-Trade' : isES ? '🔥 NUEVO: Bot Auto-Trade' : '🔥 NEW: Auto-Trade Bot',
      highlight: true,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: autoTradeTexts.card2Title,
      description: autoTradeTexts.card2Desc,
      tag: isPT ? 'Proteção Automática' : isES ? 'Protección Automática' : 'Smart Risk Control',
      highlight: true,
    },
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
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
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

  const handleCopyParams = () => {
    const configText = `// Configuração DMT4-Deriv AutoTrade EA
Indicador_Nome = "MeuIndicadorDeSetas"
Buffer_Seta_CALL = 0
Buffer_Seta_PUT = 1
Valor_Entrada_USD = 5.00
Expiracao_Minutos = 1
Usar_Martingale = true
Fator_Multiplicador = 2.0
Maximo_Niveis_Gale = 2
Stop_Loss_Diario_USD = 50.00
Take_Profit_Diario_USD = 100.00`;
    navigator.clipboard.writeText(configText);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2500);
  };

  return (
    <section id="recursos" className="py-20 bg-[#0d1626] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#35c04c] text-xs font-bold uppercase tracking-wider bg-[#35c04c]/10 border border-[#35c04c]/20 px-3 py-1 rounded-full inline-block mb-3">
            {autoTradeTexts.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {f.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            {f.subtitle}
          </p>
        </div>

        {/* Grade de Recursos (com 2 Cartões de Destaque para Auto-Trade) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group flex flex-col justify-between ${
                item.highlight
                  ? 'bg-gradient-to-b from-[#1b2a47] to-[#131f33] border-2 border-[#35c04c]/50 hover:border-[#35c04c]'
                  : 'bg-[#1f2733]/80 hover:bg-[#1f2733] border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                      item.highlight
                        ? 'text-[#35c04c] bg-[#35c04c]/10 border-[#35c04c]/30'
                        : 'text-slate-400 bg-slate-900/90 border-slate-700/50'
                    }`}
                  >
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

              {item.highlight && (
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs font-semibold text-[#35c04c]">
                  <span>Ver configuração abaixo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* PAINEL DEDICADO: Como Configurar o Envio Automático no MT4 */}
        <div id="configurar-automatico" className="rounded-2xl border-2 border-[#35c04c]/40 bg-[#121c2e] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#35c04c]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-700/80 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-[#35c04c]/20 text-[#35c04c] border border-[#35c04c]/40">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35c04c]">
                  {isPT ? 'Tutorial de Automação' : isES ? 'Tutorial de Automatización' : 'Automation Tutorial'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {autoTradeTexts.panelTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                {autoTradeTexts.panelSubtitle}
              </p>
            </div>

            {/* Alternador de Abas */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveStepTab('passo')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeStepTab === 'passo'
                    ? 'bg-[#35c04c] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📋 {isPT ? 'Passo a Passo (4 Etapas)' : isES ? 'Paso a Paso (4 Etapas)' : 'Step by Step (4 Steps)'}
              </button>
              <button
                type="button"
                onClick={() => setActiveStepTab('parametros')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeStepTab === 'parametros'
                    ? 'bg-[#35c04c] text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚙️ {isPT ? 'Parâmetros do Robô (Inputs)' : isES ? 'Parámetros del Bot (Inputs)' : 'Bot Parameters (Inputs)'}
              </button>
            </div>
          </div>

          {/* ABA 1: Passo a Passo Visual */}
          {activeStepTab === 'passo' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 relative z-10">
              
              {/* Etapa 1 */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#35c04c]/20 text-[#35c04c] font-black text-sm flex items-center justify-center border border-[#35c04c]/40">
                      1
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      MetaTrader 4
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {isPT ? 'Permissões do MT4' : isES ? 'Permisos de MT4' : 'MT4 Permissions'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isPT
                      ? 'No MT4, pressione Ctrl+O (Ferramentas > Opções) e abra a aba "Expert Advisors". Marque "Permitir AutoTrading" e "Permitir importação de DLL".'
                      : isES
                      ? 'En MT4, presione Ctrl+O (Herramientas > Opciones) y en "Expert Advisors" marque "Permitir AutoTrading" y "Permitir importación de DLL".'
                      : 'In MT4, press Ctrl+O (Tools > Options) > "Expert Advisors" tab. Enable "Allow AutoTrading" and "Allow DLL imports".'}
                  </p>
                </div>
                <div className="mt-4 p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-emerald-400 font-mono">
                  ✓ AutoTrading ON & DLLs
                </div>
              </div>

              {/* Etapa 2 */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#17a2b8]/20 text-[#17a2b8] font-black text-sm flex items-center justify-center border border-[#17a2b8]/40">
                      2
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      Gráfico MT4
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {isPT ? 'Anexar o EA no Gráfico' : isES ? 'Adjuntar EA al Gráfico' : 'Attach EA to Chart'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isPT
                      ? 'Abra o gráfico espelhado (ex: Volatility 100 Index M1). No Navegador do MT4, arraste o EA "DMT4_OrderBridge" para dentro do gráfico.'
                      : isES
                      ? 'Abra el gráfico espejado (ej: Volatility 100 M1). En el Navegador de MT4, arrastre el EA "DMT4_OrderBridge" hacia el gráfico.'
                      : 'Open the mirrored chart (e.g., Volatility 100 M1). Drag and drop "DMT4_OrderBridge" EA from Navigator into your chart.'}
                  </p>
                </div>
                <div className="mt-4 p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-cyan-400 font-mono">
                  📊 Gráfico + EA DMT4
                </div>
              </div>

              {/* Etapa 3 */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 font-black text-sm flex items-center justify-center border border-amber-400/40">
                      3
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      Indicadores
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {isPT ? 'Vincular Indicador' : isES ? 'Vincular Indicador' : 'Link Indicator Buffers'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isPT
                      ? 'Nas propriedades do EA, digite o nome exato do seu indicador técnico e defina qual buffer dispara CALL (compra) e qual dispara PUT (venda).'
                      : isES
                      ? 'En los inputs del EA, ingrese el nombre exacto de su indicador técnico y asigne el búfer de CALL (compra) y PUT (venta).'
                      : 'In EA properties, enter your indicator name and map arrow buffers: Buffer 0 for CALL, Buffer 1 for PUT.'}
                  </p>
                </div>
                <div className="mt-4 p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-amber-300 font-mono">
                  🎯 Seta MT4 ➔ Deriv
                </div>
              </div>

              {/* Etapa 4 */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-purple-400/20 text-purple-400 font-black text-sm flex items-center justify-center border border-purple-400/40">
                      4
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      Automação Ativa
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {isPT ? 'Disparo em Milissegundos' : isES ? 'Disparo en Milisegundos' : 'Instant Execution'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isPT
                      ? 'Pronto! Quando a seta surgir no MT4, o DMT4 envia a ordem para a Deriv em ~40ms. O Martingale e Stop Loss gerenciam o risco automaticamente.'
                      : isES
                      ? '¡Listo! Cuando aparezca la flecha en MT4, DMT4 envía la orden a Deriv en ~40ms con gestión de riesgo y Martingale automático.'
                      : 'Ready! As soon as an arrow appears in MT4, DMT4 sends the contract to Deriv in ~40ms with automated risk safeguard.'}
                  </p>
                </div>
                <div className="mt-4 p-2 rounded bg-slate-950/80 border border-slate-800 text-[11px] text-purple-300 font-mono">
                  ⚡ 40ms WebSocket Exec
                </div>
              </div>

            </div>
          )}

          {/* ABA 2: Tabela de Parâmetros (Inputs do Robô) */}
          {activeStepTab === 'parametros' && (
            <div className="pt-8 relative z-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#35c04c]" />
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {isPT ? 'Tabela de Parâmetros do EA (Inputs no MT4)' : isES ? 'Tabla de Parámetros del EA (Inputs en MT4)' : 'EA Parameters Table (MT4 Inputs)'}
                    </h5>
                    <p className="text-xs text-slate-400">
                      {isPT ? 'Estes são os campos que você preenche na janela do robô dentro do MetaTrader 4:' : isES ? 'Campos configurables en la ventana del bot en MetaTrader 4:' : 'Fields configured inside MetaTrader 4 EA properties window:'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyParams}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-600 transition-colors"
                >
                  {copiedConfig ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{isPT ? 'Copiado!' : isES ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>{isPT ? 'Copiar Parâmetros' : isES ? 'Copiar Parámetros' : 'Copy Parameters'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabela de Parâmetros */}
              <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/80">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 border-b border-slate-700 text-slate-400 uppercase font-mono">
                    <tr>
                      <th className="py-3 px-4">Parâmetro (Variable)</th>
                      <th className="py-3 px-4">Valor Padrão</th>
                      <th className="py-3 px-4">Função / Como Configurar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-slate-300">
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-[#35c04c] font-bold">Indicador_Nome</td>
                      <td className="py-3 px-4 text-white">"IndicadorSetas"</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Nome do seu indicador .ex4 que está na pasta Indicators do MT4' : isES ? 'Nombre del indicador .ex4 en la carpeta Indicators de MT4' : 'Name of your .ex4 indicator inside MT4 Indicators folder'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-cyan-400 font-bold">Buffer_CALL</td>
                      <td className="py-3 px-4 text-white">0</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Número do buffer que gera a seta de COMPRA (geralmente 0 ou 1)' : isES ? 'Número de búfer de señal COMPRA/CALL (generalmente 0 o 1)' : 'Buffer index for BUY/CALL arrow (typically 0 or 1)'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-rose-400 font-bold">Buffer_PUT</td>
                      <td className="py-3 px-4 text-white">1</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Número do buffer que gera a seta de VENDA (geralmente 1 ou 2)' : isES ? 'Número de búfer de señal VENTA/PUT (generalmente 1 o 2)' : 'Buffer index for SELL/PUT arrow (typically 1 or 2)'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-amber-400 font-bold">Valor_Entrada_USD</td>
                      <td className="py-3 px-4 text-white">5.00</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Valor de cada contrato na Deriv em dólares (Stake)' : isES ? 'Monto por contrato en Deriv en USD (Stake)' : 'Contract stake amount in USD on Deriv'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-purple-400 font-bold">Expiracao_Minutos</td>
                      <td className="py-3 px-4 text-white">1</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Duração da ordem (1 minuto, 5 minutos, ou ticks)' : isES ? 'Duración de la orden (1 minuto, 5 minutos o ticks)' : 'Contract expiry duration (1 minute, 5 minutes, or ticks)'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-emerald-400 font-bold">Usar_Martingale</td>
                      <td className="py-3 px-4 text-white">true</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Ativa a recuperação automática caso a ordem termine em perda' : isES ? 'Activa recuperación automática en caso de pérdida' : 'Enables automatic recovery if trade closes in loss'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-blue-400 font-bold">Maximo_Niveis_Gale</td>
                      <td className="py-3 px-4 text-white">2</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Trava de segurança: limite de até 2 passos de Gale para proteger a banca' : isES ? 'Límite de seguridad: máximo 2 pasos de Gale para cuidar su capital' : 'Safety limit: maximum 2 Gale steps to protect your capital'}
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-900/40">
                      <td className="py-3 px-4 text-rose-300 font-bold">Stop_Loss_Diario</td>
                      <td className="py-3 px-4 text-white">50.00</td>
                      <td className="py-3 px-4 text-slate-400 font-sans">
                        {isPT ? 'Limite diário de perda: o robô desativa sozinho ao atingir o limite' : isES ? 'Límite diario de pérdida: el bot se apaga solo al alcanzarlo' : 'Daily loss stop: bot halts automatically upon reaching limit'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Rodapé do Painel */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#35c04c]" />
              <span>
                {isPT
                  ? 'Compatível com qualquer indicador MQL4 de setas, suporte/resistência ou price action.'
                  : isES
                  ? 'Compatible con cualquier indicador MQL4 de flechas, soporte/resistencia o price action.'
                  : 'Compatible with any MQL4 arrow indicator, support/resistance, or price action robot.'}
              </span>
            </div>

            <a
              href="#simulador"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#35c04c] hover:underline"
            >
              <span>{isPT ? 'Testar no Simulador Acima' : isES ? 'Probar en el Simulador Arriba' : 'Test on Simulator Above'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
