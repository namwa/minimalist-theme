/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Merriweather Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
    },
  }
}
