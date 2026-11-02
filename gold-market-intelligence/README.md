# Gold Market Intelligence Dashboard

Phase 1 MVP for intraday XAUUSD market analysis. Responsive Next.js dashboard with a synthetic candlestick chart, market-driver cards, explainable rule-based bias, and clearly labeled demo summary.

> **WARNING:** All values in Phase 1 are synthetic demo data, not live quotes. Do not use for trading decisions.

## Requirements
- Node.js 20.9+ (Node.js 22 recommended)
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000

## Validate
```bash
npm run typecheck
npm test
npm run build
```

## Open in Codex
1. Extract the ZIP and open the `gold-market-intelligence` folder as the workspace/repository in Codex.
2. Ask Codex: `Inspect this Next.js Phase 1 MVP, install dependencies, run typecheck/tests/build, fix any issues, then propose Phase 2 provider integration without inventing market data. Do not implement Phase 2 until approved.`
3. Optionally initialize Git: `git init && git add . && git commit -m "Phase 1 dashboard MVP"`.
4. Never commit `.env.local` or API secrets.

## Phase 1 scope
- Responsive desktop/mobile dark UI
- Synthetic M15 candlestick chart
- Synthetic XAUUSD and market driver cards
- Deterministic market bias and coverage display
- Explicit demo and unavailable-data labeling
- Unit tests for bias

## Out of scope
Real market feeds, economic calendar integration, AI API calls, authenticated accounts, alerts, trading execution.

## Next phase
Add provider adapters and real quotes with clear timestamps, licensing checks, caching, and graceful failures. See `docs/architecture.md`.
