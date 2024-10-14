import libConfig from '@motionwindui/eslint-config/library';

export default [
  ...libConfig,
  {
    ignores: ['*.config.*', '*.d.ts', 'dist/', 'node_modules/'],
    files: ['src/**/*.ts', 'src/**/*.tsx'],
  },
];
