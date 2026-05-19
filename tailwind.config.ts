import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sawtooth Customs / Sawtooth Roofing brand palette
        brand: {
          red: '#a01d25',      // Primary — Deep Red
          'red-dark': '#7c161c',
          'red-light': '#c8323d',
          black: '#0b0d0f',    // Slate Black accent
          gray: '#6d797d',     // Logo gray
          'gray-light': '#b6bcbe',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-cta': '0 8px 24px -8px rgba(160, 29, 37, 0.45)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
