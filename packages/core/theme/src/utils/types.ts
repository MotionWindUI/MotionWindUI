/**
 * @fileoverview Types used for utility functions inside of the theme package.
 */

import { ClassValue } from 'tailwind-variants';

/**
 * The type that gets the class values of a slot.
 */
export type SlotClassValues<S> = {
  [key in keyof S]?: ClassValue;
};

/**
 * The type that represents the variant from Tailwind-Variants
 *
 * Given S, the type is where the overall type is an object with string keys (K).
 * Each key has an object with string keys (P). Given S, if it is undefined, then the value is a ClassValue.
 * Otherwise, the value is a SlotClassValues<S>.
 *
 * @example
 *
 * const variants: Variants<'hover'> = {
 *  hover: ['hover:bg-gray-100'],
 * };
 *
 * const variants: Variants<Slots> = {
 *  hover: {
 *    bg: 'hover:bg-gray-100',
 *  }
 * }
 */
export type Variants<S> = {
  [K: string]: {
    [P: string]: S extends undefined ? ClassValue : SlotClassValues<S>;
  };
};

/**
 * The type that gets the props of a React component.
 *
 * @example
 *
 * // Props of a button element
 * type ButtonProps = ComponentProps<'button'>;
 * // Props of a Button component
 * type ButtonProps = ComponentProps<typeof Button>;
 *
 */
export type ComponentProps<T extends React.ElementType> =
  React.ComponentProps<T>;
