import { ShadeScale } from '../types';

/**
 * Secondary color palette for light themes.
 *
 * The shade that was used as the main color (the color that the scale was generated from) is 500 or `#9760dc`.
 * It is called `Amethyst`.
 */
export const secondary: ShadeScale = {
  '50': '#f9f6fe',
  '100': '#f2ebfc',
  '200': '#e7dbf9',
  '300': '#d4bff3',
  '400': '#ba96ea',
  '500': '#9760dc',
  '600': '#894ecf',
  '700': '#743cb4',
  '800': '#623594',
  '900': '#512c77',
  '950': '#351556',
};

export const SECONDARY_LIGHT_DEFAULT = secondary[600];
