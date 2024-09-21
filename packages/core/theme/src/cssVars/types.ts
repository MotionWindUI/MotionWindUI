/**
 * The following types are used to define CSS variables and used to generate CSS variables and utilties.
 */
import { ColorScale, ColorShadeNumberScale } from 'src/types';

/**
 * A type that represents a CSS property.
 */
export enum CSSColorProperty {
  BackgroundColor = 'backgroundColor',
  Color = 'color',
}

/**
 * A type that represents a CSS property.
 */
export type CSSProperty = {
  [key: string]: string;
};

/**
 * BaseColorShadeInfo is used to give extra information about a base color shade.
 *
 * Base color shades are shades that hover and pressed states are based on. Hover and pressed states
 * dynmically adjust the shade of the base color to give a visual indication of the state.
 *
 * The shade can be adjusted by a number scale of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.
 *
 * It can be lightened or darkened by a number scale of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.
 *
 * The CSS property is given so that it is easier to genreate TailwindCSS utilities.
 */
export type BaseColorShadeInfo = {
  /** The name of the CSS variable to use without the shade e.g. neutral */
  cssVar: string;

  /** The CSS property to use e.g. backgroundColor */
  cssProperty: CSSColorProperty | CSSProperty;

  /** The color scale to get the shades from */
  colorScale: ColorScale;

  /** The shade to be used for light mode */
  light: {
    shade: Partial<keyof ColorShadeNumberScale>;
  };

  /** The shade to be used for dark mode */
  dark: {
    shade: Partial<keyof ColorShadeNumberScale>;
  };
};

/**
 * The type that represents the map of base color shades and their information.
 */
export type BaseColorMap = Record<string, BaseColorShadeInfo>;

/**
 * The return type of the base color map generators.
 */
export type BaseColorMapGenReturn = Record<
  'light' | 'dark',
  Record<string, any>
>;

/**
 * A type that represents the return type of the generated CSS variables.
 */
export type GeneratedCssVars = Record<
  'root' | 'light' | 'dark',
  Record<string, any>
>;
