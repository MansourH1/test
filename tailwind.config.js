/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./dist/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      'mano': ['Roboto']
    },
    aspectRatio:{
      'square':['1','1'],
    }
  },
  },
  plugins: [],
}

