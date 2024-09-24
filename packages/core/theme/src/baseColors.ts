/**
 * base-colors.ts
 *
 * Base colors are the colors that are the foundation of the design system. They are atomic colors and are never used directly in the UI.
 * Instead we use CSS variables to define named colors (neutral, primary, secondary, etc.) that are used in the UI and reference the base colors.
 *
 * The colors are provided in a shade scale of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950. There will also be a DEFAULT color that is the default color for the theme,
 * a 'foreground' color that is used for text and icons, and a 'background' color that is used for the background of the UI.
 *
 * The colors are in hex format for Tailwind CSS compatibility.
 */

import { ColorScale } from './types';

/**
 * Cool gray (a gray color scale with a blue undertone)
 */
export const coolGray: ColorScale = {
  50: '#f5f8fa',
  100: '#e0e6eb',
  200: '#c2cdd6',
  300: '#a3b4c2',
  400: '#859aad',
  500: '#668199',
  600: '#52677a',
  700: '#3d4e5c',
  800: '#29343d',
  900: '#141a1f',
  950: '#0a0d0f',
  DEFAULT: '#668199',
  foreground: {
    light: '#f5f8fa',
    dark: '#141a1f',
  },
  background: {
    light: '#141a1f',
    dark: '#f5f8fa',
  },
};

/**
 * Science blue (a blue color scale)
 */
export const scienceBlue: ColorScale = {
  50: '#f1f7fe',
  100: '#e3ecfb',
  200: '#c0d9f7',
  300: '#88bbf1',
  400: '#4998e7',
  500: '#227bd5',
  600: '#1565c0',
  700: '#114c93',
  800: '#12427a',
  900: '#153965',
  950: '#0e2443',
  DEFAULT: '#227bd5',
  foreground: {
    light: '#f1f7fe',
    dark: '#153965',
  },
  background: {
    light: '#153965',
    dark: '#f1f7fe',
  },
};

/**
 * Fuchsia blue (a purple color scale)
 */
export const fuchsiaBlue: ColorScale = {
  50: '#faf6fe',
  100: '#f2ebfc',
  200: '#e7dafa',
  300: '#d5bdf5',
  400: '#bc93ed',
  500: '#a269e3',
  600: '#8a48d3',
  700: '#7737b9',
  800: '#643297',
  900: '#52297a',
  950: '#361259',
  DEFAULT: '#a269e3',
  foreground: {
    light: '#faf6fe',
    dark: '#361259',
  },
  background: {
    light: '#361259',
    dark: '#faf6fe',
  },
};

/**
 * Aqua forest (a green color scale)
 */
export const aquaForest: ColorScale = {
  50: '#f1f8f2',
  100: '#dcefdc',
  200: '#bcdebe',
  300: '#90c597',
  400: '#67aa72',
  500: '#3f8a4e',
  600: '#2e6d3c',
  700: '#255731',
  800: '#1f4629',
  900: '#1a3a22',
  950: '#0e2014',
  DEFAULT: '#3f8a4e',
  foreground: {
    light: '#f1f8f2',
    dark: '#0e2014',
  },
  background: {
    light: '#0e2014',
    dark: '#f1f8f2',
  },
};

/**
 * Brandy punch (a yellow/orange color scale)
 */
export const brandyPunch: ColorScale = {
  50: '#fbf8ef',
  100: '#f3e9d2',
  200: '#e7d0a0',
  300: '#dab46f',
  400: '#d29d4d',
  500: '#c78037',
  600: '#b0642f',
  700: '#934a2a',
  800: '#793c27',
  900: '#643323',
  950: '#381910',
  DEFAULT: '#c78037',
  foreground: {
    light: '#fbf8ef',
    dark: '#381910',
  },
  background: {
    light: '#381910',
    dark: '#fbf8ef',
  },
};

/**
 * Cardinal red (a red color scale)
 */
export const cardinalRed: ColorScale = {
  50: '#fdf4f3',
  100: '#fce7e7',
  200: '#f8d3d4',
  300: '#f3aeb1',
  400: '#eb8186',
  500: '#df545f',
  600: '#ca3447',
  700: '#bb2a40',
  800: '#8e2336',
  900: '#7a2134',
  950: '#440d18',
  DEFAULT: '#df545f',
  foreground: {
    light: '#fdf4f3',
    dark: '#440d18',
  },
  background: {
    light: '#440d18',
    dark: '#fdf4f3',
  },
};

export const baseColors = {
  coolGray: coolGray,
  scienceBlue: scienceBlue,
  fuchsiaBlue: fuchsiaBlue,
  aquaForest: aquaForest,
  brandyPunch: brandyPunch,
  cardinalRed: cardinalRed,
};
