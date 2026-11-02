export type Freshness = 'REALTIME' | 'DELAYED' | 'PERIODIC' | 'STALE' | 'UNAVAILABLE' | 'DEMO';
export type Direction = 'up' | 'down' | 'flat';
export type MarketMetric = { id: string; name: string; symbol: string; value: number | null; unit: string; changePercent: number | null; direction: Direction; interpretation: string; source: string; sourceTimestamp: string | null; receivedTimestamp: string | null; freshness: Freshness };
export type Candle = { time: string; open: number; high: number; low: number; close: number };
export type BiasLabel = 'BULLISH' | 'MILD BULLISH' | 'NEUTRAL' | 'MILD BEARISH' | 'BEARISH' | 'INSUFFICIENT DATA';
export type BiasFactor = { id: string; label: string; score: number; available: boolean; explanation: string };
export type BiasResult = { label: BiasLabel; score: number | null; coverage: number; factors: BiasFactor[] };
export interface MarketDataProvider { id: string; getMetrics(): Promise<MarketMetric[]>; getCandles(symbol: string, timeframe: string): Promise<Candle[]> }
