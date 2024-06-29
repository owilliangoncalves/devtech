module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    extend: {
      backgroundImage: {},
      gridTemplateColumns: {
        '22': 'grid-template-columns: 1fr 2fr 1fr;',
      },
      colors: {
        muted: '#67676C',
        card: '#F6F6F7',
        'curious-blue': {
          '50': '#ebfeff',
          '100': '#cdf9ff',
          '200': '#a1f1ff',
          '300': '#60e4ff',
          '400': '#18cdf8',
          '500': '#00b0de',
          '600': '#0095c6',
          '700': '#086f96',
          '800': '#105a7a',
          '900': '#124b67',
          '950': '#053047',
        },
        emerald: {
          '50': '#eefff7',
          '100': '#d7ffee',
          '200': '#b2ffdd',
          '300': '#76ffc4',
          '400': '#33f5a4',
          '500': '#09de85',
          '600': '#00c774',
          '700': '#049157',
          '800': '#0a7147',
          '900': '#0a5d3d',
          '950': '#003420',
        },
      },
    },
    corePlugins: {
      aspectRatio: false,
    },

    plugins: [require('@tailwindcss/aspect-ratio')],
  },
};
