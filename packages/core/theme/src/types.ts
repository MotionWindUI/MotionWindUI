import { CustomThemeConfig } from 'tailwindcss/types/config';

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
  foreground: string;
  background: string;
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
