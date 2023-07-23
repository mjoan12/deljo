/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px' ,
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontfamily:{
        sans:['josefin sans','sans-serif'],
        alata:['alata']
      }
    },
  },
  plugins: [],
} 

