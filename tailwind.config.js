/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#454545',
        'secondary': '#70d6ff',
        'background' : 'white',
        'darkPrimary': '',
        'darkSecondary': '',
        'darkBackground': 'black'
      },
      fontFamily: {
        'logo': ['"Major Mono Display"', 'monospace']
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
