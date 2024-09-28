import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import baseConfig from './base.js';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  ...baseConfig,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
