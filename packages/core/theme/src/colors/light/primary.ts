import { ShadeScale } from '../types';

/**
 * Primary color scale for light theme.
 *
 * The main color that is used to generate the shades is 700 or `#0b54de`.
 * It is also named `Cerulean Blue`.
 */
export const primary: ShadeScale = {
  '50': '#eef7ff',
  '100': '#d8edff',
  '200': '#b9e0ff',
  '300': '#89ceff',
  '400': '#52b3ff',
  '500': '#2a90ff',
  '600': '#1370fd',
  '700': '#0b54de',
  '800': '#1048bd',
  '900': '#144094',
  '950': '#11285a',
};

export const PRIMARY_LIGHT_DEFAULT = primary[700];
