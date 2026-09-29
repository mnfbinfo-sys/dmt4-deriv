import { Language } from "../types";

export const translations: Record<Language, Record<string, any>> = {
  PT: {
    meta: {
      appName: "DMT4-Deriv Pro",
      version: "v5.7 - Mirror & OrderBridge",
      tagline: "Espelhamento Deriv para MetaTrader 4 em Tempo Real",
      trialBadge: "🔥 Trial de 3 Dias Ativo — Grátis e sem compromisso",
    },
    nav: {
      home: "Início",
      liveDemo: "Simulador do App",
      features: "Recursos",
      modes: "Modos de Entrada",
      indices: "Ativos Sintéticos",
      howItWorks: "Como Funciona",
      pricing: "Planos & Preços",
      faq: "Dúvidas Frequentes",
      downloadBtn: "Baixar Grátis (3 Dias)",
      getStarted: "Ativar Licença",
    },
    hero: {
      badge: "VERSÃO v5.7 · ESPELHAMENTO NATIVO .HST",
      titleHighlight: "Conecte a Deriv ao MetaTrader 4",
      titleSuffix: "com precisão de milissegundos e automação de ordens.",
      description:
        "Espelhe gráficos de índices sintéticos (Volatility e Jump) da Deriv diretamente nas pastas do MT4 em formato binário .hst nativo. Opere com botões CALL/PUT instantâneos, 3 modos de entrada e acompanhe suas operações no Painel de Ordens em tempo real.",
      btnDownload: "📥 Baixar Grátis (3 Dias)",
      btnViewPlans: "🛒 Ver Planos & Preços",
      btnLiveDemo: "🖥️ Testar Simulador Interativo",
      statLatency: "50ms Latência",
      statUptime: "99.9% Uptime",
      statAssets: "15 Ativos",
      statTimeframes: "7 Timeframes (M1-D1)",
      activeTraders: "500+ Traders ativos operando diariamente",
      trustNotice:
        "Exclusivo para contas Deriv · Compatível com qualquer terminal MT4 (Windows 10/11 & VPS)",
    },
    simulator: {
      title: "Experimente a Interface Oficial do DMT4-Deriv v5.7",
      subtitle:
        "Uma réplica exata do aplicativo que você usará no seu computador. Teste a conexão, simule ticks e abra o painel de ordens.",
      tabApp: "💻 Janela do Aplicativo",
      tabOrders: "📊 Painel de Ordens",
      tabDiagram: "🔄 Fluxo Deriv ➔ MT4",
      statusLive: "AO VIVO",
      statusConnecting: "CONECTANDO",
      statusStopped: "PARADO",
      uptime: "Tempo Ativo:",
      ticks: "Ticks:",
      candles: "Velas:",
      patLabel: "PAT da Deriv (Token):",
      createTokenLink: "Criar Token Deriv",
      mt4PathLabel: "Diretório MT4 History:",
      accountType: "Tipo de Conta:",
      btnStart: "INICIAR",
      btnStop: "PARAR",
      btnOrders: "📊 Ordens",
      btnReset: "RESET",
      autoLocateTip:
        "🔍 Varredura automática detecta suas pastas MetaQuotes/Terminal",
      licenseBarTrial: "Trial de 3 dias ativo (Acesso completo desbloqueado)",
      btnBuyLicense: "🔥 ATIVAR LICENÇA DEFINITIVA",
    },
    ordersPanel: {
      title: "📊 PAINEL DE ORDENS EM TEMPO REAL",
      accountInfo: "Conta: CR2941088 (REAL)  |  Saldo: $1,482.50 USD",
      statTotal: "TOTAL",
      statWon: "GANHAS",
      statLost: "PERDIDAS",
      statWinRate: "WIN RATE",
      statProfit: "LUCRO",
      colId: "#",
      colStart: "Início",
      colClose: "Fechamento",
      colSymbol: "Símbolo",
      colType: "Tipo",
      colAmount: "Valor",
      colDuration: "Duração",
      colMode: "Entrada",
      colStatus: "Status",
      colProfit: "Lucro",
      modeSame: "Mesma Vela",
      modeNext: "Próxima Vela",
      modeCross: "Cruzada",
      statusWon: "GANHOU",
      statusLost: "PERDEU",
      statusOpen: "ABERTA",
      clearHistory: "Limpar Histórico",
      newSimOrder: "+ Simular Nova Ordem",
    },
    features: {
      title: "Por que traders profissionais escolhem o DMT4-Deriv Pro",
      subtitle:
        "Projetado especificamente para eliminar o atraso entre a API Deriv e o MetaTrader 4.",
      item1Title: "Espelhamento Nativo .HST em Tempo Real",
      item1Desc:
        "Escrita direta nos arquivos de histórico binários .hst do MT4 com latência inferior a 50ms.",
      item2Title: "3 Modos Exclusivos de Entrada",
      item2Desc:
        "Opere em Mesma Vela (execução no clique), Próxima Vela (na abertura) ou Cruzada (duração contínua).",
      item3Title: "OrderBridge & Botões CALL/PUT",
      item3Desc:
        "Envio de ordens diretamente pelo gráfico do MT4 com gestão de risco e execução veloz.",
      item4Title: "15 Ativos Sintéticos Suportados",
      item4Desc:
        "Volatility 10 a 100, versões de 1 segundo (V10S a V100S) e Jump Indices (J10 a J100).",
      item5Title: "Painel de Controle em Tempo Real",
      item5Desc:
        "Métricas completas com cálculo de Win Rate, volume, saldo e lucro líquido em dólares.",
      item6Title: "Contas DEMO e REAL Integradas",
      item6Desc:
        "Pratique na conta virtual e mude para a conta real com apenas um clique.",
    },
    modes: {
      title: "Domine os 3 Modos de Execução",
      subtitle:
        "Cada estratégia exige um ponto de entrada ideal. O DMT4 oferece controle total.",
      sameTitle: "Mesma Vela (Execução Imediata)",
      sameDesc:
        "A ordem entra no milissegundo do clique ou do sinal do seu indicador, aproveitando a força atual.",
      sameBadge: "Disparo Rápido",
      nextTitle: "Próxima Vela (Abertura)",
      nextDesc:
        "Pré-posiciona a ordem para disparar exatamente na abertura da próxima vela. Ideal para Price Action.",
      nextBadge: "Abertura de Vela",
      crossTitle: "Cruzada (Cross Candle)",
      crossDesc:
        "Duração contínua (ex: ordem de 1 min aberta aos 20s fecha aos 20s da vela seguinte).",
      crossBadge: "Duração Contínua",
    },
    indices: {
      title: "Catálogo de 15 Ativos Sintéticos",
      subtitle:
        "Todos os ativos gerados em 7 timeframes simultâneos: M1, M5, M15, M30, H1, H4 e D1.",
      filterAll: "Todos (15)",
      filterVol: "Volatility Padrão (5)",
      filterVol1s: "Volatility 1-Segundo (5)",
      filterJump: "Jump Indices (5)",
    },
    autoTrade: {
      badge: "🔥 NOVO: MODO 100% AUTOMÁTICO",
      title: "Como Operar no Modo Automático do DMT4-Deriv",
      subtitle:
        "Guia passo a passo para conectar seus indicadores de MT4 à Deriv com execução em milissegundos e gestão de risco.",
      step1Title: "1. Habilitar Permissões no MT4",
      step1Desc:
        "No MetaTrader 4, vá em Ferramentas > Opções > Expert Advisors. Marque 'Permitir AutoTrading' e 'Permitir importação de DLL'.",
      step2Title: "2. Configurar Token Deriv e Ativos",
      step2Desc:
        "Insira seu Personal Access Token (PAT) com escopo de Trade no DMT4 e selecione os índices sintéticos desejados (ex: Volatility 100).",
      step3Title: "3. Detecção Automática de Sinais",
      step3Desc:
        "O robô escaneia setas e buffers de indicadores técnicos no gráfico em tempo real para disparos instantâneos via WebSocket (~40ms).",
      step4Title: "4. Gestão de Risco e Martingale",
      step4Desc:
        "Defina limites diários de Stop Loss e Take Profit, além de Martingale inteligente com fator progressivo e teto de níveis.",
      step5Title: "5. Validação em Conta Virtual (Demo)",
      step5Desc:
        "Execute seus testes primeiro na conta Demo da Deriv. Monitore o Win Rate e latência no Painel de Ordens antes de arriscar capital.",
      step6Title: "6. Virada de Chave para Conta Real",
      step6Desc:
        "Com a assertividade confirmada, mude o seletor para Real (CR) com 1 clique e deixe o robô operar com total disciplina.",
      btnListenKore: "🔊 Ouvir Explicação da Kore",
    },
    steps: {
      title: "Como Começar em 3 Passos",
      subtitle:
        "Sem configurações complicadas. Espelhe seus gráficos em menos de 3 minutos.",
      step1Title: "1. Baixe e Abra o DMT4-Deriv",
      step1Desc:
        "Faça o download do pacote no Google Drive com o EA pré-incluído pronto para executar.",
      step2Title: "2. Cole seu Token Deriv (PAT)",
      step2Desc:
        "Crie um Personal Access Token na Deriv com permissões de trade e cole no aplicativo.",
      step3Title: "3. Clique em INICIAR e Opere no MT4",
      step3Desc:
        "O DMT4 detecta sua pasta do MetaTrader e começa a transmitir as velas em tempo real.",
    },
    pricing: {
      title: "Planos Transparentes e Ativação Imediata",
      subtitle:
        "Comece hoje mesmo com 3 dias grátis. Escolha o plano ideal para a sua rotina de operações.",
      trialGuarantee: "🛡️ 3 Dias de Trial Grátis Incluídos em Todos os Planos",
      trialDetail:
        "Baixe, teste por 72 horas com acesso completo antes de fazer qualquer pagamento.",
      monthly: "Mensal",
      quarterly: "Trimestral",
      semiannual: "Semestral",
      perMonth: "/mês",
      popularBadge: "MAIS POPULAR · 20% OFF",
      bestValueBadge: "MELHOR CUSTO-BENEFÍCIO · 30% OFF",
      buyNow: "🛒 Assinar Agora",
      cancelAnytime: "Cancele quando quiser com 1 clique",
      secureHotmart: "Pagamento 100% Seguro e Criptografado",
    },
    faq: {
      title: "Perguntas Frequentes (FAQ)",
      subtitle: "Tire suas dúvidas técnicas sobre o DMT4-Deriv Pro.",
      q1: "O teste de 3 dias é realmente grátis?",
      a1: "Sim! Ao abrir o app pela primeira vez, o trial de 3 dias é ativado automaticamente com todos os recursos liberados sem precisar de cartão.",
      q2: "Funciona em qualquer corretora no MT4?",
      a2: "Sim! O DMT4 grava direto nos arquivos .hst da pasta history do MT4, funcionando com qualquer corretora.",
      q3: "Qual a latência de transmissão?",
      a3: "Cerca de 50 milissegundos graças à conexão direta WebSocket com os servidores da Deriv.",
      q4: "Posso rodar em uma VPS?",
      a4: "Sim, é 100% compatível com Windows Server, Windows 10 e Windows 11 em VPS para operar 24/7.",
      q5: "Posso usar meus próprios indicadores do MT4?",
      a5: "Sim! Você pode adicionar qualquer indicador MQL4, template ou robô EA nos gráficos espelhados.",
      q6: "Como recebo suporte?",
      a6: "Oferecemos suporte direto via WhatsApp (+55 49 98842-1072), Telegram e e-mail (mnfbinfo@gmail.com).",
    },
    contactModal: {
      title: "Suporte Oficial e Ativação",
      desc: "Deseja tirar dúvidas ou ativar sua licença?",
      btnWhatsApp: "💬 Falar no WhatsApp",
      btnTelegram: "✈️ Canal no Telegram",
      btnEmail: "📧 Enviar E-mail",
      emailCopied: "E-mail copiado para a área de transferência!",
      copyEmail: "Copiar E-mail (mnfbinfo@gmail.com)",
      close: "Fechar",
    },
    footer: {
      copyright: "© 2026 DMT4-Deriv Pro. Todos os direitos reservados.",
      disclaimer:
        "⚠️ Aviso de Risco: Operações com instrumentos financeiros e índices sintéticos envolvem risco significativo de perda. O DMT4-Deriv Pro é uma ferramenta de tecnologia de ponte para o MetaTrader 4 e não fornece consultoria financeira. Opere sempre em conta Demo antes de utilizar capital real.",
    },
  },
  EN: {
    meta: {
      appName: "DMT4-Deriv Pro",
      version: "v5.7 - Mirror & OrderBridge",
      tagline: "Real-Time Deriv to MetaTrader 4 Mirroring",
      trialBadge: "🔥 3-Day Trial Active — Free with zero commitment",
    },
    nav: {
      home: "Home",
      liveDemo: "App Simulator",
      features: "Features",
      modes: "Entry Modes",
      indices: "Synthetic Assets",
      howItWorks: "How it Works",
      pricing: "Plans & Pricing",
      faq: "FAQ",
      downloadBtn: "Download Free (3 Days)",
      getStarted: "Activate License",
    },
    hero: {
      badge: "VERSION v5.7 · NATIVE .HST MIRRORING",
      titleHighlight: "Connect Deriv to MetaTrader 4",
      titleSuffix: "with millisecond precision and order automation.",
      description:
        "Mirror synthetic indices charts (Volatility & Jump) from Deriv directly into MT4 folders in native binary .hst format. Trade with instant CALL/PUT buttons, 3 execution modes, and track orders in the Real-Time Orders Panel.",
      btnDownload: "📥 Download Free (3 Days)",
      btnViewPlans: "🛒 View Plans & Pricing",
      btnLiveDemo: "🖥️ Test Live Simulator",
      statLatency: "50ms Latency",
      statUptime: "99.9% Uptime",
      statAssets: "15 Assets",
      statTimeframes: "7 Timeframes (M1-D1)",
      activeTraders: "500+ Active traders operating daily",
      trustNotice:
        "Exclusive for Deriv accounts · Compatible with any MT4 terminal (Windows 10/11 & VPS)",
    },
    simulator: {
      title: "Experience the Official DMT4-Deriv v5.7 Interface",
      subtitle:
        "An exact replica of the desktop software. Test connection, monitor incoming ticks, and inspect the Orders Panel.",
      tabApp: "💻 Main Application",
      tabOrders: "📊 Orders Panel",
      tabDiagram: "🔄 Deriv ➔ MT4 Flow",
      statusLive: "LIVE",
      statusConnecting: "CONNECTING",
      statusStopped: "STOPPED",
      uptime: "Uptime:",
      ticks: "Ticks:",
      candles: "Candles:",
      patLabel: "Deriv PAT (Token):",
      createTokenLink: "Create Deriv Token",
      mt4PathLabel: "MT4 History Directory:",
      accountType: "Account Type:",
      btnStart: "START",
      btnStop: "STOP",
      btnOrders: "📊 Orders",
      btnReset: "RESET",
      autoLocateTip:
        "🔍 Auto-scanner detects your MetaQuotes/Terminal folders",
      licenseBarTrial: "3-day trial active (Full access unlocked)",
      btnBuyLicense: "🔥 ACTIVATE LIFETIME LICENSE",
    },
    ordersPanel: {
      title: "📊 REAL-TIME ORDERS PANEL",
      accountInfo: "Account: CR2941088 (REAL)  |  Balance: $1,482.50 USD",
      statTotal: "TOTAL",
      statWon: "WON",
      statLost: "LOST",
      statWinRate: "WIN RATE",
      statProfit: "PROFIT",
      colId: "#",
      colStart: "Start",
      colClose: "Close",
      colSymbol: "Symbol",
      colType: "Type",
      colAmount: "Amount",
      colDuration: "Duration",
      colMode: "Entry",
      colStatus: "Status",
      colProfit: "Profit",
      modeSame: "Same Candle",
      modeNext: "Next Candle",
      modeCross: "Cross Candle",
      statusWon: "WON",
      statusLost: "LOST",
      statusOpen: "OPEN",
      clearHistory: "Clear History",
      newSimOrder: "+ Simulate New Order",
    },
    features: {
      title: "Why professional traders choose DMT4-Deriv Pro",
      subtitle:
        "Engineered specifically to eradicate the lag between Deriv API and MetaTrader 4.",
      item1Title: "Native .HST Real-Time Mirroring",
      item1Desc:
        "Direct write to MT4 binary .hst history files with sub-50ms latency.",
      item2Title: "3 Exclusive Entry Modes",
      item2Desc:
        "Trade on Same Candle (instant execution), Next Candle (at candle open), or Cross Candle (continuous duration).",
      item3Title: "OrderBridge & CALL/PUT Buttons",
      item3Desc:
        "Place orders directly from the MT4 chart with risk management and high execution speed.",
      item4Title: "15 Supported Synthetic Indices",
      item4Desc:
        "Volatility 10 through 100, 1-second versions (V10S to V100S), and Jump Indices (J10 to J100).",
      item5Title: "Real-Time Dashboard",
      item5Desc:
        "Comprehensive metrics calculating Win Rate, trading volume, balance, and net dollar profit.",
      item6Title: "Integrated DEMO & REAL Accounts",
      item6Desc:
        "Practice on virtual balance and switch to real funds with a single click.",
    },
    modes: {
      title: "Master the 3 Execution Modes",
      subtitle:
        "Every strategy demands an optimal entry point. DMT4 gives you exact control.",
      sameTitle: "Same Candle (Instant Entry)",
      sameDesc:
        "Order executes the millisecond you click or indicator triggers, seizing immediate momentum.",
      sameBadge: "Fast Trigger",
      nextTitle: "Next Candle (Open)",
      nextDesc:
        "Pre-positions order to execute precisely when next candle opens. Ideal for Price Action setups.",
      nextBadge: "Candle Open",
      crossTitle: "Cross Candle (Continuous)",
      crossDesc:
        "Continuous duration (e.g. 1-min order opened at 20s expires at 20s of the following candle).",
      crossBadge: "Continuous Span",
    },
    indices: {
      title: "Catalog of 15 Synthetic Assets",
      subtitle:
        "All assets streamed across 7 simultaneous timeframes: M1, M5, M15, M30, H1, H4, and D1.",
      filterAll: "All (15)",
      filterVol: "Standard Volatility (5)",
      filterVol1s: "Volatility 1-Second (5)",
      filterJump: "Jump Indices (5)",
    },
    autoTrade: {
      badge: "🔥 NEW: 100% AUTOMATED TRADING",
      title: "How to Trade in Automated Mode with DMT4-Deriv",
      subtitle:
        "Step-by-step guide to connect your MT4 technical indicators to Deriv with millisecond execution and risk management.",
      step1Title: "1. Enable MT4 Permissions",
      step1Desc:
        "In MetaTrader 4, go to Tools > Options > Expert Advisors. Check 'Allow AutoTrading' and 'Allow DLL imports'.",
      step2Title: "2. Setup Deriv PAT Token & Assets",
      step2Desc:
        "Paste your Deriv Personal Access Token with Trade scopes into DMT4 and choose your target synthetic indices (e.g., Volatility 100).",
      step3Title: "3. Automated Signal Detection",
      step3Desc:
        "The scanner reads indicator arrows and buffers from MT4 charts in real time, triggering instant orders via WebSocket (~40ms).",
      step4Title: "4. Risk Management & Smart Martingale",
      step4Desc:
        "Configure daily Stop Loss and Take Profit targets, plus intelligent Martingale with recovery multiplier and max level cap.",
      step5Title: "5. Virtual Demo Account Validation",
      step5Desc:
        "Always run strategies on a Deriv Virtual account first. Monitor Win Rate and latency on the Orders Panel before risking real capital.",
      step6Title: "6. Switch to Live Account",
      step6Desc:
        "Once validated, toggle the account selector to Real (CR) with a single click and let the automated engine execute with discipline.",
      btnListenKore: "🔊 Listen to Kore Explanation",
    },
    steps: {
      title: "How to Get Started in 3 Steps",
      subtitle:
        "No complex configurations. Mirror your charts in under 3 minutes.",
      step1Title: "1. Download and Open DMT4-Deriv",
      step1Desc:
        "Download the Google Drive bundle with the pre-configured EA ready to launch.",
      step2Title: "2. Enter your Deriv Token (PAT)",
      step2Desc:
        "Generate a Personal Access Token on Deriv with trade scopes and paste into the app.",
      step3Title: "3. Click START & Trade on MT4",
      step3Desc:
        "DMT4 locates your MetaTrader history folder and begins streaming candles in real time.",
    },
    pricing: {
      title: "Transparent Plans & Instant Activation",
      subtitle:
        "Get started today with a 3-day free trial. Choose the best plan for your trading routine.",
      trialGuarantee: "🛡️ 3-Day Free Trial Included on All Plans",
      trialDetail:
        "Download, test for 72 hours with unrestricted access before paying anything.",
      monthly: "Monthly",
      quarterly: "Quarterly",
      semiannual: "Semi-Annual",
      perMonth: "/month",
      popularBadge: "MOST POPULAR · 20% OFF",
      bestValueBadge: "BEST VALUE · 30% OFF",
      buyNow: "🛒 Subscribe Now",
      cancelAnytime: "Cancel anytime with 1 click",
      secureHotmart: "100% Secure & Encrypted Checkout",
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle: "Technical answers about DMT4-Deriv Pro.",
      q1: "Is the 3-day trial genuinely free?",
      a1: "Yes! When you launch the app for the first time, your 3-day full-access trial activates automatically without requiring a credit card.",
      q2: "Does it work with any MT4 broker?",
      a2: "Yes! DMT4 writes directly into the binary .hst files in the MT4 history folder, making it compatible with any broker.",
      q3: "What is the transmission latency?",
      a3: "Approximately 50 milliseconds thanks to the direct WebSocket stream connected to Deriv servers.",
      q4: "Can I run it on a VPS?",
      a4: "Yes, it is 100% compatible with Windows Server, Windows 10, and Windows 11 on VPS for 24/7 trading.",
      q5: "Can I use my own MT4 custom indicators?",
      a5: "Yes! You can attach any MQL4 indicator, template, or EA robot to the mirrored charts.",
      q6: "How do I reach technical support?",
      a6: "We provide direct support via WhatsApp (+55 49 98842-1072), Telegram, and email (mnfbinfo@gmail.com).",
    },
    contactModal: {
      title: "Official Support & Activation",
      desc: "Questions or ready to activate your license?",
      btnWhatsApp: "💬 Chat on WhatsApp",
      btnTelegram: "✈️ Telegram Channel",
      btnEmail: "📧 Send Email",
      emailCopied: "Email copied to clipboard!",
      copyEmail: "Copy Email (mnfbinfo@gmail.com)",
      close: "Close",
    },
    footer: {
      copyright: "© 2026 DMT4-Deriv Pro. All rights reserved.",
      disclaimer:
        "⚠️ Risk Warning: Trading financial instruments and synthetic indices involves substantial risk of loss. DMT4-Deriv Pro is a technology bridging utility for MetaTrader 4 and does not provide financial advice. Always test in a Demo account before risking real capital.",
    },
  },
  ES: {
    meta: {
      appName: "DMT4-Deriv Pro",
      version: "v5.7 - Mirror & OrderBridge",
      tagline: "Espejado Deriv para MetaTrader 4 en Tiempo Real",
      trialBadge: "🔥 Prueba de 3 Días Activa — Gratis y sin compromiso",
    },
    nav: {
      home: "Inicio",
      liveDemo: "Simulador",
      features: "Características",
      modes: "Modos de Entrada",
      indices: "Activos Sintéticos",
      howItWorks: "Cómo Funciona",
      pricing: "Planes y Precios",
      faq: "Preguntas Frecuentes",
      downloadBtn: "Descargar Gratis (3 Días)",
      getStarted: "Activar Licencia",
    },
    hero: {
      badge: "VERSIÓN v5.7 · ESPEJADO NATIVO .HST",
      titleHighlight: "Conecte Deriv a MetaTrader 4",
      titleSuffix: "con precisión de milisegundos y automatización de órdenes.",
      description:
        "Espeje gráficos de índices sintéticos (Volatility y Jump) de Deriv directamente a las carpetas del MT4 en formato binario .hst nativo. Opere con botones CALL/PUT, 3 modos de entrada y monitoree su rendimiento en el Panel de Órdenes en tiempo real.",
      btnDownload: "📥 Descargar Gratis (3 Días)",
      btnViewPlans: "🛒 Ver Planes y Precios",
      btnLiveDemo: "🖥️ Probar Simulador Interactivo",
      statLatency: "50ms Latencia",
      statUptime: "99.9% Uptime",
      statAssets: "15 Activos",
      statTimeframes: "7 Temporalidades (M1-D1)",
      activeTraders: "500+ Traders activos operando diariamente",
      trustNotice:
        "Exclusivo para cuentas Deriv · Compatible con cualquier terminal MT4 (Windows 10/11 & VPS)",
    },
    simulator: {
      title: "Experimente la Interfaz Oficial de DMT4-Deriv v5.7",
      subtitle:
        "Una réplica exacta de la aplicación de escritorio. Pruebe la conexión, observe los ticks entrantes y examine el Panel de Órdenes.",
      tabApp: "💻 Ventana Principal",
      tabOrders: "📊 Panel de Órdenes",
      tabDiagram: "🔄 Diagrama Deriv ➔ MT4",
      statusLive: "EN VIVO",
      statusConnecting: "CONECTANDO",
      statusStopped: "PARADO",
      uptime: "Tiempo Activo:",
      ticks: "Ticks:",
      candles: "Velas:",
      patLabel: "PAT de Deriv (Token):",
      createTokenLink: "Crear Token Deriv",
      mt4PathLabel: "Directorio MT4 History:",
      accountType: "Tipo de Cuenta:",
      btnStart: "INICIAR",
      btnStop: "PARAR",
      btnOrders: "📊 Órdenes",
      btnReset: "RESET",
      autoLocateTip:
        "🔍 El escaneo automático localiza las carpetas MetaQuotes/Terminal",
      licenseBarTrial: "Prueba de 3 días activa (Acceso completo desbloqueado)",
      btnBuyLicense: "🔥 ACTIVAR LICENCIA DEFINITIVA",
    },
    ordersPanel: {
      title: "📊 PANEL DE ÓRDENES EN TIEMPO REAL",
      accountInfo: "Cuenta: CR2941088 (REAL)  |  Saldo: $1,482.50 USD",
      statTotal: "TOTAL",
      statWon: "GANADAS",
      statLost: "PERDIDAS",
      statWinRate: "WIN RATE",
      statProfit: "GANANCIA",
      colId: "#",
      colStart: "Inicio",
      colClose: "Cierre",
      colSymbol: "Símbolo",
      colType: "Tipo",
      colAmount: "Valor",
      colDuration: "Duración",
      colMode: "Entrada",
      colStatus: "Estado",
      colProfit: "Ganancia",
      modeSame: "Misma Vela",
      modeNext: "Próxima Vela",
      modeCross: "Cruzada",
      statusWon: "GANÓ",
      statusLost: "PERDIÓ",
      statusOpen: "ABIERTO",
      clearHistory: "Limpiar Historial",
      newSimOrder: "+ Simular Nueva Orden",
    },
    features: {
      title: "Por qué los traders profesionales eligen DMT4-Deriv Pro",
      subtitle:
        "Diseñado específicamente para erradicar el retraso entre la API de Deriv y MetaTrader 4.",
      item1Title: "Espejado Nativo .HST en Tiempo Real",
      item1Desc:
        "Escritura directa en los archivos de histórico binarios .hst de MT4 con latencia inferior a 50ms.",
      item2Title: "3 Modos Exclusivos de Entrada",
      item2Desc:
        "Opere en Misma Vela (ejecución al instante), Próxima Vela (al abrir la vela) o Cruzada (duración continua del contrato).",
      item3Title: "OrderBridge y Botones CALL/PUT",
      item3Desc:
        "Coloque órdenes directamente desde el gráfico de MT4 con gestión de riesgo y ejecución veloz.",
      item4Title: "15 Índices Sintéticos Compatibles",
      item4Desc:
        "Volatility 10 al 100, versiones de 1 segundo (V10S a V100S) y Jump Indices (J10 a J100).",
      item5Title: "Panel de Control en Tiempo Real",
      item5Desc:
        "Métricas completas con cálculo de Win Rate, volumen, balance y beneficio neto en dólares.",
      item6Title: "Cuentas DEMO y REAL Integradas",
      item6Desc:
        "Practique en cuenta virtual y cambie a cuenta real con un solo clic.",
    },
    modes: {
      title: "Domine los 3 Modos de Ejecución",
      subtitle:
        "Cada estrategia requiere un punto de disparo óptimo. DMT4 le da el control exacto.",
      sameTitle: "Misma Vela (Ejecución Inmediata)",
      sameDesc:
        "La orden se dispara al milisegundo del clic o de la señal de su indicador, aprovechando la fuerza actual.",
      sameBadge: "Disparo Rápido",
      nextTitle: "Próxima Vela (Apertura)",
      nextDesc:
        "Pre-configura la orden para ejecutarse al abrir la siguiente vela. Ideal para Price Action.",
      nextBadge: "Apertura de Vela",
      crossTitle: "Cruzada (Cross Candle)",
      crossDesc:
        "Duración continua (ej: orden de 1 min abierta a los 20s finaliza a los 20s de la siguiente vela).",
      crossBadge: "Duración Continua",
    },
    indices: {
      title: "Catálogo de 15 Índices Sintéticos",
      subtitle:
        "Todos los activos generados en 7 temporalidades simultáneas: M1, M5, M15, M30, H1, H4 y D1.",
      filterAll: "Todos (15)",
      filterVol: "Volatility Estándar (5)",
      filterVol1s: "Volatility 1-Segundo (5)",
      filterJump: "Jump Indices (5)",
    },
    autoTrade: {
      badge: "🔥 NUEVO: MODO 100% AUTOMÁTICO",
      title: "Cómo Operar en Modo Automático con DMT4-Deriv",
      subtitle:
        "Guía paso a paso para conectar sus indicadores de MT4 a Deriv con ejecución en milisegundos y control de riesgo.",
      step1Title: "1. Habilitar Permisos en MT4",
      step1Desc:
        "En MetaTrader 4, vaya a Herramientas > Opciones > Expert Advisors. Marque 'Permitir AutoTrading' y 'Permitir importación de DLL'.",
      step2Title: "2. Configurar Token Deriv y Activos",
      step2Desc:
        "Ingrese su Personal Access Token (PAT) con permisos de Trade en DMT4 y elija los índices sintéticos deseados (ej: Volatility 100).",
      step3Title: "3. Detección Automática de Señales",
      step3Desc:
        "El escáner lee flechas y búferes de indicadores en tiempo real en MT4, disparando órdenes ultra rápidas vía WebSocket (~40ms).",
      step4Title: "4. Gestión de Riesgo y Martingale",
      step4Desc:
        "Establezca límites diarios de Stop Loss y Take Profit, junto con Martingale inteligente con factor progresivo y tope de niveles.",
      step5Title: "5. Validación en Cuenta Virtual (Demo)",
      step5Desc:
        "Pruebe primero en cuenta demo de Deriv. Evalúe el Win Rate y la latencia en el Panel de Órdenes antes de arriscar dinero real.",
      step6Title: "6. Cambio a Cuenta Real",
      step6Desc:
        "Una vez validada la estrategia, cambie el selector a Cuenta Real (CR) con un clic y deje que el bot opere con disciplina total.",
      btnListenKore: "🔊 Escuchar Explicación de Kore",
    },
    steps: {
      title: "Cómo Empezar en 3 Pasos",
      subtitle:
        "Sin configuraciones complejas. Espeje sus gráficos en menos de 3 minutos.",
      step1Title: "1. Descargue y Abra DMT4-Deriv",
      step1Desc:
        "Descargue el paquete de Google Drive con el EA pre-incluido listo para ejecutar.",
      step2Title: "2. Ingrese su Token Deriv (PAT)",
      step2Desc:
        "Genere un Personal Access Token en Deriv con permisos de trade y péguelo en la aplicación.",
      step3Title: "3. Haga Clic en INICIAR y Opere en MT4",
      step3Desc:
        "DMT4 detecta la carpeta de su MetaTrader y comienza a transmitir velas en tiempo real.",
    },
    pricing: {
      title: "Planes Transparentes y Activación Inmediata",
      subtitle:
        "Comience hoy con 3 días de prueba gratuita. Elija el plan ideal para su operativa.",
      trialGuarantee:
        "🛡️ 3 Días de Prueba Gratis Incluidos en Todos los Planes",
      trialDetail:
        "Descargue, pruebe durante 72 horas con acceso completo antes de realizar cualquier pago.",
      monthly: "Mensual",
      quarterly: "Trimestral",
      semiannual: "Semestral",
      perMonth: "/mes",
      popularBadge: "MÁS POPULAR · 20% OFF",
      bestValueBadge: "MÁXIMO AHORRO · 30% OFF",
      buyNow: "🛒 Suscribirse Ahora",
      cancelAnytime: "Cancele cuando quiera en 1 clic",
      secureHotmart: "Pago 100% Seguro y Encriptado",
    },
    faq: {
      title: "Preguntas Frecuentes (FAQ)",
      subtitle: "Respuestas a consultas técnicas sobre DMT4-Deriv Pro.",
      q1: "¿La prueba de 3 días es realmente gratis?",
      a1: "¡Sí! Al abrir la app por primera vez, se activa automáticamente la prueba de 3 días con acceso total sin requerir tarjeta de crédito.",
      q2: "¿Funciona con cualquier bróker en MT4?",
      a2: "¡Sí! DMT4 escribe directamente en los archivos .hst de la carpeta history del MT4, por lo que es compatible con cualquier bróker.",
      q3: "¿Cuál es la latencia de transmisión?",
      a3: "Aproximadamente 50 milisegundos gracias a la conexión WebSocket directa con los servidores de Deriv.",
      q4: "¿Puedo ejecutarlo en un VPS?",
      a4: "Sí, es 100% compatible con Windows Server, Windows 10 y Windows 11 en VPS para operar 24/7.",
      q5: "¿Puedo usar mis propios indicadores de MT4?",
      a5: "¡Sí! Puede añadir cualquier indicador MQL4, plantilla o robot EA a los gráficos espejados.",
      q6: "¿Cómo obtengo soporte técnico?",
      a6: "Brindamos soporte directo vía WhatsApp (+55 49 98842-1072), Telegram y correo electrónico (mnfbinfo@gmail.com).",
    },
    contactModal: {
      title: "Soporte Oficial y Activación",
      desc: "¿Desea resolver dudas o activar su licencia?",
      btnWhatsApp: "💬 Contactar por WhatsApp",
      btnTelegram: "✈️ Canal de Telegram",
      btnEmail: "📧 Enviar Correo",
      emailCopied: "¡Correo copiado al portapapeles!",
      copyEmail: "Copiar Correo (mnfbinfo@gmail.com)",
      close: "Cerrar",
    },
    footer: {
      copyright: "© 2026 DMT4-Deriv Pro. Todos los derechos reservados.",
      disclaimer:
        "⚠️ Aviso de Riesgo: Las operaciones con instrumentos financieros e índices sintéticos implican un riesgo considerable de pérdida. DMT4-Deriv Pro es una herramienta tecnológica de puente para MetaTrader 4 y no proporciona asesoramiento financiero. Opere siempre en cuenta Demo antes de utilizar fondos reales.",
    },
  },
};
