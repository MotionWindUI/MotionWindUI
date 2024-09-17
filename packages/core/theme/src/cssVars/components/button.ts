import { BaseColorShadeInfo, CSSProperty } from '../types';

export const buttonBaseShades: Record<string, BaseColorShadeInfo> = {
  '--button-bg-neutral': {
    shade: 500,
    cssProperty: CSSProperty.BackgroundColor,
    cssVar: 'neutral',
  },
};

export const buttonCssVars = () => {};
