/**
 * The colors/utils file contains utility functions for colors.
 *
 * This can range from checking for contrast to converting colors to different formats.
 *
 * It uses color2k for color operations.
 */
import { flatten } from 'flat';
import { getContrast } from 'color2k';
import { getKeyByValue } from '@motionwindui/utils';

import {
  ColorAccessibility,
  ColorScale,
  Shades,
  ShadeScale,
  ThemeColor,
} from './types';

/**
 * Given a foreground color, background color, and the list of valid colors to choose from, this function will return the color that has the highest contrast ratio.
 * @param foreground The foreground color (in hex format)
 * @param background The background color (in hex format) (default is #fff)
 * @param colorScale The list of valid colors to choose from
 * @param standard The accessibility standard to use (default is 'AA')
 */
export const getValidContrastColorScale = (
  foreground: string,
  background: string = '#fff',
  colorScale: ColorScale,
  standard: 'AA' | 'AAA' = 'AA'
) => {
  // First get the constrast between the foreground and background
  const contrast = getContrast(foreground, background);

  // Check if the contrast is valid based on the standard
  if (isValidByStandard(contrast, standard)) {
    return foreground;
  }

  // If the contrast is not valid, then try to find a valid color from the color scale
  // We should use the extremes of the color scale to find the best contrast (50 and 950)
  const color50 = colorScale[50];

  // Get the contrast between the foreground and the 50 color
  const contrast50 = getContrast(foreground, color50 as string);

  // Check if the contrast is valid based on the standard
  if (isValidByStandard(contrast50, standard)) {
    return color50;
  }

  // If the contrast is not valid, then try the 950 color
  const color950 = colorScale[950];

  // Get the contrast between the foreground and the 950 color
  const contrast950 = getContrast(foreground, color950 as string);

  // Check if the contrast is valid based on the standard
  if (isValidByStandard(contrast950, standard)) {
    return color950;
  }

  // If we can't find a valid color, then return the foreground color
  return foreground;
};

/**
 * Given a foreground color, this function will return either the theme's black or white color based on the contrast ratio.
 *
 * @param foreground The foreground color (in hex format)
 * @param white The white color of the theme
 * @param dark The dark color of the theme
 * @param standard The accessibility standard to use (default is 'AA')
 * @returns Either the theme's black or white color based on the contrast ratio
 */
export const getReadableColorBW = (
  foreground: string,
  white: string,
  dark: string,
  standard: 'AA' | 'AAA' = 'AA'
) => {
  // First get the contrast of the foreground color with the white color
  const contrastWhite = getContrast(foreground, white);

  // Check if the contrast is valid
  if (isValidByStandard(contrastWhite, standard)) {
    return white;
  }

  // If the contrast is not valid, check the contrast of the foreground with the black color
  const contrastBlack = getContrast(foreground, dark);

  // Check if the contrast is valid
  if (isValidByStandard(contrastBlack, standard)) {
    return dark;
  }

  // If neither are valid, place a warning and return whichever color is higher
  console.warn(
    `Could not find a valid color for ${foreground}: Contrast with white is ${contrastWhite}, contrast with black is ${contrastBlack}`
  );
  return contrastWhite > contrastBlack ? white : dark;
};

/**
 * Given a background color, get a color from the color scale that has the highest contrast ratio.
 * @param background The background color in hex format
 * @param colorScale The color scale to choose from
 * @param standard The accessibility standard to use (default is 'AA')
 */
export const getReadableColor = (
  background: string,
  colorScale: ColorScale,
  standard: 'AA' | 'AAA' = 'AA'
) => {
  // First, go through the color scale and find the color with the highest contrast ratio
  let highestContrastColor = '';
  let highestContrast = 0;
  for (const color of Object.values(colorScale)) {
    const contrast = getContrast(color as string, background);
    if (contrast > highestContrast) {
      highestContrast = contrast;
      highestContrastColor = color as string;
    }
  }

  // Check if the contrast is valid based on the standard
  if (isValidByStandard(highestContrast, standard)) {
    return highestContrastColor;
  }

  // If we can't find a valid color, then return the foreground color
  console.warn(
    `Could not find a valid color for ${background}: Highest contrast is ${highestContrast}`
  );
  return highestContrastColor;
};

/**
 * Given a contrast ratio and an accessibility standard, this function will return true if the contrast is valid based on the standard, false otherwise.
 *
 * @param contrast The contrast ratio
 * @param standard The accessibility standard to check against
 * @returns True if the contrast is valid based on the standard, false otherwise
 */
const isValidByStandard = (
  contrast: number,
  standard: ColorAccessibility
): boolean => {
  switch (standard) {
    case 'AA': {
      return contrast >= 4.5;
    }
    case 'AAA': {
      return contrast >= 7;
    }
    case 'AAALarge': {
      return contrast >= 3;
    }
    case 'AAALargeText': {
      return contrast >= 4.5;
    }
    case 'Contrast': {
      return contrast >= 1;
    }
    default: {
      return false;
    }
  }
};

/**
 * Swap the keys and values of a color scale. E.g. 50 becomes 950, 100 becomes 900, etc.
 * @param colorScale The color scale to swap
 * @returns The new color scale with the keys and values swapped
 */
export const swapColorScale = (
  colorScale: Partial<ShadeScale>
): Partial<ShadeScale> => {
  const newColorScale: ColorScale = {};

  /**
   * Go through the color scale and swap the key and value.
   * Do this by subtracting the key from 1000 to get the new key.
   * Then convert the new number to be a value in the Shades enum.
   */
  for (const [key, value] of Object.entries(colorScale)) {
    const newShadeValue = 1000 - Number.parseInt(key);
    newColorScale[newShadeValue as Shades] = value;
  }

  return newColorScale;
};

/**
 * Given a color, this function will return the shade of the color.
 * @param color The color to get the shade from
 * @param colorScale The color scale to get the shade from
 * @param state The pseudo state of the color, e.g. 'hover', 'active' (default is 'hover')
 * @param darkenOnHover Whether the color should darken on a state change (default is true)
 * @param checkAccessibility Whether to check the accessibility of the color (default is false)
 * @param standard The accessibility standard to use (default is 'AA')
 * @returns The shade of the color based on the state. If the color is not valid, then return undefined.
 */
export const getShadeFromColor = (
  color: string,
  colorScale: ShadeScale,
  state: 'hover' | 'active' = 'hover',
  darkenOnHover: boolean = true,
  checkAccessibility: boolean = false,
  standard: ColorAccessibility = 'AA'
) => {
  // First get the key of the color from the color scale
  const key = getKeyByValue(colorScale, color);

  // If the key is not found, then return undefined
  if (!key) {
    console.warn(`Could not find the key for color: ${color}`);
    return;
  }

  // We got the key from the color scale, now we need to get the index of the key from Object.keys
  const colorScaleLength = Object.keys(colorScale).length;
  const index = Object.keys(colorScale).indexOf(key.toString());

  // If the index is not found, then return undefined
  if (index === -1) {
    console.warn(`Could not find the index for key: ${key}`);
    return;
  }

  // Finally get the new index based on the state
  // Hover state will increase/decrease the index by 1
  // Active state will increase/decrease the index by 2
  // darkenOnHover will change the direction of the index
  // darkenOnHover * state will give the shade
  // If the shade is out of bounds, return the shade at the edge it went out of bounds
  let newIndex = index;

  if (state === 'hover') {
    newIndex += darkenOnHover ? 1 : -1;
  } else if (state === 'active') {
    newIndex += darkenOnHover ? 2 : -2;
  }

  // Check if the new index is out of bounds
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= colorScaleLength) {
    newIndex = colorScaleLength - 1;
  }

  // Get the new color based on the new index
  const newColor = Object.values(colorScale)[newIndex];

  // Check if we should check the accessibility of the color
  if (
    checkAccessibility && // Check if the new color is accessible based on the standard
    !isValidByStandard(getContrast(newColor, color), standard)
  ) {
    return;
  }

  return newColor;
};

/**
 * Removes the -DEFAULT suffix from the keys of an object. Used for the theme colors.
 *
 * @param object The set of keys (string) and values (any) to remove the '-DEFAULT' suffix from
 * @returns The new object with the '-DEFAULT' suffix removed from the keys
 */
export const removeDefaultSuffix = (object: Record<string, any>) => {
  // Construct a new object to avoid mutating the original object
  const newObject = { ...object };

  // Go through the object and remove the '-DEFAULT' suffix from the key
  for (const key in newObject) {
    if (key.endsWith('-DEFAULT')) {
      const newKey = key.replace('-DEFAULT', '');
      newObject[newKey] = newObject[key];
      delete newObject[key];
    }
  }

  // Return the new object
  return newObject;
};

/**
 * Takes the theme colors object and flattens it into a single Record<string, any> object.
 * It will take a nested object from ExtendedColorScale and flatten it into a single object.
 * E.g. { primary: { DEFAULT: '#000000', hover: '#111111' }
 * will become { 'primary': '#000000', 'primary-hover': '#111111' }
 *
 * @param themeColors The theme colors to flatten
 * @returns The theme colors flattened
 */
export const flattenThemeColors = (
  themeColors: ThemeColor
): Record<string, any> => {
  const flattenedThemeColors = flatten(themeColors, {
    delimiter: '-',
    safe: true,
  });

  return removeDefaultSuffix(
    flattenedThemeColors as Record<string, any>
  ) as Record<string, string>;
};
