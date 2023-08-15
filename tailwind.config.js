/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '24rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}