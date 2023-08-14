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
        '.rae-banner': {
          fontSize: '64px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
          fontStyle: 'normal',
        },
        '.rae-title': {
          fontSize: '33px',
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
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaLt'),
        },
        '.mas-buttons': {
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: theme('fontFamily.HelveticaLt'),
        },
        '.mas-body': {
          fontSize: '16px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.HelveticaNeueMd'),
          lineHeight: '24px',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
