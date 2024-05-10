/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'solo-green1': '#B9C62D',
        'solo-green2': '#D5E9E8'
      }
    }
  },
plugins:[]
};