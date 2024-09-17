import plugin from 'tailwindcss/plugin';
import { baseColors } from './base-colors';
import { TailwindThemeFunction } from './types';
import { generateCssVars } from './cssVars/cssVars';
import { themeColorsThemeConfig } from './themeColors';

const baseCssVars: any = {};

baseCssVars[':root'] = {
  '--test': '#000;',
};

const genCssVars = (theme: TailwindThemeFunction) => {
  return {
    [':root']: {
      ...generateCssVars(theme),
    },
  };
};

const corePlugin = () => {
  return plugin(
    ({ addBase, theme }) => {
      addBase({
        ...genCssVars(theme),
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

export const motionWindUIPlugin = (): ReturnType<typeof plugin> => {
  return corePlugin();
};
