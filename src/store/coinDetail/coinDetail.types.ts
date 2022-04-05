export interface CoinDetail {
  readonly usd: number;
  readonly usd_market_cap: number;
  readonly last_updated_at: number;
}

export interface GetCoinDetailRequestData {
  readonly ids: string;
  readonly vs_currencies: string;
  readonly include_market_cap?: boolean;
  readonly include_last_updated_at?: boolean;
}

export type GetCoinDetailResponseData<T extends string> = Record<T, CoinDetail>;
