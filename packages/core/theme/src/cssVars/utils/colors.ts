import {
  danger,
  neutral,
  primary,
  secondary,
  success,
  warning,
} from 'src/themeColors';
import { ColorScale, ColorShadeNumberScale } from 'src/types';

/**
 * The list of options to get the shade of. It is used to determine which shade to get.
 */
export enum ColorShadeOptions {
  HOVER = 1,
  PRESSED = 2,
}

/**
 * Converts the index of the shade to the key of the shade in the color scale.
 *
 * @param index The index of the shade to convert
 * @returns The key of the shade in the color scale
 */
const convertIndexToShade = (
  index: number
): Partial<keyof ColorShadeNumberScale> => {
  let shade: Partial<keyof ColorShadeNumberScale> = 500;

  switch (index) {
    case 0:
      shade = 50;
      break;
    case 1:
      shade = 100;
      break;
    case 2:
      shade = 200;
      break;
    case 3:
      shade = 300;
      break;
    case 4:
      shade = 400;
      break;
    case 5:
      shade = 500;
      break;
    case 6:
      shade = 600;
      break;
    case 7:
      shade = 700;
      break;
    case 8:
      shade = 800;
      break;
    case 9:
      shade = 900;
      break;
    case 10:
      shade = 950;
      break;
  }

  return shade;
};

/**
 * Adjusts the shade of a color based on the color scale.
 *
 * @param shade The shade to adjust
 * @param colorScale The color scale to adjust the shade from
 * @param shadeOption Which state to adjust the shade for. Defaults to ColorShadeOptions.HOVER.
 * @param darken Whether to darken or lighten the shade. Defaults to true.
 * @returns The adjusted shade
 */
export const adjustShade = (
  shade: Partial<keyof ColorShadeNumberScale>,
  colorScale: ColorScale,
  shadeOption: ColorShadeOptions = ColorShadeOptions.HOVER,
  darken: boolean = true,
  isDarkMode: boolean = false
) => {
  // Convert the shades to an array
  const shades = Object.keys(colorScale).map(Number);
  const currentIndex = shades.indexOf(Number(shade));

  // If the shade is not found, return the default shade
  if (currentIndex === -1) return shade;

  // Get the amount to adjust the shade by
  const step = darken ? shadeOption : -shadeOption;
  const adjustedStep = isDarkMode ? -step : step;

  // Ensure the shade is within the bounds of the color scale
  if (currentIndex + adjustedStep < 0) return 50;
  if (currentIndex + adjustedStep >= shades.length) return 950;

  // Return the adjusted shade
  return convertIndexToShade(currentIndex + adjustedStep);
};

export const getColorScaleFromString = (colorScale: string): ColorScale => {
  switch (colorScale) {
    case 'neutral':
      return neutral;
    case 'primary':
      return primary;
    case 'secondary':
      return secondary;
    case 'success':
      return success;
    case 'warning':
      return warning;
    case 'danger':
      return danger;
    default:
      return neutral;
  }
};
