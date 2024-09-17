import {
  scienceBlue,
  fuchsiaBlue,
  aquaForest,
  coolGray,
  brandyPunch,
  cardinalRed,
} from 'src/baseColors';
import { TailwindThemeFunction } from 'src/types';

export const themeColors = (theme: TailwindThemeFunction) => {
  return {
    /* Neutrals + Shades */
    '--neutral': theme('colors.coolGray.DEFAULT', coolGray.DEFAULT),
    '--neutral-foreground': theme(
      'colors.coolGray.foreground',
      coolGray.foreground
    ),
    '--neutral-background': theme(
      'colors.coolGray.background',
      coolGray.background
    ),
    '--neutral-50': theme('colors.coolGray.50', coolGray[50]),
    '--neutral-100': theme('colors.coolGray.100', coolGray[100]),
    '--neutral-200': theme('colors.coolGray.200', coolGray[200]),
    '--neutral-300': theme('colors.coolGray.300', coolGray[300]),
    '--neutral-400': theme('colors.coolGray.400', coolGray[400]),
    '--neutral-500': theme('colors.coolGray.500', coolGray[500]),
    '--neutral-600': theme('colors.coolGray.600', coolGray[600]),
    '--neutral-700': theme('colors.coolGray.700', coolGray[700]),
    '--neutral-800': theme('colors.coolGray.800', coolGray[800]),
    '--neutral-900': theme('colors.coolGray.900', coolGray[900]),
    '--neutral-950': theme('colors.coolGray.950', coolGray[950]),

    /* Primary + Shades */
    '--primary': theme('colors.scienceBlue.DEFAULT', scienceBlue.DEFAULT),
    '--primary-foreground': theme(
      'colors.scienceBlue.foreground',
      scienceBlue.foreground
    ),
    '--primary-background': theme(
      'colors.scienceBlue.background',
      scienceBlue.background
    ),
    '--primary-50': theme('colors.scienceBlue.50', scienceBlue[50]),
    '--primary-100': theme('colors.scienceBlue.100', scienceBlue[100]),
    '--primary-200': theme('colors.scienceBlue.200', scienceBlue[200]),
    '--primary-300': theme('colors.scienceBlue.300', scienceBlue[300]),
    '--primary-400': theme('colors.scienceBlue.400', scienceBlue[400]),
    '--primary-500': theme('colors.scienceBlue.500', scienceBlue[500]),
    '--primary-600': theme('colors.scienceBlue.600', scienceBlue[600]),
    '--primary-700': theme('colors.scienceBlue.700', scienceBlue[700]),
    '--primary-800': theme('colors.scienceBlue.800', scienceBlue[800]),
    '--primary-900': theme('colors.scienceBlue.900', scienceBlue[900]),
    '--primary-950': theme('colors.scienceBlue.950', scienceBlue[950]),

    /* Secondary + Shades */
    '--secondary': theme('colors.fuchsiaBlue.DEFAULT', fuchsiaBlue.DEFAULT),
    '--secondary-foreground': theme(
      'colors.fuchsiaBlue.foreground',
      fuchsiaBlue.foreground
    ),
    '--secondary-background': theme(
      'colors.fuchsiaBlue.background',
      fuchsiaBlue.background
    ),
    '--secondary-50': theme('colors.fuchsiaBlue.50', fuchsiaBlue[50]),
    '--secondary-100': theme('colors.fuchsiaBlue.100', fuchsiaBlue[100]),
    '--secondary-200': theme('colors.fuchsiaBlue.200', fuchsiaBlue[200]),
    '--secondary-300': theme('colors.fuchsiaBlue.300', fuchsiaBlue[300]),
    '--secondary-400': theme('colors.fuchsiaBlue.400', fuchsiaBlue[400]),
    '--secondary-500': theme('colors.fuchsiaBlue.500', fuchsiaBlue[500]),
    '--secondary-600': theme('colors.fuchsiaBlue.600', fuchsiaBlue[600]),
    '--secondary-700': theme('colors.fuchsiaBlue.700', fuchsiaBlue[700]),
    '--secondary-800': theme('colors.fuchsiaBlue.800', fuchsiaBlue[800]),
    '--secondary-900': theme('colors.fuchsiaBlue.900', fuchsiaBlue[900]),
    '--secondary-950': theme('colors.fuchsiaBlue.950', fuchsiaBlue[950]),

    /* Success + Shades */
    '--success': theme('colors.aquaForest.DEFAULT', aquaForest.DEFAULT),
    '--success-foreground': theme(
      'colors.aquaForest.foreground',
      aquaForest.foreground
    ),
    '--success-background': theme(
      'colors.aquaForest.background',
      aquaForest.background
    ),
    '--success-50': theme('colors.aquaForest.50', aquaForest[50]),
    '--success-100': theme('colors.aquaForest.100', aquaForest[100]),
    '--success-200': theme('colors.aquaForest.200', aquaForest[200]),
    '--success-300': theme('colors.aquaForest.300', aquaForest[300]),
    '--success-400': theme('colors.aquaForest.400', aquaForest[400]),
    '--success-500': theme('colors.aquaForest.500', aquaForest[500]),
    '--success-600': theme('colors.aquaForest.600', aquaForest[600]),
    '--success-700': theme('colors.aquaForest.700', aquaForest[700]),
    '--success-800': theme('colors.aquaForest.800', aquaForest[800]),
    '--success-900': theme('colors.aquaForest.900', aquaForest[900]),
    '--success-950': theme('colors.aquaForest.950', aquaForest[950]),

    /* Warning + Shades */
    '--warning': theme('colors.brandyPunch.DEFAULT', brandyPunch.DEFAULT),
    '--warning-foreground': theme(
      'colors.brandyPunch.foreground',
      brandyPunch.foreground
    ),
    '--warning-background': theme(
      'colors.brandyPunch.background',
      brandyPunch.background
    ),
    '--warning-50': theme('colors.brandyPunch.50', brandyPunch[50]),
    '--warning-100': theme('colors.brandyPunch.100', brandyPunch[100]),
    '--warning-200': theme('colors.brandyPunch.200', brandyPunch[200]),
    '--warning-300': theme('colors.brandyPunch.300', brandyPunch[300]),
    '--warning-400': theme('colors.brandyPunch.400', brandyPunch[400]),
    '--warning-500': theme('colors.brandyPunch.500', brandyPunch[500]),
    '--warning-600': theme('colors.brandyPunch.600', brandyPunch[600]),
    '--warning-700': theme('colors.brandyPunch.700', brandyPunch[700]),
    '--warning-800': theme('colors.brandyPunch.800', brandyPunch[800]),
    '--warning-900': theme('colors.brandyPunch.900', brandyPunch[900]),
    '--warning-950': theme('colors.brandyPunch.950', brandyPunch[950]),

    /* Danger + Shades */
    '--danger': theme('colors.cardinalRed.DEFAULT', cardinalRed.DEFAULT),
    '--danger-foreground': theme(
      'colors.cardinalRed.foreground',
      cardinalRed.foreground
    ),
    '--danger-background': theme(
      'colors.cardinalRed.background',
      cardinalRed.background
    ),
    '--danger-50': theme('colors.cardinalRed.50', cardinalRed[50]),
    '--danger-100': theme('colors.cardinalRed.100', cardinalRed[100]),
    '--danger-200': theme('colors.cardinalRed.200', cardinalRed[200]),
    '--danger-300': theme('colors.cardinalRed.300', cardinalRed[300]),
    '--danger-400': theme('colors.cardinalRed.400', cardinalRed[400]),
    '--danger-500': theme('colors.cardinalRed.500', cardinalRed[500]),
    '--danger-600': theme('colors.cardinalRed.600', cardinalRed[600]),
    '--danger-700': theme('colors.cardinalRed.700', cardinalRed[700]),
    '--danger-800': theme('colors.cardinalRed.800', cardinalRed[800]),
    '--danger-900': theme('colors.cardinalRed.900', cardinalRed[900]),
    '--danger-950': theme('colors.cardinalRed.950', cardinalRed[950]),
  };
};
