/**
 * A general utility file for working with objects.
 */

/**
 * Reverses the keys of an object.
 * @param obj The object to reverse
 * @returns The resulting object with the keys reversed
 */
export const reverseObject = <T extends object>(obj: T): T => {
  // Declare the reversed object, the keys, and the length of the keys
  const reversed: Partial<T> = {};
  const keys = Object.keys(obj);
  const length = keys.length;

  // Loop through the keys and reverse
  for (let index = 0; index < length; index++) {
    const key1 = keys[index];
    const key2 = keys[length - index - 1];

    (reversed as any)[key1] = obj[key2 as keyof T];
  }

  return reversed as T;
};

/**
 * Given an object and a value, this function will return the key of the value.
 * @param obj The object to get the key from
 * @param value The value of the key to get
 * @returns The key of the value
 */
export const getKeyByValue = <T extends object, V extends T[keyof T]>(
  obj: T,
  value: V
): keyof T | undefined => {
  return Object.keys(obj).find(key => obj[key as keyof T] === value) as
    | keyof T
    | undefined;
};
