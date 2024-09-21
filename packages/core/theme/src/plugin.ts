import plugin from 'tailwindcss/plugin';
import { baseColors } from './baseColors';
import {
  MotionWindUIPluginOptions,
  TailwindThemeFunction,
  ThemeOptions,
} from './types';
import {
  generateCssVars,
  getTwUtilities,
  themeColors,
} from './cssVars/cssVars';
import { themeColorsThemeConfig } from './themeColors';
import { defaultThemeOptions } from './constants';
import { deepmerge } from 'deepmerge-ts';

const corePlugin = (config?: MotionWindUIPluginOptions) => {
  // First, get the options of the plugin by merging the default options with the provided options
  const options = deepmerge(defaultThemeOptions, config || {});

  // Then get the list of custom themes (if any)
  const customThemes = options.customThemes || {};

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
        [':root[data-theme="light"]']: light,
        [':root[data-theme="dark"]']: dark,
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
