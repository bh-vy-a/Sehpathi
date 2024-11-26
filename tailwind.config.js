/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7BD3EA',
        secondary: '#A1EEBD',
        accent: '#F6F7C4',
        soft: '#F6D6D6'
      }
    },
  },
  plugins: [],
};