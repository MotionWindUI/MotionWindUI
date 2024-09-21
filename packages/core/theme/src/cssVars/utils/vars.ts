/**
 * This file contains utility functions for working with CSS variables.
 */

import { ColorScale, ColorShadeNumberScale } from 'src/types';
import { adjustShade, ColorShadeOptions } from '../utils/colors';
import {
  BaseColorMap,
  BaseColorMapGenReturn,
  CSSColorProperty,
  CSSProperty,
} from '../types';
import { cssVarConstants } from '../constants';

/**
 * Generates CSS variables for a given button shade.
 *
 * @param key - The key for the CSS variable.
 * @param shade - The shade of the color.
 * @param cssVar - The base CSS variable name.
 * @param colorScale - The color scale to use.
 * @param darken - Whether to darken the shade for hover and pressed states.
 * @param isDarkMode - Whether the color is for dark mode.
 * @param usePrefix - Whether to use the CSS variable prefix.
 * @param prefix - The CSS variable prefix to use.
 * @returns An object containing the CSS variables for the button.
 */
export const generateCssStateVars = (
  key: string,
  shade: Partial<keyof ColorShadeNumberScale>,
  cssVar: string,
  colorScale: ColorScale,
  darken: boolean,
  isDarkMode: boolean,
  usePrefix: boolean = true,
  prefix: string = cssVarConstants.prefix
): Record<string, string> => {
  const varStart = usePrefix ? `${prefix}-` : '';

  return {
    [`--${varStart}${key}`]: `var(--${cssVar}-${shade})`,
    [`--${varStart}${key}-hover`]: `var(--${cssVar}-${adjustShade(shade, colorScale, ColorShadeOptions.HOVER, darken, isDarkMode)})`,
    [`--${varStart}${key}-pressed`]: `var(--${cssVar}-${adjustShade(shade, colorScale, ColorShadeOptions.PRESSED, darken, isDarkMode)})`,
  };
};

/**
 * Generates Tailwind CSS utility classes for a given color.
 *
 * @param key The color name to use
 * @param cssProperty The CSS property to apply the color to
 * @returns The generated utility classes for the color
 */
export const generateTwColorUtility = (
  key: string,
  cssProperty: CSSColorProperty,
  usePrefix: boolean = true,
  prefix: string = cssVarConstants.prefix
): Record<string, any> => {
  const varStart = usePrefix ? `${prefix}-` : '';

  return {
    [`.${key}`]: { [cssProperty]: `var(--${varStart}${key})` },
    [`.${key}-hover`]: { [cssProperty]: `var(--${varStart}${key}-hover)` },
    [`.${key}-active`]: { [cssProperty]: `var(--${varStart}${key}-pressed)` },
  };
};

/**
 * Generates a Tailwind CSS utility class for a given CSS property.
 *
 * @param varName The name of the CSS variable
 * @param cssProperty The CSS property to apply
 * @param usePrefix Whether to use the CSS variable prefix
 * @param prefix The CSS variable prefix to use
 * @returns The generated utility class for the CSS property
 */
export const generateTwUtility = (
  varName: string,
  cssProperty: CSSProperty | CSSColorProperty,
  usePrefix: boolean = true,
  prefix: string = cssVarConstants.prefix
): Record<string, any> => {
  // This is a color property
  if (typeof cssProperty === 'string') {
    return generateTwColorUtility(varName, cssProperty, usePrefix, prefix);
  } else {
    const varStart = usePrefix ? `${prefix}-` : '';

    return {
      [`.${varStart}${varName}`]: cssProperty,
    };
  }
};

/**
 * Given a map of base colors (colors that don't have a state), generate CSS variables with states
 *
 * @param baseColorMap The map of colors that don't have states
 * @returns The list of CSS variables in light and dark mode, with states
 */
export const generateCssVarsFromMap = (
  baseColorMap: BaseColorMap,
  darken: boolean = true,
  usePrefix: boolean = true,
  prefix: string = cssVarConstants.prefix
): BaseColorMapGenReturn => {
  const lightVars: Record<string, string> = {};
  const darkVars: Record<string, string> = {};

  for (const key in baseColorMap) {
    const { cssVar, colorScale, light, dark } = baseColorMap[key];

    const lightStateVars = generateCssStateVars(
      key,
      light.shade,
      cssVar,
      colorScale,
      darken,
      false,
      usePrefix,
      prefix
    );

    const darkStateVars = generateCssStateVars(
      key,
      dark.shade,
      cssVar,
      colorScale,
      darken,
      true,
      usePrefix,
      prefix
    );

    Object.assign(lightVars, lightStateVars);
    Object.assign(darkVars, darkStateVars);
  }

  return { light: lightVars, dark: darkVars };
};

export const generateTwUtilitiesFromMap = (
  baseColorMap: BaseColorMap,
  cssProperty: CSSColorProperty
): Record<string, any> => {
  const utilities: Record<string, any> = {};

  for (const key in baseColorMap) {
    const utility = generateTwColorUtility(key, cssProperty);
    Object.assign(utilities, utility);
  }

  return utilities;
};
