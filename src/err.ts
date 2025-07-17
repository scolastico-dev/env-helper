/**
 * Throws an error for a missing environment variable.
 * @param key - The name of the missing environment variable
 * @throws Always throws an error with a message indicating the missing variable
 */
export const $err = (key: string) => {
  throw new Error(`Missing environment variable: ${key}`);
};
