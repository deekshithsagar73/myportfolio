module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-75': '75vh',
      },
      colors: {
        primary: '#0d0d0d',
        secondary: '#1a1a1a',
        tertiary: '#1e1e1e',
        dark: '#0f2027',
        darker: '#203a43',
        darkest: '#2c5364',
        'blue-600': '#80deea',
        'blue-800': '#80deea',
      },
    },
  },
  plugins: [],
};
