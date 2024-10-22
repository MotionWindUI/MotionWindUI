import { ShadeScale } from '../types';

/**
 * The success color palette for dark mode.
 *
 * For the most accessibility, either use 600 or 700.
 */
export const success: ShadeScale = {
  '50': '#f4fbf6',
  '100': '#e5f6eb',
  '200': '#c8ead4',
  '300': '#a0d9b6',
  '400': '#6cbc8b',
  '500': '#489d69',
  '600': '#358253',
  '700': '#2d6743',
  '800': '#2a5139',
  '900': '#244230',
  '950': '#0d2618',
};

export const SUCCESS_DARK_DEFAULT = success[700];
