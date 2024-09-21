/**
 * Text colors
 *
 * Text colors are used for text and icons.
 */

import { neutral } from 'src/themeColors';
import { BaseColorShadeInfo, CSSColorProperty } from '../types';
import { ColorScale, ColorShadeNumberScale } from 'src/types';

/**
 * The prefix to use for text colors.
 */
export const TEXT_CONSTANT_PREFIX = 'text';

export const textBaseShadesWoColor = [
  '',
  '-subtle',
  '-strong',
  '-on-surface',
  '-on-surface-subtle',
  '-on-surface-strong',
];

export type TextBaseShadesWoColor = (typeof textBaseShadesWoColor)[number];

export const textShadeInfo: Record<
  TextBaseShadesWoColor,
  Record<
    'light' | 'dark',
    Record<'shade', Partial<keyof ColorShadeNumberScale>>
  >
> = {
  '': {
    light: {
      shade: 500,
    },
    dark: {
      shade: 500,
    },
  },
  '-subtle': {
    light: {
      shade: 300,
    },
    dark: {
      shade: 700,
    },
  },
  '-strong': {
    light: {
      shade: 700,
    },
    dark: {
      shade: 300,
    },
  },
  '-on-surface': {
    light: {
      shade: 800,
    },
    dark: {
      shade: 200,
    },
  },
  '-on-surface-subtle': {
    light: {
      shade: 600,
    },
    dark: {
      shade: 400,
    },
  },
  '-on-surface-strong': {
    light: {
      shade: 900,
    },
    dark: {
      shade: 100,
    },
  },
};

/**
 * Allows overriding the base shades for the text color.
 *
 * At the moment, this can be empty, until specific colors need to be overridden
 * due to accessibility issues.
 */
const overridenTextBaseShades: Record<string, BaseColorShadeInfo> = {};

/**
 * Generates the base shades for the text color.
 *
 * @param color The color to generate the base shades for.
 * @param colorScale The color scale to use.
 * @returns The base shades for the color.
 */
export const textBaseShades = (
  color: string,
  colorScale: ColorScale
): Record<string, BaseColorShadeInfo> => {
  const baseShades: Record<string, BaseColorShadeInfo> = {};

  for (const shade of textBaseShadesWoColor as (keyof typeof textShadeInfo)[]) {
    const key = `${TEXT_CONSTANT_PREFIX}-${color}${shade}`;

    if (overridenTextBaseShades[key]) {
      baseShades[key] = overridenTextBaseShades[key];
      continue;
    }

    baseShades[`${TEXT_CONSTANT_PREFIX}-${color}${shade}`] = {
      cssVar: color,
      cssProperty: CSSColorProperty.Color,
      colorScale,
      light: textShadeInfo[shade].light,
      dark: textShadeInfo[shade].dark,
    };
  }

  return baseShades;
};
