import { ButtonVariantProps, buttonStyles } from '@motionwindui/theme';
import { useMemo } from 'react';

interface Props {
  /**
   * Ref to the DOM node.
   */
  ref?: React.ForwardedRef<HTMLElement | null>;
}

export type UseButtonProps = Props & ButtonVariantProps;

export const useButton = ({ ref, ...props }: UseButtonProps) => {
  const { color, size, radius, ..._rest } = props;

  //const rootProps = useMemo(() => {}, []);

  const styles = useMemo(
    () =>
      buttonStyles({
        color,
        size,
        radius,
      }),
    [color, size, radius]
  );

  return {
    ref,
    className: styles,
    ...props,
  };
};

export default useButton;
