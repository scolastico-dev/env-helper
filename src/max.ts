import { $float } from "./float";

/**
 * Retrieves a number from an environment variable and validates it doesn't exceed a maximum value.
 * @param value - The name of the environment variable
 * @param max - The maximum allowed value
 * @param def - Optional default number value to use if the environment variable is not set
 * @returns The number value from the environment variable if it's within the maximum limit
 * @throws Will throw an error if the value is not a valid number, exceeds the maximum, or if the environment variable is missing and no default is provided
 */
export const $max = (value: string, max: number, def?: number) => {
  const i = $float(value, def);
  if (isNaN(i)) throw new Error(`Invalid number for environment variable: ${value}`);
  if (i > max) throw new Error(`Value ${i} is greater than maximum ${max} for environment variable: ${value}`);
  return i;
};
