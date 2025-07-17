import { $str } from "./str";

/**
 * Retrieves an integer value from an environment variable.
 * @param key - The name of the environment variable
 * @param def - Optional default number value to use if the environment variable is not set
 * @returns The integer value parsed from the environment variable
 * @throws Will throw an error if the environment variable is missing and no default is provided
 */
export const $int = (key: string, def?: number) =>
  parseInt($str(key, def?.toString()), 10);
