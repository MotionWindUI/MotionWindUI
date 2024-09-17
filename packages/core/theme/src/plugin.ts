import plugin from 'tailwindcss/plugin';
import { baseColors } from './baseColors';
import { MotionWindUIPluginOptions, TailwindThemeFunction } from './types';
import { generateCssVars, getTwUtilities } from './cssVars/cssVars';
import { themeColorsThemeConfig } from './themeColors';

const genCssVars = (theme: TailwindThemeFunction) => {
  return {
    [':root']: {
      ...generateCssVars(theme),
    },
  };
};

const corePlugin = (config?: MotionWindUIPluginOptions) => {
  return plugin(
    ({ addBase, addUtilities, theme }) => {
      addBase({
        ...genCssVars(theme),
      });
      addUtilities({
        ...getTwUtilities(),
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
