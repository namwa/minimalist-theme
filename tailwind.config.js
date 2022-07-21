/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Merriweather', 'serif'],
        'body': ['Lato', 'sans-serif']
      },
    },
  }
}
