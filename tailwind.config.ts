module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
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
    corePlugins: {
      aspectRatio: false,
    },

    plugins: [require('@tailwindcss/aspect-ratio')],
  },
};
