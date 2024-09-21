/**
 * The background color variables.
 *
 * Background in the context of MotionWindUI, is referred to as the color of the background of the site overall.
 *
 * Basically, the shades for the background color of pages.
 */

import { neutral } from 'src/themeColors';
import { BaseColorShadeInfo, CSSColorProperty } from '../types';

export const backgroundBaseShadesList = [
  'background',
  'background-strong',
] as const;

export type BackgroundBaseShades = (typeof backgroundBaseShadesList)[number];

export const backgroundBaseShades: Record<
  BackgroundBaseShades,
  BaseColorShadeInfo
> = {
  background: {
    cssVar: 'neutral',
    cssProperty: CSSColorProperty.BackgroundColor,
    colorScale: neutral,
    light: {
      shade: 50,
    },
    dark: {
      shade: 950,
    },
  },
  'background-strong': {
    cssVar: 'neutral',
    cssProperty: CSSColorProperty.BackgroundColor,
    colorScale: neutral,
    light: {
      shade: 100,
    },
    dark: {
      shade: 900,
    },
  },
};
