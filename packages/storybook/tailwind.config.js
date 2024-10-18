import { motionWindUIPlugin } from '@motionwindui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../core/theme/src/components/**/*.{js,jsx,ts,tsx}',
    '../core/theme/src/utils/**/*.{js,jsx,ts,tsx}',
    '../components/*/src/**/*.{js,jsx,ts,tsx}',
    '../components/*/stories/**/*.{js,jsx,ts,tsx}',
    './.storybook/preview.jsx',
    './.storybook/preview-body.html',
  ],
  theme: {
    extend: {
      colors: {
        'jelly-bean': {
          50: '#f1f9fa',
          100: '#dbeef2',
          200: '#bbdfe6',
          300: '#8cc7d4',
          400: '#55a6bb',
          500: '#3a8aa0',
          600: '#377b93',
          700: '#2f5d6f',
          800: '#2d4e5d',
          900: '#294250',
          950: '#172a35',
        },
      },
    },
  },
  plugins: [motionWindUIPlugin()],
};
