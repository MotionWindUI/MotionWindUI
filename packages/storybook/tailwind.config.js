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
  plugins: [
    motionWindUIPlugin({
      theme: {
        darken: true,
        colors: {
          neutral: {
            50: '#ffefff',
          },
        },
        extendedColors: {
          accent: {
            50: 'theme("colors.jelly-bean.50")',
            100: 'theme("colors.jelly-bean.100")',
            200: 'theme("colors.jelly-bean.200")',
            300: 'theme("colors.jelly-bean.300")',
            400: 'theme("colors.jelly-bean.400")',
            500: 'theme("colors.jelly-bean.500")',
            600: 'theme("colors.jelly-bean.600")',
            700: 'theme("colors.jelly-bean.700")',
            800: 'theme("colors.jelly-bean.800")',
            900: 'theme("colors.jelly-bean.900")',
            950: 'theme("colors.jelly-bean.950")',
            DEFAULT: 'theme("colors.jelly-bean.500")',
            foreground: {
              light: 'theme("colors.jelly-bean.50")',
              dark: 'theme("colors.jelly-bean.900")',
            },
            background: {
              light: 'theme("colors.jelly-bean.900")',
              dark: 'theme("colors.jelly-bean.50")',
            },
          },
        },
      },
    }),
  ],
};
