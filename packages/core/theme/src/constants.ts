/**
 * @description The constants that is used for the overall theme package
 */

import { MotionWindUIPluginOptions } from './types';

export const DEFAULT_THEME_NAME = 'motionwindui';

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * The set of default options that is used for the main theme
 */
export const defaultThemeOptions: MotionWindUIPluginOptions = {
  theme: {
    useLightAndDark: true,
    darken: true,
    name: DEFAULT_THEME_NAME,
  },
};
