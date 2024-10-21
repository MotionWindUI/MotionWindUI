/**
 * @overview The colors/types file contains Typescript types that relate to colors.
 */

//---------------------------------------------------------------------
// Color Scale Types
//---------------------------------------------------------------------
export type Shades =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ShadeScale = {
  [key in Shades]: string;
};

/**
 * The ColorScale type represents the different shades of a color.
 */
export type ColorScale = Partial<ShadeScale> | string;

/**
 * The ExtendedColorScale type extends the ColorScale type with additional properties.
 */
export type ExtendedColorScale = ColorScale &
  Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    foreground: string;
    'foreground-hover': string;
    'foreground-active': string;
  }>;

export type ExtendedColorScaleWithoutString = Partial<ShadeScale> &
  Partial<{
    DEFAULT: string;
    hover: string;
    active: string;
    foreground: string;
    'foreground-hover': string;
    'foreground-active': string;
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

export type ColorVariants =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

//---------------------------------------------------------------------
// Psuedo State Types
//---------------------------------------------------------------------
export type PseudoState = 'hover' | 'active' | 'focus';
