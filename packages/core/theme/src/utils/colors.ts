import { ColorScale, ColorShadeNumberScale } from 'src/types';

export const adjustShade = (
  shade: Partial<keyof ColorShadeNumberScale>,
  colorScale: ColorScale,
  darken: boolean = true
) => {
  const shades = Object.keys(colorScale).filter(key => !isNaN(Number(key)));
};
