import { describe, expect, it } from 'vitest';
import { calculateBias } from '../src/lib/bias';
describe('calculateBias',()=>{
 it('returns insufficient data when critical coverage is low',()=>{expect(calculateBias([{id:'a',label:'a',score:100,available:false,explanation:''}]).label).toBe('INSUFFICIENT DATA')});
 it('returns bullish with four strong positive factors',()=>{expect(calculateBias(Array.from({length:4},(_,i)=>({id:String(i),label:'x',score:80,available:true,explanation:''}))).label).toBe('BULLISH')});
 it('clamps score to 100',()=>{expect(calculateBias([{id:'a',label:'a',score:500,available:true,explanation:''}]).score).toBe(100)});
});
