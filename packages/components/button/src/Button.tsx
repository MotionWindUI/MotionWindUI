/* eslint-disable unicorn/filename-case */
import React from 'react';
import useButton, { UseButtonProps } from './useButton';

export interface ButtonProps extends UseButtonProps {
  /**
   * Ref to the DOM node.
   */
  ref?: React.ForwardedRef<HTMLElement | null>;
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { className, ..._rest } = useButton({
      ...props,
      color: 'neutral',
      ref,
    });

    return <button className={className}>Click Me</button>;
  }
);

Button.displayName = 'MotionWindUI.Button';

export default Button;
