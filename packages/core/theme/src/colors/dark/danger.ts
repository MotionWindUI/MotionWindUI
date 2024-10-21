import { ShadeScale } from '../types';

/**
 * The danger color palette for dark mode.
 *
 * For the most accessibility, either use 600 or 700.
 */
export const danger: ShadeScale = {
  '50': '#fdf2f2',
  '100': '#fae5e5',
  '200': '#f5cccc',
  '300': '#efaaa9',
  '400': '#e67a7a',
  '500': '#de5654',
  '600': '#c03735',
  '700': '#aa2e2c',
  '800': '#892929',
  '900': '#732d2b',
  '950': '#3d100f',
};

export const DANGER_DARK_DEFAULT = danger[600];
