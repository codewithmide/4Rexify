1/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/script.js"],
  theme: {
    colors: {
      'orange': '#F6AA1C',
      'darkSienna': '#220901',
      'white': '#ffffff',
    },
    fontWeight: {
      'light': 100,
      'normal': 400,
      'bold': 700
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
    extend: {
      fontFamily: {
        Serif: ['Epilogue', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'small': '0.8rem',
        'normal': '1rem',
        'medium': '1.6rem',
        'semiBig': '2.5rem',
        'big': '4.5rem'
      }
    },
  },
  plugins: [],
}
