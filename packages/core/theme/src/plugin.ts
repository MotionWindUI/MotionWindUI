import plugin from 'tailwindcss/plugin';

const corePlugin = () => {
  return plugin(({ addBase }) => {
    addBase({
      [':root']: {
        '--motion-wind-ui-color-primary': '#3B82F6',
      },
    });
  });
};

export const motionWIndUIPlugin = corePlugin;
