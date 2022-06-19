const {
  screens,
  letterSpacing,
  lineHeight
} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    minHeight: (theme) => ({
      ...theme('spacing'),
      'custom-min': '100vh',
      'px-350': '350px'
    }),

    minWidth: (theme) => ({
      ...theme('spacing'),
      'custom-min': '100vw',
      'custom-small': '150px'

    }),

    screens: {
      'xsm': '480px',
      ...screens
    },


    extend: {

      colors: {
        "custom-transparent": "rgba(0, 0, 0, 0.5)",
        'custom-gray-light': '#F8F4F9',
        'custom-gray-light-secondary': '#F2EFF2',
      },

      height: {
        'px-150': '150px'
      },


      fontSize: {
        'custom-xxlg': '60px',
        'custom-xxlg-md': '50px',
        'custom-xxlg-sm': '40px',
        'custom-xlg': '32px',
        'custom-lg': '28px',
        'custom-md': '22px',
        'custom-md-sm': '20px',
        'custom-sm': '18px',

        'custom-xsm': '20px',
        'custom-xxsm': '16px',
        'custom-xxxsm': '10px'
      },

      fontFamily: {
        'dm-serif-display': 'DM Serif Display',
        'montserrat': 'Montserrat'
      },

      lineHeight: {
        'hero-spaced': '110%'
      },

    },
  },
  plugins: [],
}