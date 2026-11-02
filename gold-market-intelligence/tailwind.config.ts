import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#090f1d', panel: '#111b2e', border: '#25324a', muted: '#9aabc3', mint: '#41d7a1', danger: '#fa7286', gold: '#f4c56d' } } }, plugins: [] } satisfies Config;
