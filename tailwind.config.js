/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        roboto : ['Roboto', 'sans-serif']
      },
      colors :{
        primary: '#5D3FD3'
      }
    },
  },
  plugins: [],
}