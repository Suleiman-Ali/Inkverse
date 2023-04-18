/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      white: '#fff',
      primary: '#49A3F4',
      black: '#373737',
      gray: '#919191',
      'gray-b': '#F7F7F7',
    },
    extend: {},
  },
  plugins: [],
};
