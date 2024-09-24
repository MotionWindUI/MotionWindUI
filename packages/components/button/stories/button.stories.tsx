import React from 'react';
import type { Meta } from '@storybook/react';

import { Button, ButtonProps } from '../src';
import { buttonStyles, extendComponentVariants } from '@motionwindui/theme';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'neutral',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

const defaultProps = {
  ...buttonStyles.defaultVariants,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const CustomVariants = {
  args: {
    ...defaultProps,
    color: 'primary',
    size: 'lg',
    radius: 'full',
  },
  render: (args: ButtonProps) => {
    const extendedVariant = extendComponentVariants(buttonStyles, {
      color: {
        accent: ['bg-accent-500', 'text-white'],
      },
    });

    return (
      <Button {...args} extendedVariants={extendedVariant} color="accent" />
    );
  },
};
