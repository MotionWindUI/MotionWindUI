/**
 * @module assertions
 *
 * @description This module provides a set of functions to assert or check for certain conditions.
 */

/**
 * The function checks if the value is defined.
 * @param value The value to check if it is defined
 * @returns A boolean indicating if the value is defined
 */
export const isDefined = <T>(value: T): value is NonNullable<T> =>
  value !== undefined && value !== null;

/**
 * The function checks if the value is undefined.
 * @param value The value to check if it is undefined
 * @returns A boolean indicating if the value is undefined
 */
export const isUndefined = <T>(value?: T): value is undefined =>
  value === undefined;

/**
 * The function checks if the given value is an array.
 * @param value The value to check if it is an array
 * @returns A boolean indicating if the value is an array
 */
export const isArray = <T>(value: any): value is Array<T> => {
  return Array.isArray(value);
};

/**
 * The function checks if the value is an object.
 * @param value The value to check if it is an object
 * @returns Whether the value is an object
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  const type = typeof value;
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  );
};

/**
 * The function checks if the value is a function.
 *
 * @param value The value to check if it is a function
 * @returns Whether the value is a function
 */
export const isFunction = <T extends Function = Function>(
  value: unknown
): value is T => {
  return typeof value === 'function';
};

/**
 * The function checks if the value is a string.
 *
 * @param value The value to check if it is a string
 * @returns Whether the value is a string
 */
export const isString = (value: unknown): value is string =>
  typeof value === 'string';

/**
 * The function checks if the value is a number.
 * It checks if the value is a number or a string that can be parsed into a number.
 *
 * @param value The value to check if it is a number
 * @returns Whether the value is a number
 */
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' || Number.isInteger(value);

/**
 * The function checks if the value is an empty object.
 * @param value Checks if the value is an empty object
 * @returns Whether the value is an empty object
 */
export const isEmptyObject = (value: unknown) => {
  if (!isObject(value)) return false;

  return Object.keys(value).length === 0;
};
