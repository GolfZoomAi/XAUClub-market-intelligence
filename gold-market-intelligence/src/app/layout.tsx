import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Gold Market Intelligence | Demo',description:'Intraday XAUUSD market intelligence dashboard — Phase 1 demo'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}
