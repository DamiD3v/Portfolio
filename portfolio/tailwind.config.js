/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Jersey10PixelFont: ['welcome', 'sans-serif'],
      },
    },
    screens: {
      phone: '640px',
      tablet: '900px',
      laptop: '1024px',
    },
  },
  daisyui:{
    themes: [],
  },
  plugins: [
    require('daisyui'),
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}
