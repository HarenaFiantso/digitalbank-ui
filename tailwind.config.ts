import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        white: '#FFF',
        color: '#6D6A7C',
        light: '#A19FAD',
        blue: '#7d6fd9',
      },
      backgroundColor: {
        main: '#151c2c',
        hover: '#2e374a',
        'main-soft': '#182237',
      },
    },
  },
  plugins: [],
};
export default config;
