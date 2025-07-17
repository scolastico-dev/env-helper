import { $str } from "./str";

/**
 * Retrieves a boolean value from an environment variable.
 * @param key - The name of the environment variable
 * @param def - Optional default boolean value to use if the environment variable is not set
 * @returns The boolean value parsed from the environment variable (case-insensitive 'true')
 * @throws Will throw an error if the environment variable is missing and no default is provided
 */
export const $bool = (key: string, def?: boolean) =>
  $str(key, def?.toString()).toLowerCase() === 'true';
