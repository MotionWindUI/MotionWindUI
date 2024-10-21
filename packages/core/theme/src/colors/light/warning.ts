import { ShadeScale } from '../types';

/**
 * The warning color palette.
 *
 * For the most accessibility, use 700
 */
export const warning: ShadeScale = {
  '50': '#fefee8',
  '100': '#fefdc3',
  '200': '#fdf88b',
  '300': '#fcec4a',
  '400': '#f9db16',
  '500': '#e9c209',
  '600': '#c99805',
  '700': '#a06d08',
  '800': '#84550f',
  '900': '#704513',
  '950': '#422406',
};

export const WARNING_LIGHT_DEFAULT = warning[500];
