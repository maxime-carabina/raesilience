// This is the tailwind preset for Raesilience.

// We disable eslint to be able to define plugins.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

import { colorWhite, colorBlack, colorOrange, colorGrey } from './colors.js';

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      HelveticaLt: ['HelveticaLt', 'sans-serif'],
      HelveticaNeueMd: ['HelveticaNeueMd', 'sans-serif'],
      HelveticaBold: ['HelveticaBold', 'sans-serif'],
      MyriadProRegular: ['MyriadProRegular', 'sans-serif'],
    },
    extend: {
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-loop': 'loop 15s linear infinite',
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: colorWhite,
        secondary: colorBlack,
        tertiary: colorGrey,
        brand: colorOrange,
        // fonts:
        'f-primary': colorBlack,
        'f-secondary': colorWhite,
        'f-tertiary': colorOrange,
      },
      dark: {
        primary: colorBlack,
        secondary: colorWhite,
        tertiary: colorGrey,
        brand: colorOrange,
        // fonts:
        'f-primary': colorWhite,
        'f-secondary': colorGrey,
        'f-tertiary': colorOrange,
      },
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.rae-big-banner': {
          fontSize: '64px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
          fontStyle: 'normal',
        },
        '.rae-banner': {
          fontSize: '33px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
          fontStyle: 'normal',
        },
        '.rae-title': {
          fontSize: '28px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
        },
        '.rae-h2': {
          fontSize: '20px',
          fontWeight: '300',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
        },
        '.rae-h3': {
          fontSize: '16px',
          fontWeight: '100',
          fontFamily: theme('fontFamily.HelveticaLt'),
        },
        '.rae-buttons': {
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: theme('fontFamily.HelveticaLt'),
        },
        '.rae-body': {
          fontSize: '16px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
          lineHeight: '24px',
          fontStyle: 'normal',
        },
        '.rae-body2': {
          fontSize: '16px',
          fontWeight: '100',
          fontFamily: theme('fontFamily.helveticaLt'),
          lineHeight: '24px',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
