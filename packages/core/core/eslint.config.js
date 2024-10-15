import libConfig from '@motionwindui/eslint-config/library';

export default [
  ...libConfig,
  {
    ignores: [
      '*.config.*',
      '*.d.ts',
      '*.test.ts',
      '*.test.tsx',
      'dist/',
      'node_modules/',
    ],
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
  },
];
