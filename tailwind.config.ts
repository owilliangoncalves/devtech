import { Inter } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '300px',
        md: '768px',
        lg: '976px',
        xl: '1920px',
      },
    },
    extend: {
      backgroundImage: {},
    },
    colors: {
      important: '#3c3c42',
      muted: '#67676C',
      hover: '#e0e0e0',
      card: '#F6F6F7',
    },
  },
  plugins: [],
};
export default config;
