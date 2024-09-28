import { CustomThemeConfig } from 'tailwindcss/types/config';
import { ClassValue } from 'tailwind-variants';
import { ThemeColorConfig } from './themeColors';

/**
 * A type that represents the color scale of a theme.
 *
 * The colors are provided in a shade scale of 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.
 */
export type ColorShadeNumberScale = {
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
};

/**
 * A type that represents a color scale with a default color, 'foreground' color, and 'background' color.
 */
export type ColorScale = {
  DEFAULT: string;
  foreground: {
    light: string;
    dark: string;
  };
  background: {
    light: string;
    dark: string;
  };
} & ColorShadeNumberScale;

/**
 * A type that represents the TailwindCSS function to retrieve values from the custom theme.
 */
export type TailwindThemeFunction = <
  TDefaultValue =
    | Partial<
        CustomThemeConfig & {
          extend: Partial<CustomThemeConfig>;
        }
      >
    | undefined,
>(
  path?: string,
  defaultValue?: TDefaultValue
) => TDefaultValue;

/**
 * The type that lets the developer define custom colors for a theme.
 *
 * It is not partial because the developer must define all the colors for the theme.
 * The colors are injected into the theme and can be used in the extendComponent function.
 */
export type CustomThemeColorConfig = {
  [key: string]: ColorScale;
};

/**
 * The type that represents the different options that a theme can be customized with.
 */
export interface ThemeOptions {
  /* Whether or not the developer would like any MotionWindUI CSS variables to be prefixed */
  usePrefix?: boolean;

  /* The prefix to add to the CSS variables. If not provided, it will default to 'mw' */
  prefix?: string;

  /* The name of the theme. If not provided, if this is a custom theme, then it will use the key of this object as the name. */
  name?: string;

  /* The name of the theme to extend. It uses the parent theme's variables unless otherwise extended / overriden */
  extends?: string;

  /* Whether or not this theme should have a light and dark mode */
  useLightAndDark?: boolean;

  /* Whether or not hover and pressed states should darken the color */
  darken?: boolean;

  /* The color scales for the theme */
  colors?: Partial<ThemeColorConfig>;

  /* Extra colors that can be added to the theme. These do not reflect as options in variants but can be used in the extendComponent function */
  extendedColors?: CustomThemeColorConfig;
}

/**
 * The type definition for the MotionWindUI Tailwind plugin options.
 */
export interface MotionWindUIPluginOptions {
  /* The main theme options */
  theme?: Omit<ThemeOptions, 'extends'>;
  /* The custom themes that can be added to the plugin */
  customThemes?: {
    [key: string]: Omit<ThemeOptions, 'usePrefix' | 'prefix'>;
  };
}

/**
 * The Typescript type for the transormation of a slot (from Tailwind Variants) to a class value (from Tailwind Variants).
 */
export type SlotToClasses<S extends string> = {
  [key in S]?: ClassValue;
};
