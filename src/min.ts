import { $float } from "./float";

/**
 * Retrieves a number from an environment variable and validates it meets a minimum value.
 * @param value - The name of the environment variable
 * @param min - The minimum required value
 * @param def - Optional default number value to use if the environment variable is not set
 * @returns The number value from the environment variable if it meets the minimum requirement
 * @throws Will throw an error if the value is not a valid number, is below the minimum, or if the environment variable is missing and no default is provided
 */
export const $min = (value: string, min: number, def?: number) => {
  const i = $float(value, def);
  if (isNaN(i)) throw new Error(`Invalid number for environment variable: ${value}`);
  if (i < min) throw new Error(`Value ${i} is less than minimum ${min} for environment variable: ${value}`);
  return i;
};
