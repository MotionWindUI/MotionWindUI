import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
  base: [
    'z0',
    'group',
    'inline-flex',
    'relative',
    'flex-row',
    'items-center',
    'justify-center',
    'min-w-max',
    'outline-none',
    'select-none',
    'text-wrap',
    'overflow-hidden',
    'data-[pressed=true]:scale-95',
  ],
  variants: {
    color: {
      neutral: [],
      primary: [],
      secondary: [],
      success: [],
      warning: [],
      danger: [],
    },
    size: {
      sm: [],
      md: [],
      lg: [],
    },
    radius: {
      sm: [],
      md: [],
      lg: [],
      xl: [],
      full: [],
    },
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md',
    radius: 'md',
  },
});

export type ButtonStyles = typeof buttonStyles;

export type ButtonVariantProps = VariantProps<ButtonStyles>;
