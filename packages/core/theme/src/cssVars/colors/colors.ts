import { deepmerge } from 'deepmerge-ts';
import {
  scienceBlue,
  fuchsiaBlue,
  aquaForest,
  coolGray,
  brandyPunch,
  cardinalRed,
} from 'src/baseColors';
import { ThemeColorConfig } from 'src/themeColors';
import {
  ColorScale,
  CustomThemeColorConfig,
  TailwindThemeFunction,
} from 'src/types';

/**
 * Merges the default theme colors with any overriden colors and custom colors.
 *
 * @param theme The TailwindCSS theme function.
 * @param overridenColors The colors to override the default theme colors.
 * @param customColors Any custom colors to add to the theme.
 * @returns The map of the theme color variables and their values.
 */
export const themeColorsMerge = (
  theme: TailwindThemeFunction,
  overridenColors?: Partial<ThemeColorConfig>,
  customColors?: CustomThemeColorConfig
): Record<string, Partial<ColorScale>> => {
  /**
   * The default set of theme colors.
   */
  const defaultThemeColors: ThemeColorConfig = {
    /* Neutrals + Shades */
    neutral: {
      '50': theme('colors.coolGray.50', coolGray[50]),
      '100': theme('colors.coolGray.100', coolGray[100]),
      '200': theme('colors.coolGray.200', coolGray[200]),
      '300': theme('colors.coolGray.300', coolGray[300]),
      '400': theme('colors.coolGray.400', coolGray[400]),
      '500': theme('colors.coolGray.500', coolGray[500]),
      '600': theme('colors.coolGray.600', coolGray[600]),
      '700': theme('colors.coolGray.700', coolGray[700]),
      '800': theme('colors.coolGray.800', coolGray[800]),
      '900': theme('colors.coolGray.900', coolGray[900]),
      '950': theme('colors.coolGray.950', coolGray[950]),
      DEFAULT: theme('colors.coolGray.500', coolGray[500]),
      foreground: {
        light: theme('colors.coolGray.50', coolGray[50]),
        dark: theme('colors.coolGray.700', coolGray[700]),
      },
      background: {
        light: theme('colors.coolGray.950', coolGray[950]),
        dark: theme('colors.coolGray.300', coolGray[300]),
      },
    },

    /* Primary + Shades */
    primary: {
      '50': theme('colors.scienceBlue.50', scienceBlue[50]),
      '100': theme('colors.scienceBlue.100', scienceBlue[100]),
      '200': theme('colors.scienceBlue.200', scienceBlue[200]),
      '300': theme('colors.scienceBlue.300', scienceBlue[300]),
      '400': theme('colors.scienceBlue.400', scienceBlue[400]),
      '500': theme('colors.scienceBlue.500', scienceBlue[500]),
      '600': theme('colors.scienceBlue.600', scienceBlue[600]),
      '700': theme('colors.scienceBlue.700', scienceBlue[700]),
      '800': theme('colors.scienceBlue.800', scienceBlue[800]),
      '900': theme('colors.scienceBlue.900', scienceBlue[900]),
      '950': theme('colors.scienceBlue.950', scienceBlue[950]),
      DEFAULT: theme('colors.scienceBlue.500', scienceBlue[500]),
      foreground: {
        light: theme('colors.scienceBlue.50', scienceBlue[50]),
        dark: theme('colors.scienceBlue.700', scienceBlue[700]),
      },
      background: {
        light: theme('colors.scienceBlue.950', scienceBlue[950]),
        dark: theme('colors.scienceBlue.300', scienceBlue[300]),
      },
    },

    /* Secondary + Shades */
    secondary: {
      '50': theme('colors.fuchsiaBlue.50', fuchsiaBlue[50]),
      '100': theme('colors.fuchsiaBlue.100', fuchsiaBlue[100]),
      '200': theme('colors.fuchsiaBlue.200', fuchsiaBlue[200]),
      '300': theme('colors.fuchsiaBlue.300', fuchsiaBlue[300]),
      '400': theme('colors.fuchsiaBlue.400', fuchsiaBlue[400]),
      '500': theme('colors.fuchsiaBlue.500', fuchsiaBlue[500]),
      '600': theme('colors.fuchsiaBlue.600', fuchsiaBlue[600]),
      '700': theme('colors.fuchsiaBlue.700', fuchsiaBlue[700]),
      '800': theme('colors.fuchsiaBlue.800', fuchsiaBlue[800]),
      '900': theme('colors.fuchsiaBlue.900', fuchsiaBlue[900]),
      '950': theme('colors.fuchsiaBlue.950', fuchsiaBlue[950]),
      DEFAULT: theme('colors.fuchsiaBlue.500', fuchsiaBlue[500]),
      foreground: {
        light: theme('colors.fuchsiaBlue.50', fuchsiaBlue[50]),
        dark: theme('colors.fuchsiaBlue.700', fuchsiaBlue[700]),
      },
      background: {
        light: theme('colors.fuchsiaBlue.950', fuchsiaBlue[950]),
        dark: theme('colors.fuchsiaBlue.300', fuchsiaBlue[300]),
      },
    },

    /* Success + Shades */
    success: {
      '50': theme('colors.aquaForest.50', aquaForest[50]),
      '100': theme('colors.aquaForest.100', aquaForest[100]),
      '200': theme('colors.aquaForest.200', aquaForest[200]),
      '300': theme('colors.aquaForest.300', aquaForest[300]),
      '400': theme('colors.aquaForest.400', aquaForest[400]),
      '500': theme('colors.aquaForest.500', aquaForest[500]),
      '600': theme('colors.aquaForest.600', aquaForest[600]),
      '700': theme('colors.aquaForest.700', aquaForest[700]),
      '800': theme('colors.aquaForest.800', aquaForest[800]),
      '900': theme('colors.aquaForest.900', aquaForest[900]),
      '950': theme('colors.aquaForest.950', aquaForest[950]),
      DEFAULT: theme('colors.aquaForest.500', aquaForest[500]),
      foreground: {
        light: theme('colors.aquaForest.50', aquaForest[50]),
        dark: theme('colors.aquaForest.700', aquaForest[700]),
      },
      background: {
        light: theme('colors.aquaForest.950', aquaForest[950]),
        dark: theme('colors.aquaForest.300', aquaForest[300]),
      },
    },

    /* Warning + Shades */
    warning: {
      '50': theme('colors.brandyPunch.50', brandyPunch[50]),
      '100': theme('colors.brandyPunch.100', brandyPunch[100]),
      '200': theme('colors.brandyPunch.200', brandyPunch[200]),
      '300': theme('colors.brandyPunch.300', brandyPunch[300]),
      '400': theme('colors.brandyPunch.400', brandyPunch[400]),
      '500': theme('colors.brandyPunch.500', brandyPunch[500]),
      '600': theme('colors.brandyPunch.600', brandyPunch[600]),
      '700': theme('colors.brandyPunch.700', brandyPunch[700]),
      '800': theme('colors.brandyPunch.800', brandyPunch[800]),
      '900': theme('colors.brandyPunch.900', brandyPunch[900]),
      '950': theme('colors.brandyPunch.950', brandyPunch[950]),
      DEFAULT: theme('colors.brandyPunch.500', brandyPunch[500]),
      foreground: {
        light: theme('colors.brandyPunch.50', brandyPunch[50]),
        dark: theme('colors.brandyPunch.700', brandyPunch[700]),
      },
      background: {
        light: theme('colors.brandyPunch.950', brandyPunch[950]),
        dark: theme('colors.brandyPunch.300', brandyPunch[300]),
      },
    },

    /* Danger + Shades */
    danger: {
      '50': theme('colors.cardinalRed.50', cardinalRed[50]),
      '100': theme('colors.cardinalRed.100', cardinalRed[100]),
      '200': theme('colors.cardinalRed.200', cardinalRed[200]),
      '300': theme('colors.cardinalRed.300', cardinalRed[300]),
      '400': theme('colors.cardinalRed.400', cardinalRed[400]),
      '500': theme('colors.cardinalRed.500', cardinalRed[500]),
      '600': theme('colors.cardinalRed.600', cardinalRed[600]),
      '700': theme('colors.cardinalRed.700', cardinalRed[700]),
      '800': theme('colors.cardinalRed.800', cardinalRed[800]),
      '900': theme('colors.cardinalRed.900', cardinalRed[900]),
      '950': theme('colors.cardinalRed.950', cardinalRed[950]),
      DEFAULT: theme('colors.cardinalRed.500', cardinalRed[500]),
      foreground: {
        light: theme('colors.cardinalRed.50', cardinalRed[50]),
        dark: theme('colors.cardinalRed.700', cardinalRed[700]),
      },
      background: {
        light: theme('colors.cardinalRed.950', cardinalRed[950]),
        dark: theme('colors.cardinalRed.300', cardinalRed[300]),
      },
    },
  };

  const colors = deepmerge(defaultThemeColors, overridenColors || {});
  const customThemeColors = customColors || {};

  // If there are custom colors, go through each category and check each shade.
  // If the value of the shade is in the form of theme('colors.category.shade', defaultValue),
  // we can extract the values from the theme function (since it is a string that needs to use the theme function).
  for (const category of Object.keys(customThemeColors)) {
    const colorScale = customThemeColors[category];
    for (const shade in colorScale) {
      // Check if the string matches the theme function pattern.
      // theme('colors.category.shade', defaultValue)
      const regex = /theme\(["'](colors\.[\w.-]+)["'],\s*["'](.+?)["']\)/;

      // Get the value of the shade
      let shadeValue = colorScale[shade as keyof ColorScale];

      // Fix this section up to handle the new structure
      if (typeof shadeValue === 'string' && regex.test(shadeValue)) {
        const matches = regex.exec(shadeValue);
        if (matches) {
          const [_, path, defaultValue] = matches;
          shadeValue = theme(path, defaultValue) as string;
        }
      } else if (typeof shadeValue === 'object' && shadeValue !== null) {
        // Handle foreground and background colors
        if (shadeValue.light && regex.test(shadeValue.light)) {
          const matches = regex.exec(shadeValue.light);
          if (matches) {
            const [_, path, defaultValue] = matches;
            shadeValue.light = theme(path, defaultValue) as string;
          }
        }
        if (shadeValue.dark && regex.test(shadeValue.dark)) {
          const matches = regex.exec(shadeValue.dark);
          if (matches) {
            const [_, path, defaultValue] = matches;
            shadeValue.dark = theme(path, defaultValue) as string;
          }
        }
      }
    }
  }

  return {
    ...colors,
    ...customThemeColors,
  };
};

/**
 * Given a map of color to color scales, flatten the map to a map of CSS variables to their values.
 *
 * @param nestedColors The list of colors to flatten.
 * @returns The map of the CSS variable and their variable value.
 */
const flattenThemeColors = (
  nestedColors: Record<string, Partial<ColorScale>>
): Record<'root' | 'light' | 'dark', Record<string, string>> => {
  const rootColors: Record<string, string> = {};
  const lightColors: Record<string, string> = {};
  const darkColors: Record<string, string> = {};

  for (const category in nestedColors) {
    const colorScale = nestedColors[category];
    for (const shade in colorScale) {
      // For default, drop the DEFAULT key and use the category name.
      if (shade === 'DEFAULT') {
        rootColors[`--${category}`] = colorScale[
          shade as keyof ColorScale
        ] as string;
        continue;
      }
      // For foreground and background, put the light and dark shades in their respective maps.
      else if (shade === 'foreground' && colorScale.foreground) {
        lightColors[`--${category}-${shade}`] = colorScale.foreground.light;
        darkColors[`--${category}-${shade}`] = colorScale.foreground.dark;
      } else if (shade === 'background' && colorScale.background) {
        lightColors[`--${category}-${shade}`] = colorScale.background.light;
        darkColors[`--${category}-${shade}`] = colorScale.background.dark;
      } else {
        // Otherwise just use the category and shade name.
        rootColors[`--${category}-${shade}`] = colorScale[
          shade as keyof ColorScale
        ] as string;
      }
    }
  }

  console.log(rootColors);
  console.log(lightColors);
  console.log(darkColors);

  return {
    root: rootColors,
    light: lightColors,
    dark: darkColors,
  };
};

/**
 * Generates CSS variables for the theme colors. Supports overriding the default theme colors and adding custom colors.
 *
 * @param theme The TailwindCSS theme function.
 * @param overridenColors The colors to override the default theme colors.
 * @param customColors Any custom colors to add to the theme.
 * @returns The generated theme colors as CSS variables.
 */
export const themeColors = (
  theme: TailwindThemeFunction,
  overridenColors?: Partial<ThemeColorConfig>,
  customColors?: CustomThemeColorConfig
): Record<'root' | 'light' | 'dark', Record<string, string>> => {
  const colors = themeColorsMerge(theme, overridenColors, customColors);
  console.log(colors);
  return flattenThemeColors(colors);
};

/**
 * The list of theme color names.
 */
export const themeColorNames = [
  'neutral',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
] as const;
