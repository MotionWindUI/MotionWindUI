import { adjustShade, ColorShadeOptions } from 'src/utils/colors';
import { BaseColorShadeInfo, CSSProperty } from '../types';
import { neutral } from 'src/themeColors';

/**
 * The list of base color shades for the button component. It is used to generate the css variables for the button component
 * (which include the hover and pressed states).
 */
export const buttonBaseShades: Record<string, BaseColorShadeInfo> = {
  'button-bg-neutral': {
    shade: 500,
    cssProperty: CSSProperty.BackgroundColor,
    cssVar: 'neutral',
    colorScale: neutral,
  },
};

export const buttonCssVars = (darken: boolean = true) => {
  // Go through each base shade and generate the css variables
  const cssVars: Record<string, string> = {};

  Object.keys(buttonBaseShades).forEach(key => {
    const baseShade = buttonBaseShades[key];
    const { shade, cssVar, colorScale } = baseShade;

    // Generate the css variable
    cssVars[`--${key}`] = `var(--${cssVar}-${shade})`;
    cssVars[`--${key}-hover`] =
      `var(--${cssVar}-${adjustShade(shade, colorScale, ColorShadeOptions.HOVER, darken)})`;
    cssVars[`--${key}-pressed`] =
      `var(--${cssVar}-${adjustShade(shade, colorScale, ColorShadeOptions.PRESSED, darken)})`;
  });

  return cssVars;
};

export const buttonTwUtilities = () => {
  // Go through each base shade and generate the TailwindCSS utilities
  const twUtilities: Record<string, any> = {};

  Object.keys(buttonBaseShades).forEach(key => {
    const baseShade = buttonBaseShades[key];
    const { cssProperty } = baseShade;

    twUtilities[`.${key}`] = { [cssProperty]: `var(--${key})` };
    twUtilities[`.${key}-hover`] = { [cssProperty]: `var(--${key}-hover)` };
    twUtilities[`.${key}-active`] = { [cssProperty]: `var(--${key}-pressed)` };
  });

  console.log(twUtilities);

  return twUtilities;
};
