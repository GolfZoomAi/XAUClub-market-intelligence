import type { BiasFactor, BiasResult, BiasLabel } from '@/types/market';
export function calculateBias(factors: BiasFactor[]): BiasResult {
  const valid = factors.filter(f => f.available && Number.isFinite(f.score));
  const coverage = factors.length ? Math.round((valid.length / factors.length) * 100) : 0;
  if (coverage < 75 || valid.length === 0) return { label: 'INSUFFICIENT DATA', score: null, coverage, factors };
  const score = Math.max(-100, Math.min(100, Math.round(valid.reduce((sum, f) => sum + f.score, 0) / valid.length)));
  const label: BiasLabel = score >= 60 ? 'BULLISH' : score >= 20 ? 'MILD BULLISH' : score <= -60 ? 'BEARISH' : score <= -20 ? 'MILD BEARISH' : 'NEUTRAL';
  return { label, score, coverage, factors };
}
