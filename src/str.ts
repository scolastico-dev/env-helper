import { $err } from "./err";

/**
 * Retrieves a string value from an environment variable.
 * @param key - The name of the environment variable
 * @param def - Optional default string value to use if the environment variable is not set
 * @returns The string value from the environment variable or the default value
 * @throws Will throw an error if the environment variable is missing and no default is provided
 */
export const $str = (key: string, def?: string) =>
  process.env[key] || (typeof def === 'string' ? def : $err(key));
