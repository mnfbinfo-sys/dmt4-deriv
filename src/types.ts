export type Language = 'PT' | 'EN' | 'ES';

export interface SyntheticIndex {
  symbol: string;
  name: string;
  category: 'volatility' | 'volatility_1s' | 'jump';
  digits: number;
  mt4Code: string;
  description: string;
  basePrice: number;
}

export interface SimulatedOrder {
  id: number;
  entry_time: string;
  exit_time: string;
  symbol: string;
  type: 'CALL' | 'PUT';
  amount: number;
  duration: string;
  duration_unit: string;
  entry_mode: 'current_candle' | 'next_candle' | 'cross_candle';
  status: 'WON' | 'LOST' | 'OPEN' | 'PENDING' | 'ERROR';
  profit: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonth: string;
  periodLabel: string;
  billingSummary?: string;
  badge?: string;
  isPopular?: boolean;
  hotmartUrl: string;
  features: string[];
}
