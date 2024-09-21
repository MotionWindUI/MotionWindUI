import {
  aquaForest,
  brandyPunch,
  cardinalRed,
  coolGray,
  fuchsiaBlue,
  scienceBlue,
} from './baseColors';
import { ColorScale } from './types';

export const neutral = coolGray;
export const primary = scienceBlue;
export const secondary = fuchsiaBlue;
export const success = aquaForest;
export const warning = brandyPunch;
export const danger = cardinalRed;

/**
 * The list of theme colors that are used in the theme.
 */
export const themeColors = {
  neutral,
  primary,
  secondary,
  success,
  warning,
  danger,
};

/**
 * The list of theme colors that are used in the theme.
 */
export type ThemeColor = keyof typeof themeColors;

/**
 * The list of theme color scales that are used in the theme.
 */
export interface ThemeColorConfig {
  neutral: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
}

export const themeColorsThemeConfig = {
  neutral: {
    DEFAULT: 'var(--neutral)',
    foreground: 'var(--neutral-foreground)',
    background: 'var(--neutral-background)',
    50: 'var(--neutral-50)',
    100: 'var(--neutral-100)',
    200: 'var(--neutral-200)',
    300: 'var(--neutral-300)',
    400: 'var(--neutral-400)',
    500: 'var(--neutral-500)',
    600: 'var(--neutral-600)',
    700: 'var(--neutral-700)',
    800: 'var(--neutral-800)',
    900: 'var(--neutral-900)',
    950: 'var(--neutral-950)',
  },
  primary: {
    DEFAULT: 'var(--primary)',
    foreground: 'var(--primary-foreground)',
    background: 'var(--primary-background)',
    50: 'var(--primary-50)',
    100: 'var(--primary-100)',
    200: 'var(--primary-200)',
    300: 'var(--primary-300)',
    400: 'var(--primary-400)',
    500: 'var(--primary-500)',
    600: 'var(--primary-600)',
    700: 'var(--primary-700)',
    800: 'var(--primary-800)',
    900: 'var(--primary-900)',
    950: 'var(--primary-950)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    foreground: 'var(--secondary-foreground)',
    background: 'var(--secondary-background)',
    50: 'var(--secondary-50)',
    100: 'var(--secondary-100)',
    200: 'var(--secondary-200)',
    300: 'var(--secondary-300)',
    400: 'var(--secondary-400)',
    500: 'var(--secondary-500)',
    600: 'var(--secondary-600)',
    700: 'var(--secondary-700)',
    800: 'var(--secondary-800)',
    900: 'var(--secondary-900)',
    950: 'var(--secondary-950)',
  },
  success: {
    DEFAULT: 'var(--success)',
    foreground: 'var(--success-foreground)',
    background: 'var(--success-background)',
    50: 'var(--success-50)',
    100: 'var(--success-100)',
    200: 'var(--success-200)',
    300: 'var(--success-300)',
    400: 'var(--success-400)',
    500: 'var(--success-500)',
    600: 'var(--success-600)',
    700: 'var(--success-700)',
    800: 'var(--success-800)',
    900: 'var(--success-900)',
    950: 'var(--success-950)',
  },
  warning: {
    DEFAULT: 'var(--warning)',
    foreground: 'var(--warning-foreground)',
    background: 'var(--warning-background)',
    50: 'var(--warning-50)',
    100: 'var(--warning-100)',
    200: 'var(--warning-200)',
    300: 'var(--warning-300)',
    400: 'var(--warning-400)',
    500: 'var(--warning-500)',
    600: 'var(--warning-600)',
    700: 'var(--warning-700)',
    800: 'var(--warning-800)',
    900: 'var(--warning-900)',
    950: 'var(--warning-950)',
  },
  danger: {
    DEFAULT: 'var(--danger)',
    foreground: 'var(--danger-foreground)',
    background: 'var(--danger-background)',
    50: 'var(--danger-50)',
    100: 'var(--danger-100)',
    200: 'var(--danger-200)',
    300: 'var(--danger-300)',
    400: 'var(--danger-400)',
    500: 'var(--danger-500)',
    600: 'var(--danger-600)',
    700: 'var(--danger-700)',
    800: 'var(--danger-800)',
    900: 'var(--danger-900)',
    950: 'var(--danger-950)',
  },
};
