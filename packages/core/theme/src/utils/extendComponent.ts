import { deepmerge } from 'deepmerge-ts';
import {
  ComponentVariants,
  ComponentVariantsWithSlots,
  ExtendComponentVariants,
} from './types';

export const extendComponentVariants = <
  T extends ComponentVariants | ComponentVariantsWithSlots<any>,
>(
  baseVariants: T,
  userVariants: Partial<ExtendComponentVariants<T>>
) => {
  return deepmerge(baseVariants, userVariants);
};

export type CustomComponentVariants = ReturnType<
  typeof extendComponentVariants
>;
