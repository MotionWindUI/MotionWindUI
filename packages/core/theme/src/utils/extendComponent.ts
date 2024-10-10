/* eslint-disable no-prototype-builtins */
/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable unicorn/no-array-callback-reference */
import clsx from 'clsx';
import React from 'react';
import { ClassValue, tv } from 'tailwind-variants';

type Variants = Record<
  string,
  Record<string, ClassValue | Record<string, ClassValue>>
>;

type ExtendedComponentProps<C> =
  C extends React.ComponentType<infer P> ? P : never;

function mapPropsVariants(props: Record<string, any>, variantKeys: string[]) {
  const baseProps: Record<string, any> = {};
  const variantProps: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (variantKeys.includes(key)) {
      variantProps[key] = props[key];
    } else {
      baseProps[key] = props[key];
    }
  });

  return [baseProps, variantProps];
}

function getSlots(variants?: Variants): Record<string, string> {
  return variants
    ? Object.values(variants)
        .flatMap(Object.values)
        .reduce(
          (acc, slot) => {
            if (typeof slot === 'object' && slot !== null) {
              Object.keys(slot).forEach(key => {
                if (!acc.hasOwnProperty(key)) {
                  acc[key] = '';
                }
              });
            }
            return acc;
          },
          {} as Record<string, string>
        )
    : {};
}

export function extendComponent<C extends React.ComponentType<any>>(
  BaseComponent: C,
  styles: {
    variants?: Variants;
    defaultVariants?: Record<string, string>;
    compoundVariants?: Array<Record<string, string>>;
  } = {}
) {
  const { variants, defaultVariants, compoundVariants = [] } = styles || {};
  const slots = getSlots(variants);
  const hasSlots = typeof slots === 'object' && Object.keys(slots).length > 0;

  const ForwardedComponent = React.forwardRef<any, ExtendedComponentProps<C>>(
    (originalProps, ref) => {
      const newProps = React.useMemo(
        () =>
          getClassNamesWithProps({
            slots,
            variants,
            compoundVariants,
            props: originalProps,
            defaultVariants,
            hasSlots,
          }),
        [originalProps]
      );

      return React.createElement(BaseComponent, {
        ...originalProps,
        ...newProps,
        ref,
      });
    }
  );

  if ((BaseComponent as any).getCollectionNode) {
    (ForwardedComponent as any).getCollectionNode = (itemProps: any) => {
      const newProps = getClassNamesWithProps({
        slots,
        variants,
        compoundVariants,
        props: itemProps,
        defaultVariants,
        hasSlots,
      });
      return (BaseComponent as any).getCollectionNode({
        ...itemProps,
        ...newProps,
      });
    };
  }

  ForwardedComponent.displayName = `Extended(${BaseComponent.displayName || BaseComponent.name})`;

  return ForwardedComponent;
}

function getClassNamesWithProps({
  props = {},
  variants,
  slots,
  defaultVariants,
  compoundVariants,
  hasSlots,
}: {
  props?: Record<string, any>;
  variants?: Variants;
  slots?: Record<string, string>;
  defaultVariants?: Record<string, string>;
  compoundVariants?: Array<Record<string, string>>;
  hasSlots?: boolean;
}) {
  const customTv = tv({
    variants,
    defaultVariants,
    compoundVariants,
    ...(hasSlots && { slots }),
  });

  const [baseProps, variantProps] = mapPropsVariants(
    props,
    customTv.variantKeys
  );
  const newProps = { ...defaultVariants, ...baseProps };
  const classNames: Record<string, string> = {};

  const result = customTv(variantProps);

  if (hasSlots) {
    Object.entries(result).forEach(([key, value]) => {
      const slotResult = value();
      if (typeof slotResult === 'string') {
        classNames[key] = slotResult;
      }
    });
    Object.entries(props.className ?? {}).forEach(([key, value]) => {
      classNames[key] = clsx(classNames[key], value as ClassValue);
    });
  } else {
    newProps.className = clsx(result, props.className);
  }

  if (Object.keys(classNames).length > 0) {
    newProps.className = classNames;
  }

  return newProps;
}
