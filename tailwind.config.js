/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newsPaper: ['NewsPaper'],
      },
      colors: {
        newsBlack: '#4e4d47',
        newsBG: '#f5dec4'
      }
    },
  },
  plugins: [],
}

