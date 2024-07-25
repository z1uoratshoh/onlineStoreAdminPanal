/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},      
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'lm': {'max': '860px'},
      'md': {'max': '767px'},      
      'sm': {'max': '639px'},
      'sx': {'max': '580px'},
      'xs': {'max': '535px'},
    },
    extend: {}
  },
  plugins: [],
}