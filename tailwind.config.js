/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '24rem',
      },
      width: {
        '128': "1280px",
        '102': "1024px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}