import React from 'react';
import useButton, { UseButtonProps } from './useButton.js';

export interface ButtonProps extends UseButtonProps {}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { className, ...rest } = useButton({
      ...props,
      ref,
    });

    return <button>Click Me</button>;
  }
);

Button.displayName = 'MotionWindUI.Button';

export default Button;
