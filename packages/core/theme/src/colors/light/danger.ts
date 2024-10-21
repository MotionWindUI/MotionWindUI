import { ShadeScale } from '../types';

/**
 * The danger color palette for light mode.
 *
 * For the most accessibility, either use 600 or 700.
 */
export const danger: ShadeScale = {
  '50': '#fff1f1',
  '100': '#ffdfdf',
  '200': '#ffc5c4',
  '300': '#ff9c9b',
  '400': '#ff6362',
  '500': '#ff3331',
  '600': '#e6100e',
  '700': '#cb0c0a',
  '800': '#a70e0d',
  '900': '#8a1312',
  '950': '#4c0403',
};

export const DANGER_LIGHT_DEFAULT = danger[700];
