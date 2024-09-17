/**
 * The following types are used to define CSS variables and used to generate CSS variables and utilties.
 */

import { ColorShadeNumberScale } from 'src/types';

/**
 * A type that represents a CSS property.
 */
export enum CSSProperty {
  BackgroundColor = 'backgroundColor',
  Color = 'color',
}

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
  shade: Partial<keyof ColorShadeNumberScale>;
  /** The name of the CSS variable to use without the shade e.g. neutral */
  cssVar: string;
  /** The CSS property to use e.g. backgroundColor */
  cssProperty: CSSProperty;
};
