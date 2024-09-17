import { TailwindThemeFunction } from 'src/types';
import { themeColors } from './colors';
import { buttonCssVars, buttonTwUtilities } from './components/button';

export * from './colors';

export const generateCssVars = (theme: TailwindThemeFunction) => {
  return {
    ...themeColors(theme),
    ...buttonCssVars(true),
  };
};

export const getTwUtilities = () => {
  return {
    ...buttonTwUtilities(),
  };
};
