const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#14213d',
        yellowOrange: '#FCA311',
        softWhite: '#E5E5E5',
      },
      fontFamily: {
        heading: ['Koulen', ...defaultTheme.fontFamily.serif],
        standard: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}