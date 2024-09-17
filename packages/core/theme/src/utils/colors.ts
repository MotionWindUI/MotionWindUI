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
  darken: boolean = true
) => {
  // Convert the shades to an array
  const shades = Object.keys(colorScale).map(Number);
  const currentIndex = shades.indexOf(Number(shade));

  // If the shade is not found, return the default shade
  if (currentIndex === -1) return shade;

  // Get the amount to adjust the shade by
  const step = darken ? shadeOption : -shadeOption;

  // Ensure the shade is within the bounds of the color scale
  if (currentIndex + step < 0) return shade;
  if (currentIndex + step >= shades.length) return shade;

  // Return the adjusted shade
  return convertIndexToShade(currentIndex + step);
};
