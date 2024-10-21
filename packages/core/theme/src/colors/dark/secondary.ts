import { ShadeScale } from '../types';

/**
 * The secondary color scale for dark theme.
 *
 * The main color that is used to generate the shades is 700 or `#75519e`.
 * It is also named `Amethyst`.
 */
export const secondary: ShadeScale = {
  '50': '#f9f7fd',
  '100': '#f1ebf9',
  '200': '#e8e0f5',
  '300': '#d5c6ec',
  '400': '#bba0de',
  '500': '#9a72cb',
  '600': '#8a63bb',
  '700': '#75519e',
  '800': '#624780',
  '900': '#523b68',
  '950': '#361f4d',
};

export const SECONDARY_DARK_DEFAULT = secondary[700];
