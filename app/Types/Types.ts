export interface ICryptoData {
  id: string;
  name: string;
  abbreviation: string;
  image: string;
  price: number;
  marketCap: number;
  volume24h: number;
  allTimeHigh: number;
}

export interface ICryptoDataAPI {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  ath: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
}
