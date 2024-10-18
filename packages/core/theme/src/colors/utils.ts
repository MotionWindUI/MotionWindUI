/**
 * The colors/utils file contains utility functions for colors.
 *
 * This can range from checking for contrast to converting colors to different formats.
 *
 * It uses color2k for color operations.
 */

import { getContrast, readableColor } from 'color2k';

import { ColorAccessibility, ColorScale } from './types';

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
 * Given a foreground color, this function will return either 'black' or 'white' based on the contrast ratio.
 *
 * @param foreground The foreground color (in hex format)
 * @returns Either 'black' or 'white' based on the contrast ratio
 */
export const getValidContrastBW = (foreground: string) => {
  // Use color2k to get the readable color based on the foreground color
  return readableColor(foreground);
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
  console.warn(`Could not find a valid color for ${background}`);
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
