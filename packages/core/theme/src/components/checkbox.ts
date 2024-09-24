/**
 * This is a work in progress. It is just used for now to allow a component that has slots
 */

import { tv } from 'tailwind-variants';

export const CheckboxStyles = tv({
  slots: {
    base: [],
    label: [],
    input: [],
  },
  variants: {
    color: {
      neutral: {
        label: [],
      },
      primary: {
        label: [],
      },
      secondary: {
        label: [],
      },
      success: {
        label: [],
      },
      warning: {
        label: [],
      },
      danger: {
        label: [],
      },
    },
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
});
