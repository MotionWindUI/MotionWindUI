import { ButtonVariantProps } from '@motionwindui/theme';
import { useMemo } from 'react';

interface Props {
  /**
   * Ref to the DOM node.
   */
  ref?: React.ForwardedRef<HTMLElement | null>;
}

export type UseButtonProps = Props & ButtonVariantProps;

export const useButton = ({ ref, ...props }: UseButtonProps) => {
  const { color, size, radius, ...rest } = props;

  //const rootProps = useMemo(() => {}, []);

  const styles = useMemo;

  return {
    ref,
    className: '',
    ...props,
  };
};

export default useButton;
