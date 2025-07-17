import { $float } from "./float";

/**
 * Retrieves a number from an environment variable and validates it's within a specified range.
 * @param value - The name of the environment variable
 * @param min - The minimum allowed value (inclusive)
 * @param max - The maximum allowed value (inclusive)
 * @param def - Optional default number value to use if the environment variable is not set
 * @returns The number value from the environment variable if it's within the specified range
 * @throws Will throw an error if the value is not a valid number, is outside the range, or if the environment variable is missing and no default is provided
 */
export const $range = (value: string, min: number, max: number, def?: number) => {
  const i = $float(value, def);
  if (isNaN(i)) throw new Error(`Invalid number for environment variable: ${value}`);
  if (i < min) throw new Error(`Value ${i} is less than minimum ${min} for environment variable: ${value}`);
  if (i > max) throw new Error(`Value ${i} is greater than maximum ${max} for environment variable: ${value}`);
  return i;
};
