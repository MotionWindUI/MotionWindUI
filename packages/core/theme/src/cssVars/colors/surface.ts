/**
 * The surface color variables.
 *
 * Surface in the context of MotionWindUI, is referred to as the color of the surface on top of the background.
 */

import { neutral, primary, secondary, success, warning } from 'src/themeColors';
import { BaseColorShadeInfo, CSSColorProperty } from '../types';

// The constant to prefix the surface shade variables with
export const SURFACE_CONSTANT_PREFIX = 'surface';

// The list of surface base shades without the prefix
export const surfaceBaseShadesListWoPrefix = [
  'neutral',
  'neutral-subtle',
  'neutral-strong',
  'primary',
  'primary-subtle',
  'primary-strong',
  'secondary',
  'secondary-subtle',
  'secondary-strong',
  'success',
  'success-subtle',
  'success-strong',
  'warning',
  'warning-subtle',
  'warning-strong',
  'danger',
  'danger-subtle',
  'danger-strong',
] as const;

// The list of surface base shades
export const surfaceBaseShadesList = surfaceBaseShadesListWoPrefix.map(
  shade => `${SURFACE_CONSTANT_PREFIX}-${shade}` as const
);

// The type of surface base shades
export type SurfaceBaseShades = (typeof surfaceBaseShadesList)[number];

export const surfaceBaseShades: Record<SurfaceBaseShades, BaseColorShadeInfo> =
  {
    'surface-neutral': {
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
    'surface-neutral-subtle': {
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
    'surface-neutral-strong': {
      cssVar: 'neutral',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: neutral,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
    'surface-primary': {
      cssVar: 'primary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: primary,
      light: {
        shade: 50,
      },
      dark: {
        shade: 950,
      },
    },
    'surface-primary-subtle': {
      cssVar: 'primary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: primary,
      light: {
        shade: 100,
      },
      dark: {
        shade: 900,
      },
    },
    'surface-primary-strong': {
      cssVar: 'primary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: primary,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
    'surface-secondary': {
      cssVar: 'secondary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: secondary,
      light: {
        shade: 50,
      },
      dark: {
        shade: 950,
      },
    },
    'surface-secondary-subtle': {
      cssVar: 'secondary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: secondary,
      light: {
        shade: 100,
      },
      dark: {
        shade: 900,
      },
    },
    'surface-secondary-strong': {
      cssVar: 'secondary',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: secondary,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
    'surface-success': {
      cssVar: 'success',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: success,
      light: {
        shade: 50,
      },
      dark: {
        shade: 950,
      },
    },
    'surface-success-subtle': {
      cssVar: 'success',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: success,
      light: {
        shade: 100,
      },
      dark: {
        shade: 900,
      },
    },
    'surface-success-strong': {
      cssVar: 'success',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: success,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
    'surface-warning': {
      cssVar: 'warning',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 50,
      },
      dark: {
        shade: 950,
      },
    },
    'surface-warning-subtle': {
      cssVar: 'warning',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 100,
      },
      dark: {
        shade: 900,
      },
    },
    'surface-warning-strong': {
      cssVar: 'warning',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
    'surface-danger': {
      cssVar: 'danger',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 50,
      },
      dark: {
        shade: 950,
      },
    },
    'surface-danger-subtle': {
      cssVar: 'danger',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 100,
      },
      dark: {
        shade: 900,
      },
    },
    'surface-danger-strong': {
      cssVar: 'danger',
      cssProperty: CSSColorProperty.BackgroundColor,
      colorScale: warning,
      light: {
        shade: 200,
      },
      dark: {
        shade: 800,
      },
    },
  };
