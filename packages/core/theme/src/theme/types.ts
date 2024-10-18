/**
 * The theme types file contains Typescript types that relate to themes.
 */

/**
 * The Mode type represents the different modes of a theme (light and dark).
 */
export type Modes = 'light' | 'dark';

/**
 * The ModeObject type is a type that represents an object with keys of type Mode and values of type string.
 *
 * Used to define the different colors for each mode.
 */
export type ModeObject = {
  [key in Modes]: string;
};
