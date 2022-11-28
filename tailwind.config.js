1/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
            "./src/script.js",
            "./public/user-access/login.html",
            "./public/user-access/signup.html"
          ],
  theme: {
    colors: {
      'mint': '#ADEFD1FF',
      'sailorBlue': '#00203F',
      'shadow': '#0a5dad',
      'white': '#ffffff',
    },
    fontWeight: {
      'light': 100,
      'normal': 400,
      'bold': 700
    },
    screens: {
      sm: '200px',
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
