const { colors } = require('tailwindcss/defaulttheme');

module.exports = {
  purge: ['/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      main: '#101010',
      body: '#444444',
      lightBorder: '#aaa',
      white: '#fff',
      red: colors.red,
      blue: colors.blue
    },
    container: {
      center: true,
      padding: '15px'
    },
    extend: {
      fontFamily: {
        'body': ['Roboto Mono', 'monospace'],
        'title': ['Lato', 'sans-serif'],
      },
      fontSize: {
        big: '12rem',
        '10xl': '10rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
