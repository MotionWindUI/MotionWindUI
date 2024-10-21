import { deepmerge } from 'deepmerge-ts';
import {
  ExtendedColorScaleWithoutString,
  SemanticBaseColors,
  ShadeScale,
  ThemeColor,
  ColorVariants,
} from './types';
import { themeColors as colors } from './themeColors';
import { getReadableColorBW, getShadeFromColor } from './utils';
import {
  DANGER_LIGHT_DEFAULT,
  PRIMARY_LIGHT_DEFAULT,
  SECONDARY_LIGHT_DEFAULT,
  SUCCESS_LIGHT_DEFAULT,
  WARNING_LIGHT_DEFAULT,
} from './light';
import {
  DANGER_DARK_DEFAULT,
  PRIMARY_DARK_DEFAULT,
  SECONDARY_DARK_DEFAULT,
  SUCCESS_DARK_DEFAULT,
  WARNING_DARK_DEFAULT,
} from './dark';

export const getThemeColors = (
  themeColors: ThemeColor,
  darkenOnHover: boolean = true,
  defaults: {
    [key in ColorVariants]: string;
  },
  scales: {
    [key in ColorVariants]: ShadeScale;
  },
  white: string,
  dark: string
): ThemeColor => {
  // Get an object of the calculated state shades for each color
  const getShade = (
    color: string,
    colorScale: ShadeScale
  ): ExtendedColorScaleWithoutString => {
    const hover = getShadeFromColor(color, colorScale, 'hover', darkenOnHover);
    const active = getShadeFromColor(
      color,
      colorScale,
      'active',
      darkenOnHover
    );

    return {
      hover,
      active,
      'foreground-hover': getReadableColorBW(hover || color, white, dark),
      'foreground-active': getReadableColorBW(active || color, white, dark),
    };
  };

  return {
    ...themeColors,
    neutral: {
      ...deepmerge(
        themeColors.neutral,
        getShade(defaults.neutral, scales.neutral)
      ),
    },
    primary: {
      ...deepmerge(
        themeColors.primary,
        getShade(themeColors.primary.DEFAULT!, scales.primary)
      ),
    },
    secondary: {
      ...deepmerge(
        themeColors.secondary,
        getShade(themeColors.secondary.DEFAULT!, scales.secondary)
      ),
    },
    success: {
      ...deepmerge(
        themeColors.success,
        getShade(themeColors.success.DEFAULT!, scales.success)
      ),
    },
    warning: {
      ...deepmerge(
        themeColors.warning,
        getShade(themeColors.warning.DEFAULT!, scales.warning)
      ),
    },
    danger: {
      ...deepmerge(
        themeColors.danger,
        getShade(themeColors.danger.DEFAULT!, scales.danger)
      ),
    },
  };
};

/**
 * The base colors for the semantic theme.
 *
 * The term 'focus' is used to indicate the color of the focus state.
 * This is used mainly to outline a focused element or keyboard navigation.
 */
export const baseColors: SemanticBaseColors = {
  light: {
    background: colors.white,
    focus: colors.light.primary[500],
    overlay: colors.black,
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: colors.black,
    focus: colors.light.primary[500],
    overlay: colors.white,
    shadow: 'rgba(255, 255, 255, 0.1)',
  },
};

export const themeLightColors: ThemeColor = {
  ...baseColors.light,
  neutral: {
    ...colors.neutral,
    DEFAULT: colors.neutral[300],
    foreground: getReadableColorBW(
      colors.neutral[300],
      colors.white,
      colors.black
    ),
  },
  primary: {
    ...colors.light.primary,
    DEFAULT: PRIMARY_LIGHT_DEFAULT,
    foreground: getReadableColorBW(
      PRIMARY_LIGHT_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
  secondary: {
    ...colors.light.secondary,
    DEFAULT: SECONDARY_LIGHT_DEFAULT,
    foreground: getReadableColorBW(
      SECONDARY_LIGHT_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
  success: {
    ...colors.light.success,
    DEFAULT: SUCCESS_LIGHT_DEFAULT,
    foreground: getReadableColorBW(
      SUCCESS_LIGHT_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
  warning: {
    ...colors.light.warning,
    DEFAULT: WARNING_LIGHT_DEFAULT,
    foreground: getReadableColorBW(
      WARNING_LIGHT_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
  danger: {
    ...colors.light.danger,
    DEFAULT: DANGER_LIGHT_DEFAULT,
    foreground: getReadableColorBW(
      DANGER_LIGHT_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
};

export const themeDarkColors: ThemeColor = {
  ...baseColors.dark,
  neutral: {
    ...colors.neutral,
    DEFAULT: colors.neutral[700],
    foreground: getReadableColorBW(
      colors.neutral[700],
      colors.white,
      colors.black
    ),
  },
  primary: {
    ...colors.dark.primary,
    DEFAULT: PRIMARY_DARK_DEFAULT,
    foreground: getReadableColorBW(
      PRIMARY_DARK_DEFAULT,
      colors.white,
      colors.black
    ),
  },
  secondary: {
    ...colors.dark.secondary,
    DEFAULT: SECONDARY_DARK_DEFAULT,
    foreground: getReadableColorBW(
      SECONDARY_DARK_DEFAULT!,
      colors.white,
      colors.black
    ),
  },
  success: {
    ...colors.dark.success,
    DEFAULT: SUCCESS_DARK_DEFAULT,
    foreground: getReadableColorBW(
      SUCCESS_DARK_DEFAULT,
      colors.white,
      colors.black
    ),
  },
  warning: {
    ...colors.dark.warning,
    DEFAULT: WARNING_DARK_DEFAULT,
    foreground: getReadableColorBW(
      WARNING_DARK_DEFAULT,
      colors.white,
      colors.black
    ),
  },
  danger: {
    ...colors.dark.danger,
    DEFAULT: DANGER_DARK_DEFAULT,
    foreground: getReadableColorBW(
      DANGER_DARK_DEFAULT,
      colors.white,
      colors.black
    ),
  },
};

export const themeColors = (darkenOnHover: boolean = true) => ({
  light: getThemeColors(
    themeLightColors,
    darkenOnHover,
    {
      neutral: colors.neutral[300],
      primary: PRIMARY_LIGHT_DEFAULT,
      secondary: SECONDARY_LIGHT_DEFAULT,
      success: SUCCESS_LIGHT_DEFAULT,
      warning: WARNING_LIGHT_DEFAULT,
      danger: DANGER_LIGHT_DEFAULT,
    },
    {
      neutral: colors.neutral,
      primary: colors.light.primary,
      secondary: colors.light.secondary,
      success: colors.light.success,
      warning: colors.light.warning,
      danger: colors.light.danger,
    },
    colors.white,
    colors.black
  ),
  dark: getThemeColors(
    themeDarkColors,
    darkenOnHover,
    {
      neutral: colors.neutral[700],
      primary: PRIMARY_DARK_DEFAULT,
      secondary: SECONDARY_DARK_DEFAULT,
      success: SUCCESS_DARK_DEFAULT,
      warning: WARNING_DARK_DEFAULT,
      danger: DANGER_DARK_DEFAULT,
    },
    {
      neutral: colors.neutral,
      primary: colors.dark.primary,
      secondary: colors.dark.secondary,
      success: colors.dark.success,
      warning: colors.dark.warning,
      danger: colors.dark.danger,
    },
    colors.white,
    colors.black
  ),
});
