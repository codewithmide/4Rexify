1/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/script.js"],
  theme: {
    colors: {
      'grey': '#e5e5e5',
      'orange': '#fca311',
      'blue': '#14213d',
      'black': '#000000',
      'white': '#ffffff',
    },
    fontWeight: {
      'light': 100,
      'normal': 400,
      'bold': 700
    },
    extend: {
      fontFamily: {
        Serif: ['Epilogue', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'small': '1rem',
        'medium': '1.6rem',
        'semiBig': '2.5rem',
        'big': '4.5rem'
      }
    },
  },
  plugins: [],
}
