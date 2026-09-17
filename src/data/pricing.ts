import { PricingPlan } from '../types';

export const DOWNLOAD_URL =
  'https://drive.google.com/drive/folders/1Igyj8ZSL1U4SZovSV2wMMij9MegH-xfO?usp=sharing';

export const SUPPORT_CONTACTS = {
  whatsapp: '5549988421072',
  whatsappUrl:
    'https://wa.me/5549988421072?text=Ol%C3%A1!%20Gostaria%20de%20ativar%20minha%20licen%C3%A7a%20do%20DMT4-Deriv.',
  telegramUrl: 'https://t.me/+ppOI7BSf6twxODgx',
  email: 'mnfbinfo@gmail.com',
  derivTokenUrl: 'https://developers.deriv.com/dashboard/tokens/create/',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Mensal',
    priceMonth: 'R$ 49,90',
    periodLabel: '/mês',
    billingSummary: 'Cobrado mensalmente · Cancele quando quiser',
    hotmartUrl: 'https://pay.hotmart.com/H107594588G?off=u2k8rzfz',
    features: [
      '3 Dias de teste grátis pré-ativados',
      'Espelhamento ilimitado de 15 índices sintéticos',
      '7 Timeframes simultâneos (.hst em tempo real)',
      '3 Modos de Entrada (Mesma Vela, Próxima, Cruzada)',
      'OrderBridge & Botões CALL/PUT no MT4',
      'Painel de Ordens com Win Rate e métricas',
      'Suporte via WhatsApp e Telegram',
    ],
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    priceMonth: 'R$ 39,90',
    periodLabel: '/mês',
    billingSummary: 'Cobrado R$ 119,70 a cada 3 meses',
    badge: 'MAIS POPULAR · ECONOMIZE 20%',
    isPopular: true,
    hotmartUrl: 'https://pay.hotmart.com/H107594588G?off=2zo21d3n',
    features: [
      '3 Dias de teste grátis pré-ativados',
      'Tudo do Plano Mensal incluso',
      'Economia imediata de 20%',
      'Prioridade na fila de suporte',
      'Acesso antecipado a atualizações e novos índices',
      'Garantia total de estabilidade 99.9%',
      'Melhor custo-benefício comprovado',
    ],
  },
  {
    id: 'semiannual',
    name: 'Semestral',
    priceMonth: 'R$ 34,90',
    periodLabel: '/mês',
    billingSummary: 'Cobrado R$ 209,40 a cada 6 meses',
    badge: 'MÁXIMA ECONOMIA · 30% OFF',
    hotmartUrl: 'https://pay.hotmart.com/H107594588G?off=w4vj2yo2',
    features: [
      '3 Dias de teste grátis pré-ativados',
      'Todos os recursos premium desbloqueados',
      'Menor valor mensal por assinatura',
      'Suporte VIP direto com os desenvolvedores',
      'Orientação para instalação em VPS e robôs',
      'Licença de longa duração sem preocupações',
      'Atualizações futuras automáticas garantidas',
    ],
  },
];
