import { darkColors } from './dark';
import { lightColors } from './light';
import { neutral } from './neutral';

export const themeColors = {
  white: '#f0f0f0',
  black: '#222222',
  neutral: neutral,
  light: {
    primary: lightColors.primary,
    secondary: lightColors.secondary,
    success: lightColors.success,
    warning: lightColors.warning,
    danger: lightColors.danger,
  },
  dark: {
    primary: darkColors.primary,
    secondary: darkColors.secondary,
    success: darkColors.success,
    warning: darkColors.warning,
    danger: darkColors.danger,
  },
};
