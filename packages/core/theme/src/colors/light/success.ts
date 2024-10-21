import { ShadeScale } from '../types';

/**
 * Success color palette for light themes.
 *
 * Use 700 as the main
 */
export const success: ShadeScale = {
  '50': '#f1fcf4',
  '100': '#dff9e8',
  '200': '#c0f2d2',
  '300': '#92e7b2',
  '400': '#56d285',
  '500': '#30b764',
  '600': '#22974f',
  '700': '#1e7740',
  '800': '#1d5e37',
  '900': '#194e2f',
  '950': '#082b18',
};

export const SUCCESS_LIGHT_DEFAULT = success[800];
