import { $str } from "./str";

/**
 * Retrieves a string value from an environment variable and validates it's one of the allowed values.
 * @param key - The name of the environment variable
 * @param values - Array of allowed string values
 * @param def - Optional default string value to use if the environment variable is not set
 * @returns The string value from the environment variable if it's in the allowed values list
 * @throws Will throw an error if the value is not in the allowed values list, or if the environment variable is missing and no default is provided
 */
export const $oneOf = (key: string, values: string[], def?: string) => {
  const value = $str(key, def);
  if (!values.includes(value)) {
    throw new Error(`Invalid value for environment variable: ${key}`);
  }
  return value;
};
