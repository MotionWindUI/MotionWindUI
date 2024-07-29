import {
  ButtonContext,
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
  useContextProps,
} from "react-aria-components";
import { buttonStyles } from "@motionwindui/theme/src/components/button";
import React, { cloneElement, isValidElement } from "react";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { MotionWindUIBaseProps } from "@motionwindui/base";

export interface ButtonProps extends RACButtonProps, MotionWindUIBaseProps {
  /** The variant of the button */
  variant?: "solid" | "faded" | "bordered" | "ghost" | "light";

  /** The icon to display before the content */
  startContent?: React.ReactNode;

  /** The icon to display after the content */
  endContent?: React.ReactNode;

  /** Shadow */
  shadow?: boolean;

  /** Is icon only */
  isIconOnly?: boolean;

  /** Is disabled */
  isDisabled?: boolean;

  /** Is loading */
  isLoading?: boolean;

  /** Whether or not to disable animations */
  animateDisable?: boolean;

  /** The option to always show children (when provided) even in icon only */
  alwaysShowChildren?: boolean;

  /** React children */
  children?: React.ReactNode;
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const buttonGroup = useButtonGroupContext();
    const isInGroup = !!buttonGroup;

    const {
      color = buttonGroup?.color ?? "neutral",
      variant = buttonGroup?.variant ?? "solid",
      size = buttonGroup?.size ?? "md",
      radius = buttonGroup?.radius ?? "md",
      startContent: startContentProp,
      endContent: endContentProp,
      isIconOnly = false,
      isDisabled: isDisabledProp = buttonGroup?.isDisabled ?? false,
      isLoading = false,
      shadow = buttonGroup?.shadow ?? false,
      animateDisable = false,
      alwaysShowChildren = false,
      children,
      className,
    } = props;

    const isDisabled = isDisabledProp || isLoading;

    [props, ref] = useContextProps(props, ref, ButtonContext);

    const iconClone = (icon: React.ReactNode) =>
      isValidElement(icon)
        ? cloneElement(icon, {
            // @ts-ignore
            "aria-hidden": true,
            tabIndex: -1,
            focusable: false,
          })
        : null;

    let startContent = iconClone(startContentProp);
    let endContent = iconClone(endContentProp);

    return (
      <RACButton
        ref={ref}
        className={composeRenderProps(className, (className, renderProps) =>
          buttonStyles({
            ...renderProps,
            variant,
            color,
            size,
            radius,
            isInGroup,
            isIconOnly,
            animateDisable,
            isDisabled,
            shadow,
            className,
          }),
        )}
        {...props}
      >
        {startContent}
        {alwaysShowChildren || !isIconOnly ? children : null}
        {endContent}
      </RACButton>
    );
  },
);

Button.displayName = "MotionWindUI.Button";

export default Button;
