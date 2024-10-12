// eslint-disable-next-line import-x/no-unresolved
import config from '@motionwindui/vite-config/base';
import { defineConfig } from 'vite';

export default defineConfig({
  ...config,
  build: {
    ...config.build,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 'motionwindui-theme',
      fileName: format => `motionwindui-theme.${format}.js`,
    },
  },
});
