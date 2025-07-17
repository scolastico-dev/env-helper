import { $str } from "./str";

/**
 * Retrieves a floating-point number value from an environment variable.
 * @param key - The name of the environment variable
 * @param def - Optional default number value to use if the environment variable is not set
 * @returns The floating-point number value parsed from the environment variable
 * @throws Will throw an error if the environment variable is missing and no default is provided
 */
export const $float = (key: string, def?: number) =>
  parseFloat($str(key, def?.toString()));
