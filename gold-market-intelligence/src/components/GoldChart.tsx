'use client';
import { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries, ColorType, type UTCTimestamp } from 'lightweight-charts';
import type { Candle } from '@/types/market';
export function GoldChart({candles}:{candles:Candle[]}) {
 const container=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!container.current)return;
  const chart=createChart(container.current,{width:container.current.clientWidth,height:340,layout:{background:{type:ColorType.Solid,color:'#111b2e'},textColor:'#9aabc3'},grid:{vertLines:{color:'#1b2840'},horzLines:{color:'#1b2840'}},timeScale:{borderColor:'#34415b'},rightPriceScale:{borderColor:'#34415b'}});
  const series=chart.addSeries(CandlestickSeries,{upColor:'#41d7a1',downColor:'#fa7286',borderVisible:false,wickUpColor:'#41d7a1',wickDownColor:'#fa7286'});
  series.setData(candles.map(c=>({time:(Date.parse(c.time)/1000) as UTCTimestamp,open:c.open,high:c.high,low:c.low,close:c.close})));
  chart.timeScale().fitContent();
  const observer=new ResizeObserver(()=>chart.applyOptions({width:container.current?.clientWidth||600}));observer.observe(container.current);
  return ()=>{observer.disconnect();chart.remove()};
 },[candles]);
 return <div ref={container} className="w-full" aria-label="Demo candlestick chart"/>;
}
