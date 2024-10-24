import plugin from 'tailwindcss/plugin';
import { deepmerge } from 'deepmerge-ts';
import { baseColors } from './baseColors';
import { MotionWindUIPluginOptions } from './types';
import { generateCssVars, getTwUtilities } from './cssVars/cssVars';
import { themeColorsThemeConfig } from './themeColors';
import { DEFAULT_THEME_NAME, defaultThemeOptions } from './constants';

const corePlugin = (config?: MotionWindUIPluginOptions) => {
  // First, get the options of the plugin by merging the default options with the provided options
  const options = deepmerge(defaultThemeOptions, config || {});

  // Then get the list of custom themes (if any)
  const _customThemes = options.customThemes || {};

  return plugin(
    ({ addBase, addUtilities, theme }) => {
      // Work on the default theme first
      const defaultTheme = options.theme || {};
      const { root, light, dark } = generateCssVars(
        defaultTheme,
        theme,
        defaultTheme.darken,
        defaultTheme.usePrefix,
        defaultTheme.prefix
      );

      addBase({
        [':root']: root,
        [`:root[data-theme="${DEFAULT_THEME_NAME}-light"]`]: light,
        [`:root[data-theme="${DEFAULT_THEME_NAME}-ldark"]`]: dark,
      });

      const twUtilities = getTwUtilities(defaultTheme);

      addUtilities(twUtilities, {
        respectPrefix: false,
      });
    },
    {
      theme: {
        extend: {
          colors: {
            ...baseColors,
            ...themeColorsThemeConfig,
          },
        },
      },
    }
  );
};

export const motionWindUIPlugin = (
  config?: MotionWindUIPluginOptions
): ReturnType<typeof plugin> => {
  return corePlugin(config);
};
