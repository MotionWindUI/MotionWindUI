import { SemanticBaseColors, ThemeColor } from './types';
import { themeColors as colors } from './themeColors';
import { getReadableColor } from './utils';

/**
 * The base colors for the semantic theme.
 *
 * The term 'focus' is used to indicate the color of the focus state.
 * This is used mainly to outline a focused element or keyboard navigation.
 */
export const baseColors: SemanticBaseColors = {
  light: {
    background: colors.white,
    focus: colors.primary[500],
    overlay: colors.black,
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: colors.black,
    focus: colors.primary[500],
    overlay: colors.white,
    shadow: 'rgba(255, 255, 255, 0.1)',
  },
};

export const themeLightColors: ThemeColor = {
  ...baseColors.light,
  neutral: {
    ...colors.neutral,
    DEFAULT: colors.neutral[300],
    foreground: getReadableColor(colors.neutral[300], colors.neutral),
  },
  primary: {
    ...colors.primary,
    DEFAULT: colors.primary[500],
    foreground: getReadableColor(colors.primary[500], colors.primary),
  },
  secondary: {
    ...colors.secondary,
    DEFAULT: colors.secondary[500],
    foreground: getReadableColor(colors.secondary[500], colors.secondary),
  },
  success: {
    ...colors.success,
    DEFAULT: colors.success[500],
    foreground: getReadableColor(colors.success[500], colors.success),
  },
  warning: {
    ...colors.warning,
    DEFAULT: colors.warning[500],
    foreground: getReadableColor(colors.warning[500], colors.warning),
  },
  danger: {
    ...colors.danger,
    DEFAULT: colors.danger[500],
    foreground: getReadableColor(colors.danger[500], colors.danger),
  },
};

export const themeDarkColors: ThemeColor = {
  ...baseColors.dark,
  neutral: {
    ...colors.neutral,
    DEFAULT: colors.neutral[700],
    foreground: getReadableColor(colors.neutral[700], colors.neutral),
  },
  primary: {
    ...colors.primary,
    DEFAULT: colors.primary[500],
    foreground: getReadableColor(colors.primary[500], colors.primary),
  },
  secondary: {
    ...colors.secondary,
    DEFAULT: colors.secondary[500],
    foreground: getReadableColor(colors.secondary[500], colors.secondary),
  },
  success: {
    ...colors.success,
    DEFAULT: colors.success[500],
    foreground: getReadableColor(colors.success[500], colors.success),
  },
  warning: {
    ...colors.warning,
    DEFAULT: colors.warning[500],
    foreground: getReadableColor(colors.warning[500], colors.warning),
  },
  danger: {
    ...colors.danger,
    DEFAULT: colors.danger[500],
    foreground: getReadableColor(colors.danger[500], colors.danger),
  },
};

export const themeColors = {
  light: themeLightColors,
  dark: themeDarkColors,
};
