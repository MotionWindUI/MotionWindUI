import plugin from 'tailwindcss/plugin';
import { flattenThemeColors } from './colors/utils';
import { themeColors } from './colors/semantic';

const corePlugin = () => {
  const flattenColors = flattenThemeColors(themeColors(true).light);
  console.log(flattenColors);
  const flattenDarkColors = flattenThemeColors(themeColors(true).dark);
  console.log(flattenDarkColors);

  return plugin(({ addBase }) => {
    addBase({
      [':root']: {
        '--motion-wind-ui-color-primary': '#3B82F6',
      },
    });
  });
};

export const motionWindUIPlugin = corePlugin;
