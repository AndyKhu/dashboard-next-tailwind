/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['var(--font-roboto)']
      },
      flex:{
        '2': '1 0 auto'
      },
      colors: {
        'primary':{
          1:'#4482ff',
          2:'#5896ff'
        },
        'success':{
          1: '#67C23A',
          2: '#85ce61'
        },
        'warning': {
          1: '#E6A23C',
          2: '#ebb563'
        },
        'danger':{
          1: '#f64744',
          2: '#ff5b58'
        },
        'info':{
          1:'#909399',
          2:'#a6a9ad'
        }
      }
    },
  },
  plugins: [],
}
