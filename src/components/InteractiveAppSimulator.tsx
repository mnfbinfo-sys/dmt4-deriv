import React, { useState, useEffect } from 'react';
import {
  Play,
  Square,
  RotateCcw,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Clock,
  Layers,
  BarChart3,
  Cpu,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Maximize2,
  FolderOpen,
} from 'lucide-react';
import { Language, SimulatedOrder } from '../types';
import { translations } from '../data/translations';
import { SUPPORT_CONTACTS } from '../data/pricing';

interface InteractiveAppSimulatorProps {
  currentLang: Language;
  onOpenOrdersModal: () => void;
  onOpenContact: () => void;
}

export const InteractiveAppSimulator: React.FC<InteractiveAppSimulatorProps> = ({
  currentLang,
  onOpenOrdersModal,
  onOpenContact,
}) => {
  const t = translations[currentLang];
  const sim = t.simulator;

  // Simulator State
  const [activeTab, setActiveTab] = useState<'app' | 'orders' | 'flow'>('app');
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingPct, setLoadingPct] = useState<number>(0);
  const [loadingText, setLoadingText] = useState<string>('Carregando histórico...');
  const [accountType, setAccountType] = useState<'demo' | 'real'>('real');
  const [tokenInput, setTokenInput] = useState<string>('a1-dmt4kL983jxP0042q');
  const [mt4Path, setMt4Path] = useState<string>(
    'C:\\Users\\Trader\\AppData\\Roaming\\MetaQuotes\\Terminal\\248F0A21B89C\\history\\Deriv-Server'
  );
  const [uptimeSeconds, setUptimeSeconds] = useState<number>(418);
  const [ticksCount, setTicksCount] = useState<number>(14820);
  const [candlesCount, setCandlesCount] = useState<number>(1085);
  const [licenseKey, setLicenseKey] = useState<string>('DMT4-PRO-TRIAL-2026-ACTIVE');
  const [isLicensed, setIsLicensed] = useState<boolean>(false);
  const [showAutoLocateMsg, setShowAutoLocateMsg] = useState<boolean>(false);

  // Simulated Orders for the inline Orders tab
  const [orders, setOrders] = useState<SimulatedOrder[]>([
    {
      id: 104,
      entry_time: '14:28:10',
      exit_time: '14:29:10',
      symbol: 'V75',
      type: 'CALL',
      amount: 15.0,
      duration: '1',
      duration_unit: 'm',
      entry_mode: 'current_candle',
      status: 'WON',
      profit: 14.25,
    },
    {
      id: 103,
      entry_time: '14:26:00',
      exit_time: '14:27:00',
      symbol: 'V100S',
      type: 'PUT',
      amount: 10.0,
      duration: '60',
      duration_unit: 's',
      entry_mode: 'next_candle',
      status: 'WON',
      profit: 9.5,
    },
    {
      id: 102,
      entry_time: '14:24:35',
      exit_time: '14:25:35',
      symbol: 'V50',
      type: 'CALL',
      amount: 20.0,
      duration: '1',
      duration_unit: 'm',
      entry_mode: 'cross_candle',
      status: 'LOST',
      profit: -20.0,
    },
    {
      id: 101,
      entry_time: '14:21:00',
      exit_time: '14:22:00',
      symbol: 'J25',
      type: 'CALL',
      amount: 10.0,
      duration: '60',
      duration_unit: 's',
      entry_mode: 'next_candle',
      status: 'WON',
      profit: 9.5,
    },
    {
      id: 100,
      entry_time: '14:18:22',
      exit_time: '14:19:22',
      symbol: 'V10',
      type: 'PUT',
      amount: 25.0,
      duration: '1',
      duration_unit: 'm',
      entry_mode: 'current_candle',
      status: 'WON',
      profit: 23.75,
    },
  ]);

  // Live ticking simulation
  useEffect(() => {
    if (!isRunning || isLoading) return;

    const interval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
      setTicksCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
      if (Math.random() > 0.85) {
        setCandlesCount((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isLoading]);

  const formatUptime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Start / Stop logic with realistic Loading Screen
  const handleStart = () => {
    if (isRunning) return;
    setIsLoading(true);
    setLoadingPct(10);
    setLoadingText('Conectando ao WebSocket da Deriv...');

    setTimeout(() => {
      setLoadingPct(45);
      setLoadingText('Carregando velas históricas [V75 1min] OK (500 candles)');
    }, 500);

    setTimeout(() => {
      setLoadingPct(85);
      setLoadingText('Criando arquivos .hst [15 ativos x 7 timeframes]');
    }, 900);

    setTimeout(() => {
      setLoadingPct(100);
      setLoadingText('Concluído! Inscrevendo em ticks em tempo real...');
    }, 1300);

    setTimeout(() => {
      setIsLoading(false);
      setIsRunning(true);
    }, 1600);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setUptimeSeconds(0);
    setTicksCount(0);
    setCandlesCount(0);
  };

  const handleAutoLocate = () => {
    setShowAutoLocateMsg(true);
    setTimeout(() => setShowAutoLocateMsg(false), 3000);
  };

  const handleActivate = () => {
    if (!licenseKey.trim()) return;
    setIsLicensed(true);
  };

  // Order stats calculations
  const totalOrders = orders.length;
  const wonOrders = orders.filter((o) => o.status === 'WON').length;
  const lostOrders = orders.filter((o) => o.status === 'LOST').length;
  const winRate = totalOrders > 0 ? ((wonOrders / totalOrders) * 100).toFixed(1) : '0';
  const totalProfit = orders.reduce((acc, o) => acc + o.profit, 0);

  return (
    <section id="simulador" className="py-20 bg-[#0b1320] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f2733] border border-slate-700 text-[#35c04c] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Simulador Interativo
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {sim.title}
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            {sim.subtitle}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('app')}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'app'
                ? 'bg-[#1f2733] text-white border border-[#35c04c]/60 shadow-lg shadow-[#35c04c]/10'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4 text-[#35c04c]" />
            {sim.tabApp}
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[#1f2733] text-white border border-[#17a2b8]/60 shadow-lg shadow-[#17a2b8]/10'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-[#17a2b8]" />
            {sim.tabOrders}
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#17a2b8]/20 text-[#17a2b8] font-mono">
              Live
            </span>
          </button>

          <button
            onClick={() => setActiveTab('flow')}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'flow'
                ? 'bg-[#1f2733] text-white border border-amber-500/60 shadow-lg shadow-amber-500/10'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            {sim.tabDiagram}
          </button>
        </div>

        {/* Tab 1: Virtual App Window */}
        {activeTab === 'app' && (
          <div className="max-w-xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-slate-700/80 bg-[#1f2733]">
            {/* Title Bar (Exact replica of Python app's MT_BAR_BG #1f2733) */}
            <div className="bg-[#1f2733] h-10 px-3 flex items-center justify-between border-b border-slate-800 select-none">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">DMT4-Deriv</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-semibold text-slate-200">Mirror & OrderBridge v5.7</span>
              </div>
              <div className="flex items-center">
                <button
                  className="w-7 h-7 flex items-center justify-center text-slate-400 hover:bg-[#3a4553] text-xs font-bold transition-colors"
                  title="Minimizar"
                >
                  –
                </button>
                <button
                  className="w-7 h-7 flex items-center justify-center text-slate-400 hover:bg-[#e04343] hover:text-white text-xs font-bold transition-colors"
                  title="Fechar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* If Loading State */}
            {isLoading ? (
              <div className="bg-[#0d1626] p-10 text-center text-white min-h-[460px] flex flex-col justify-center items-center">
                <div className="text-2xl font-black tracking-wider mb-1">DMT4-Deriv</div>
                <div className="text-xs font-bold tracking-widest text-[#35c04c] mb-6">
                  CARREGANDO DADOS DERIV
                </div>

                {/* Progress bar matching Python Tkinter bar */}
                <div className="w-full max-w-sm bg-slate-900 p-1 border border-slate-700 rounded-md mb-3">
                  <div className="w-full bg-[#0d1626] h-6 rounded overflow-hidden relative">
                    <div
                      className="h-full bg-[#35c04c] transition-all duration-300"
                      style={{ width: `${loadingPct}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-white">
                      {loadingPct}%
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono animate-pulse">
                  {loadingText}
                </div>
              </div>
            ) : (
              /* Main App Body (Tkinter #f8f9fa styling inside) */
              <div className="bg-[#f8f9fa] text-[#1f2733] p-4 text-xs font-sans space-y-3">
                {/* License Banner */}
                <div
                  className={`w-full py-1.5 px-3 rounded text-center text-xs font-bold text-white shadow-sm flex items-center justify-center gap-2 ${
                    isLicensed ? 'bg-[#28a745]' : 'bg-[#3b82f6]'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  {isLicensed
                    ? 'Licença Definitiva DMT4 Pro Ativa (Vitalícia)'
                    : sim.licenseBarTrial}
                </div>

                {/* Status & Uptime Bar */}
                <div className="bg-[#1f2733] text-white rounded p-2.5 flex items-center justify-between shadow-inner">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        isRunning ? 'bg-[#35c04c] animate-pulse' : 'bg-slate-500'
                      }`}
                    />
                    <span
                      className={`font-bold uppercase tracking-wider ${
                        isRunning ? 'text-[#35c04c]' : 'text-slate-400'
                      }`}
                    >
                      {isRunning ? sim.statusLive : sim.statusStopped}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 font-mono font-bold text-xs">
                    <div className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-[#35c04c]">{formatUptime(uptimeSeconds)}</span>
                    </div>
                  </div>
                </div>

                {/* Broker Panel Box */}
                <div className="bg-white border border-slate-300 rounded p-3 space-y-3 shadow-xs">
                  {/* PAT Token */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-bold text-slate-700">
                        {sim.patLabel}
                      </label>
                      <a
                        href={SUPPORT_CONTACTS.derivTokenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff444f] hover:underline font-bold text-[11px] flex items-center gap-0.5"
                      >
                        {sim.createTokenLink}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <input
                      type="password"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 font-mono text-slate-800 text-xs focus:bg-white focus:outline-none focus:border-[#17a2b8]"
                    />
                  </div>

                  {/* Start / Stop Buttons & Account Radio */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-2">
                      <button
                        onClick={handleStart}
                        disabled={isRunning}
                        className={`px-4 py-1.5 rounded font-bold text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer ${
                          isRunning
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-[#28a745] hover:bg-[#218838] text-white'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        {sim.btnStart}
                      </button>

                      <button
                        onClick={handleStop}
                        disabled={!isRunning}
                        className={`px-4 py-1.5 rounded font-bold text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer ${
                          !isRunning
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-[#dc3545] hover:bg-[#c82333] text-white'
                        }`}
                      >
                        <Square className="w-3.5 h-3.5 fill-current" />
                        {sim.btnStop}
                      </button>
                    </div>

                    {/* Account Radio: Demo vs Real */}
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="text-slate-600">{sim.accountType}</span>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="radio"
                          name="simAccType"
                          checked={accountType === 'demo'}
                          onChange={() => setAccountType('demo')}
                          className="text-[#17a2b8]"
                        />
                        <span>DEMO</span>
                      </label>
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="radio"
                          name="simAccType"
                          checked={accountType === 'real'}
                          onChange={() => setAccountType('real')}
                          className="text-[#28a745]"
                        />
                        <span className="text-[#28a745]">REAL</span>
                      </label>

                      {/* Orders Panel Trigger */}
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="bg-[#17a2b8] hover:bg-[#138496] text-white px-2.5 py-1 rounded font-bold text-[11px] shadow-xs flex items-center gap-1 cursor-pointer"
                        title="Abrir painel de ordens em tempo real"
                      >
                        <BarChart3 className="w-3 h-3" />
                        {sim.btnOrders}
                      </button>
                    </div>
                  </div>
                </div>

                {/* MT4 History Path Input */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">
                    {sim.mt4PathLabel}
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={mt4Path}
                      onChange={(e) => setMt4Path(e.target.value)}
                      className="flex-1 bg-white border border-slate-300 rounded px-2 py-1 font-mono text-[11px] text-slate-700 truncate"
                    />
                    <button
                      onClick={handleAutoLocate}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-2.5 py-1 rounded font-bold text-xs flex items-center gap-1 cursor-pointer"
                      title="Procurar pasta do MT4"
                    >
                      <Search className="w-3 h-3" />
                      Auto
                    </button>
                  </div>
                  {showAutoLocateMsg && (
                    <div className="text-[10px] text-[#28a745] font-bold">
                      ✓ Pasta do MetaQuotes Terminal detectada com sucesso!
                    </div>
                  )}
                </div>

                {/* Stats Dashboard: Ticks and Candles Counter */}
                <div className="bg-[#1f2733] text-white rounded p-2.5 flex items-center justify-around font-mono text-xs shadow-inner">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">{sim.ticks}</span>
                    <span className="text-[#35c04c] font-black text-sm">
                      {ticksCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-slate-700" />
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">{sim.candles}</span>
                    <span className="text-amber-300 font-black text-sm">
                      {candlesCount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* License Key & Reset Controls */}
                <div className="pt-1 border-t border-slate-200 flex items-center justify-between gap-2">
                  <div className="flex-1 flex gap-1">
                    <input
                      type="text"
                      value={licenseKey}
                      onChange={(e) => setLicenseKey(e.target.value)}
                      placeholder="Chave de licença"
                      className="w-full bg-white border border-slate-300 rounded px-2 py-1 font-mono text-[11px] text-slate-700"
                    />
                    <button
                      onClick={handleActivate}
                      className="bg-[#17a2b8] hover:bg-[#138496] text-white px-2.5 py-1 rounded font-bold text-[11px] cursor-pointer"
                    >
                      ATIVAR
                    </button>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-slate-400 hover:bg-slate-500 text-white px-2.5 py-1 rounded font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    {sim.btnReset}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Orders Panel Replica */}
        {activeTab === 'orders' && (
          <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-slate-700/80 bg-[#1f2733]">
            {/* Orders Header */}
            <div className="bg-[#1f2733] h-10 px-4 flex items-center justify-between border-b border-slate-700 text-white">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                <BarChart3 className="w-4 h-4 text-[#17a2b8]" />
                <span>{t.ordersPanel.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('app')}
                  className="text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded font-medium cursor-pointer"
                >
                  Voltar ao App
                </button>
              </div>
            </div>

            {/* Account Status Line */}
            <div className="bg-[#0e1726] border-b border-slate-800 px-4 py-2 text-center text-xs font-mono font-bold text-slate-300 flex items-center justify-center gap-4">
              <span>Conta: <strong className="text-white">CR2941088 (REAL)</strong></span>
              <span className="text-slate-600">|</span>
              <span>Saldo: <strong className="text-[#35c04c]">$1,482.50 USD</strong></span>
            </div>

            {/* Real-Time KPIs Cards */}
            <div className="p-4 bg-[#0b1320] grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-[#1f2733] p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">TOTAL</div>
                <div className="text-xl font-black text-white font-mono mt-1">{totalOrders}</div>
              </div>

              <div className="bg-[#1f2733] p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-[10px] uppercase font-bold text-[#28a745]">GANHAS</div>
                <div className="text-xl font-black text-[#28a745] font-mono mt-1">{wonOrders}</div>
              </div>

              <div className="bg-[#1f2733] p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-[10px] uppercase font-bold text-[#dc3545]">PERDIDAS</div>
                <div className="text-xl font-black text-[#dc3545] font-mono mt-1">{lostOrders}</div>
              </div>

              <div className="bg-[#1f2733] p-3 rounded-lg border border-slate-800 text-center">
                <div className="text-[10px] uppercase font-bold text-[#17a2b8]">WIN RATE</div>
                <div className="text-xl font-black text-[#17a2b8] font-mono mt-1">{winRate}%</div>
              </div>

              <div className="bg-[#1f2733] p-3 rounded-lg border border-slate-800 text-center col-span-2 sm:col-span-1">
                <div className="text-[10px] uppercase font-bold text-emerald-400">LUCRO TOTAL</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-1">
                  ${totalProfit > 0 ? `+${totalProfit.toFixed(2)}` : totalProfit.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="p-4 bg-[#1f2733] overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="py-2 px-2 text-center">#</th>
                    <th className="py-2 px-2">Início</th>
                    <th className="py-2 px-2">Fechamento</th>
                    <th className="py-2 px-2">Símbolo</th>
                    <th className="py-2 px-2">Tipo</th>
                    <th className="py-2 px-2">Valor</th>
                    <th className="py-2 px-2">Duração</th>
                    <th className="py-2 px-2">Entrada</th>
                    <th className="py-2 px-2 text-center">Status</th>
                    <th className="py-2 px-2 text-right">Lucro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-200">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2 px-2 text-center text-slate-400 font-bold">{o.id}</td>
                      <td className="py-2 px-2 text-slate-300">{o.entry_time}</td>
                      <td className="py-2 px-2 text-slate-400">{o.exit_time}</td>
                      <td className="py-2 px-2 font-bold text-white">{o.symbol}</td>
                      <td className="py-2 px-2">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            o.type === 'CALL'
                              ? 'bg-[#28a745]/20 text-[#35c04c]'
                              : 'bg-[#dc3545]/20 text-[#ff444f]'
                          }`}
                        >
                          {o.type}
                        </span>
                      </td>
                      <td className="py-2 px-2">${o.amount.toFixed(2)}</td>
                      <td className="py-2 px-2">{o.duration}{o.duration_unit}</td>
                      <td className="py-2 px-2 text-slate-400">
                        {o.entry_mode === 'current_candle'
                          ? 'Mesma Vela'
                          : o.entry_mode === 'next_candle'
                          ? 'Próxima Vela'
                          : 'Cruzada'}
                      </td>
                      <td className="py-2 px-2 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            o.status === 'WON'
                              ? 'bg-[#28a745]/20 text-[#35c04c] border border-[#28a745]/40'
                              : 'bg-[#dc3545]/20 text-[#ff444f] border border-[#dc3545]/40'
                          }`}
                        >
                          {o.status === 'WON' ? 'GANHOU' : 'PERDEU'}
                        </span>
                      </td>
                      <td
                        className={`py-2 px-2 text-right font-bold ${
                          o.profit > 0 ? 'text-[#35c04c]' : 'text-[#ff444f]'
                        }`}
                      >
                        {o.profit > 0 ? `+$${o.profit.toFixed(2)}` : `-$${Math.abs(o.profit).toFixed(2)}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 pt-3 border-t border-slate-700 flex justify-between items-center text-[11px] text-slate-400">
                <span>Estatísticas em tempo real calculadas pelo DMT4 OrderBridge.</span>
                <button
                  onClick={() => {
                    const newId = orders.length > 0 ? orders[0].id + 1 : 100;
                    const symbols = ['V75', 'V100S', 'V25', 'J50', 'V10'];
                    const types: ('CALL' | 'PUT')[] = ['CALL', 'PUT'];
                    const now = new Date();
                    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now
                      .getMinutes()
                      .toString()
                      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                    const isWin = Math.random() > 0.3;
                    const amt = 10.0;
                    const profit = isWin ? 9.5 : -10.0;

                    const newOrder: SimulatedOrder = {
                      id: newId,
                      entry_time: timeStr,
                      exit_time: timeStr,
                      symbol: symbols[Math.floor(Math.random() * symbols.length)],
                      type: types[Math.floor(Math.random() * types.length)],
                      amount: amt,
                      duration: '1',
                      duration_unit: 'm',
                      entry_mode: 'current_candle',
                      status: isWin ? 'WON' : 'LOST',
                      profit: profit,
                    };
                    setOrders([newOrder, ...orders]);
                  }}
                  className="bg-[#35c04c] hover:bg-[#28a745] text-slate-950 font-bold px-3 py-1.5 rounded cursor-pointer transition-colors text-xs"
                >
                  + Simular Nova Ordem
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: System Architecture Flow Diagram */}
        {activeTab === 'flow' && (
          <div className="max-w-4xl mx-auto bg-[#1f2733] border border-slate-700 rounded-xl p-6 sm:p-8 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#35c04c]">
              <Cpu className="w-5 h-5" />
              Arquitetura de Alta Velocidade: Deriv ➔ DMT4 ➔ MetaTrader 4
            </h3>
            <p className="text-sm text-slate-300 mb-8 max-w-2xl">
              Descubra por que o DMT4 é insuperável em estabilidade e velocidade. Entenda o fluxo de dados em 3 etapas sem intermediários lentos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 1 */}
              <div className="bg-[#0e1726] border border-slate-700/80 rounded-xl p-5 relative">
                <div className="w-8 h-8 rounded-full bg-[#ff444f]/20 text-[#ff444f] font-black text-sm flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="font-bold text-base text-white mb-2">
                  Servidores Deriv API
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Conexão contínua de WebSocket criptografada diretamente com <code>api.derivws.com</code>. Recebe ticks de Volatility e Jump a cada milissegundo.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 bg-black/40 p-2 rounded border border-emerald-500/20">
                  ws.send(&#123;ticks: "R_75"&#125;)
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0e1726] border border-[#35c04c]/40 rounded-xl p-5 relative shadow-lg shadow-[#35c04c]/5">
                <div className="w-8 h-8 rounded-full bg-[#35c04c]/20 text-[#35c04c] font-black text-sm flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="font-bold text-base text-white mb-2 flex items-center gap-1.5">
                  DMT4-Deriv Engine
                  <span className="text-[10px] bg-[#35c04c] text-slate-900 font-bold px-1.5 py-0.2 rounded">
                    PRO
                  </span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Processa a estrutura binária <code>&lt;qddddqiq&gt;</code> (epoch, open, high, low, close, volume) e grava instantaneamente nos 105 arquivos <code>.hst</code> do MT4.
                </p>
                <div className="text-[11px] font-mono text-amber-300 bg-black/40 p-2 rounded border border-amber-500/20">
                  fh.write(pack_record(c))
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0e1726] border border-slate-700/80 rounded-xl p-5 relative">
                <div className="w-8 h-8 rounded-full bg-[#17a2b8]/20 text-[#17a2b8] font-black text-sm flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="font-bold text-base text-white mb-2">
                  MetaTrader 4 Terminal
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  O MT4 lê o histórico nativo e renderiza os gráficos em tempo real. Você anexa qualquer indicador MQL4, robô EA ou usa os botões CALL/PUT na tela.
                </p>
                <div className="text-[11px] font-mono text-cyan-300 bg-black/40 p-2 rounded border border-cyan-500/20">
                  ChartSetSymbolPeriod(V75, M1)
                </div>
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#35c04c]" />
                Zero interferência na corretora do seu MT4
              </span>
              <button
                onClick={onOpenContact}
                className="text-[#35c04c] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                Tirar dúvidas técnicas no WhatsApp ➔
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
