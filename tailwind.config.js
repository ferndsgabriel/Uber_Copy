/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        0.5:'2px'
      }
    },borderWidth:{
      1:'1px',
      2:'2px'
    },keyframes:{
      arrow:{
        '0%':{
          transform:'translateX(100px)'
        },
        '50%':{
        },
        '100':{
          transform:'translateX(0px)'
        }
      }
    },animation:{
      arrow:'arrow 1.5s alternate-reverse'
    }

  },
  plugins: [],
}

