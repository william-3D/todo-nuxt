/** @type {import('tailwindcss').Config} */
const fs = require('fs');
const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px', // iPad portrait
      lg: '1024px', // iPad landscape
      xl: '1280px', // 150% scale of 1920px
      '2xl': '1536px', // 125% scale of 1920px
      '3xl': '1920px', // 100% scale of 1920px
    },
    extend: {
      colors: {
        "sc-red": "#FF0000",
        "sc-green": "#44B44A",
        "sc-lavender": "#AD91F8",
        "sc-turquoise": "#5FEFB6",
        "sc-orange": "#FF9452",
        "sc-blue": "#699DFF",
        "sc-yellow": "#FFCE00",
        "sc-salmon": "#FF6969",
        "sc-midnight": "#121E3B",
        "sc-charcoal": "#404040",
        "sc-silver": "#E5E5E5",
        "sc-white": "#F5F5F5"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'sc-h1': [
          '4rem', {
            lineHeight: '5rem',
            letterSpacing: '-3px',
            fontWeight: '700',
          }
        ],
        'sc-h2': [
          '3.75rem', {
            lineHeight: '3.75rem',
            letterSpacing: '-0.00833em',
            fontWeight: '300',
          }
        ],
        'sc-h3': [
          '3rem', {
            lineHeight: '3.125rem',
            letterSpacing: 'normal',
            fontWeight: '400',
          }
        ],
        'sc-h4': [
          '2.125rem', {
            lineHeight: '2.5rem',
            letterSpacing: '0.00735em',
            fontWeight: '400',
          }
        ],
        'sc-h5': [
          '1.5rem', {
            lineHeight: '2rem',
            letterSpacing: 'normal',
            fontWeight: '400',
          }
        ],
        'sc-h6': [
          '1.25rem', {
            lineHeight: '2rem',
            letterSpacing: '0.0125em',
            fontWeight: '500',
          }
        ],
        'sc-subtitle1': [
          '1rem', {
            lineHeight: '1.75rem',
            letterSpacing: '0.00937em',
            fontWeight: '400',
          }
        ],
        'sc-subtitle2': [
          '0.875rem', {
            lineHeight: '1.375rem',
            letterSpacing: '0.00714em',
            fontWeight: '500',
          }
        ],
        'sc-body1': [
          '1rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0.03125em',
            fontWeight: '400',
          }
        ],
        'sc-body2': [
          '0.875rem', {
            lineHeight: '1.25rem',
            letterSpacing: '0.01786em',
            fontWeight: '400',
          }
        ],
        'sc-overline': [
          '0.75rem', {
            lineHeight: '2rem',
            letterSpacing: '0.16667em',
            fontWeight: '500',
          }
        ],
        'sc-caption': [
          '0.75rem', {
            lineHeight: '1.25rem',
            letterSpacing: '0.03333em',
            fontWeight: '400',
          }
        ],
      },
    },
  },
  plugins: [],
}