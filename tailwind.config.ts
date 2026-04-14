import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#130B0B',
          card: '#1E1212',
          soft: '#F8F1E7',
          gold: '#C6A96B',
          goldLight: '#E5D2A2',
          maroon: '#6E1F2C'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
