// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include this line if you are using the new App Router
    './src/**/*.{js,ts,jsx,tsx}', // Include this if your source files are under src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
