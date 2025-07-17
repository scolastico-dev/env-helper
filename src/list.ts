import { $str } from "./str";

/**
 * Retrieves a list of strings from an environment variable (comma-separated values).
 * @param key - The name of the environment variable
 * @param def - Optional default array of strings to use if the environment variable is not set
 * @returns An array of strings parsed from the comma-separated environment variable, with empty strings filtered out
 * @throws Will throw an error if the environment variable is missing and no default is provided
 */
export const $list = (key: string, def?: string[]) =>
  $str(key, def?.join(','))
    .split(',')
    .filter((x) => x !== '');
