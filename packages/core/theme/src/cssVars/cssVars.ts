import { TailwindThemeFunction, ThemeOptions } from 'src/types';
import { themeColorNames, themeColors } from './colors/colors';
import {
  BaseColorMap,
  BaseColorShadeInfo,
  CSSColorProperty,
  GeneratedCssVars,
} from './types';
import {
  generateCssVarsFromMap,
  generateTwUtilitiesFromMap,
} from './utils/vars';
import { backgroundBaseShades } from './colors/background';
import { surfaceBaseShades } from './colors/surface';
import { cssVarConstants } from './constants';
import { textBaseShades } from './colors/text';
import { getColorScaleFromString } from './utils/colors';
import { deepmerge } from 'deepmerge-ts';
export * from './colors/colors';

/**
 * Generates the full set of CSS variables for the theme.
 */
export const generateCssVars = (
  theme: ThemeOptions,
  themeFunc: TailwindThemeFunction,
  darken: boolean = true,
  usePrefix: boolean = true,
  prefix: string = cssVarConstants.prefix
): GeneratedCssVars => {
  const mapList = [backgroundBaseShades, surfaceBaseShades];
  const {
    root: rootColors,
    light: lightColors,
    dark: darkColors,
  } = themeColors(themeFunc, theme.colors, theme.extendedColors);

  const root = {
    ...rootColors,
  };
  const lightVars: Record<string, string> = {
    ...lightColors,
  };
  const darkVars: Record<string, string> = {
    ...darkColors,
  };

  for (const map of mapList) {
    const { light, dark } = generateCssVarsFromMap(
      map,
      darken,
      usePrefix,
      prefix
    );
    Object.assign(lightVars, light);
    Object.assign(darkVars, dark);
  }

  let textBaseShadeMap: Record<string, BaseColorShadeInfo> = {};
  // Work out doing the text colors (WIP)
  for (const color in themeColorNames) {
    textBaseShadeMap = deepmerge(
      textBaseShadeMap,
      textBaseShades(
        themeColorNames[color],
        getColorScaleFromString(themeColorNames[color])
      )
    );
  }

  // Next up, generate text colors for the extended colors
  for (const color in theme.extendedColors) {
    // The color scale won't be used here, but it's required for the function
    textBaseShadeMap = deepmerge(
      textBaseShadeMap,
      textBaseShades(color, getColorScaleFromString(color))
    );
  }

  // Finally, generate the text colors for the theme
  const { light: textLight, dark: textDark } = generateCssVarsFromMap(
    textBaseShadeMap,
    darken,
    usePrefix,
    prefix
  );

  return {
    root: {
      ...root,
    },
    light: {
      ...lightVars,
      ...textLight,
    },
    dark: {
      ...darkVars,
      ...textDark,
    },
  };
};

/**
 * Get the Tailwind CSS utilities for the theme.
 */
export const getTwUtilities = (theme: ThemeOptions) => {
  const maps = [backgroundBaseShades, surfaceBaseShades];
  const utilities: Record<string, any> = {};

  for (const map of maps) {
    for (const key in map) {
      const { cssProperty } = map[key as keyof typeof map];
      Object.assign(utilities, generateTwUtilitiesFromMap(map, cssProperty));
    }
  }

  let textBaseShadeMap: Record<string, BaseColorShadeInfo> = {};
  // Work out doing the text colors (WIP)
  for (const color in themeColorNames) {
    textBaseShadeMap = deepmerge(
      textBaseShadeMap,
      textBaseShades(
        themeColorNames[color],
        getColorScaleFromString(themeColorNames[color])
      )
    );
  }

  // Next up, generate text colors for the extended colors
  for (const color in theme.extendedColors) {
    // The color scale won't be used here, but it's required for the function
    textBaseShadeMap = deepmerge(
      textBaseShadeMap,
      textBaseShades(color, getColorScaleFromString(color))
    );
  }

  // Finally, generate the Tailwind CSS utilities for the text colors
  for (const key in textBaseShadeMap) {
    const { cssProperty } =
      textBaseShadeMap[key as keyof typeof textBaseShadeMap];
    if (typeof cssProperty === 'string') {
      Object.assign(
        utilities,
        generateTwUtilitiesFromMap(
          textBaseShadeMap,
          cssProperty as CSSColorProperty
        )
      );
    }
  }

  console.log(utilities);

  return utilities;
};
