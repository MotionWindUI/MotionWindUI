import { TailwindThemeFunction } from 'src/types';
import { backgroundColors } from './background';
import { themeColors } from './colors';

export * from './background';
export * from './colors';

export const generateCssVars = (theme: TailwindThemeFunction) => {
  return {
    ...themeColors(theme),
  };
};
