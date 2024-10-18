/**
 * @overview The colors/types file contains Typescript types that relate to colors.
 */

//---------------------------------------------------------------------
// Color Scale Types
//---------------------------------------------------------------------
/**
 * The ColorScale type represents the different shades of a color.
 */
export type ColorScale =
  | Partial<{
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    }>
  | string;

/**
 * The ExtendedColorScale type extends the ColorScale type with additional properties.
 */
export type ExtendedColorScale = ColorScale &
  Partial<{
    DEFAULT: string;
    foreground: string;
  }>;

//---------------------------------------------------------------------
// Color Accessibility Types
//---------------------------------------------------------------------
/**
 * The ColorAccessibility type represents the different types of color accessibility.
 */
export type ColorAccessibility =
  | 'AA'
  | 'AAA'
  | 'AAALarge'
  | 'AAALargeText'
  | 'Contrast';

//---------------------------------------------------------------------
// Theme Color Types
//---------------------------------------------------------------------
export type BaseColor = {
  background: ColorScale;
  focus: ColorScale;
  overlay: ColorScale;
  shadow: ColorScale;
};

/**
 * The ThemeColor type represents the different colors of a theme.
 */
export type ThemeColor = BaseColor & {
  neutral: ExtendedColorScale;
  primary: ExtendedColorScale;
  secondary: ExtendedColorScale;
  success: ExtendedColorScale;
  warning: ExtendedColorScale;
  danger: ExtendedColorScale;
};

/**
 * The SemanticColor type represents the light and dark colors of a theme.
 */
export type SemanticBaseColors = {
  light: BaseColor;
  dark: BaseColor;
};
