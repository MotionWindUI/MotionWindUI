import { ShadeScale } from '../types';

/**
 * Primary color scale for dark theme.
 *
 * The main color that is used to generate the shades is 700 or `#2b5fbf`.
 * It is also named `Cerulean Blue`.
 */
export const primary: ShadeScale = {
  50: '#f2f8fd',
  100: '#dcecf9',
  200: '#c2def5',
  300: '#9acbef',
  400: '#6ab1e7',
  500: '#4791e1',
  600: '#3376db',
  700: '#2b5fbf',
  800: '#2d519f',
  900: '#2c487d',
  950: '#202e4b',
};

export const PRIMARY_DARK_DEFAULT = primary[700];
