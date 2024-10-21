import { ShadeScale } from '../types';

/**
 * The warning color palette for dark mode.
 *
 * For the most accessibility, use 700.
 */
export const warning: ShadeScale = {
  '50': '#fcfce9',
  '100': '#f9f8c8',
  '200': '#f3ef95',
  '300': '#ede05a',
  '400': '#e5cc2a',
  '500': '#d3b51d',
  '600': '#b68e16',
  '700': '#926917',
  '800': '#79531b',
  '900': '#66451e',
  '950': '#3b240c',
};

export const WARNING_DARK_DEFAULT = warning[600];
