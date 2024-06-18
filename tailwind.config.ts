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
    },
    colors: {
      important: '#3c3c42',
      muted: '#67676C',
      hover: '#e0e0e0',
      card: '#F6F6F7',
      link: '#3A5CCC',
    },
    corePlugins: {
      aspectRatio: false,
    },

    plugins: [require('@tailwindcss/aspect-ratio')],
  },
};
