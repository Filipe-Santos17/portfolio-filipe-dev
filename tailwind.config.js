/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkNeutral: '#121212',
        modalBg:'#20212C30',
      }
    },
  },
  plugins: [],
}

