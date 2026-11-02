import type { Candle, MarketMetric, BiasFactor } from '@/types/market';
// DEMONSTRATION DATA ONLY. Not actual market data and not for trading decisions.
export const DEMO_METRICS: MarketMetric[] = [
 { id:'xau',name:'Gold Spot',symbol:'XAUUSD',value:4038.25,unit:'USD/oz',changePercent:0.42,direction:'up',interpretation:'Illustrative price only',source:'DEMO GENERATOR',sourceTimestamp:null,receivedTimestamp:null,freshness:'DEMO' },
 { id:'dxy',name:'US Dollar Index',symbol:'DXY',value:99.21,unit:'index',changePercent:-0.24,direction:'down',interpretation:'Weaker USD may support gold',source:'DEMO GENERATOR',sourceTimestamp:null,receivedTimestamp:null,freshness:'DEMO' },
 { id:'yield',name:'US 10Y Yield',symbol:'US10Y',value:4.13,unit:'%',changePercent:-0.08,direction:'down',interpretation:'Nominal yield, not real yield',source:'DEMO GENERATOR',sourceTimestamp:null,receivedTimestamp:null,freshness:'DEMO' },
 { id:'real',name:'10Y Real Yield',symbol:'DFII10',value:1.79,unit:'%',changePercent:-0.03,direction:'down',interpretation:'Daily series; not live in production',source:'DEMO GENERATOR',sourceTimestamp:null,receivedTimestamp:null,freshness:'DEMO' },
 { id:'gc',name:'Gold Futures',symbol:'GC',value:4050.8,unit:'USD/oz',changePercent:0.39,direction:'up',interpretation:'Futures contract month must be specified in live mode',source:'DEMO GENERATOR',sourceTimestamp:null,receivedTimestamp:null,freshness:'DEMO' }
];
export const DEMO_FACTORS: BiasFactor[] = [
 {id:'technical',label:'XAUUSD M15 Structure',score:65,available:true,explanation:'Illustrative higher highs and higher lows'},
 {id:'dxy',label:'DXY Trend',score:55,available:true,explanation:'Illustrative USD weakness'},
 {id:'real',label:'US Real Yield',score:35,available:true,explanation:'Illustrative downward real-yield trend'},
 {id:'futures',label:'Gold Futures',score:50,available:true,explanation:'Illustrative upward price direction'}
];
export const DEMO_CANDLES: Candle[] = Array.from({length:96},(_,i)=>{
 const base=4000 + i*0.32 + Math.sin(i/5)*10 + Math.sin(i/2.8)*3;
 const open=base+Math.sin(i*2)*2, close=base+Math.cos(i*1.7)*2;
 return {time:new Date(Date.UTC(2026,9,29,0,i*15)).toISOString(),open:+open.toFixed(2),close:+close.toFixed(2),high:+(Math.max(open,close)+2.5).toFixed(2),low:+(Math.min(open,close)-2.5).toFixed(2)};
});
