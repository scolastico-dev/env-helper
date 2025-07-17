import { $str } from "./str";

/**
 * Retrieves a URL string from an environment variable and validates it's a valid URL.
 * @param key - The name of the environment variable
 * @param def - Optional default URL string to use if the environment variable is not set
 * @returns The validated URL string from the environment variable
 * @throws Will throw an error if the URL is invalid, or if the environment variable is missing and no default is provided
 */
export const $url = (key: string, def?: string) => {
  const url = $str(key, def);
  try {
    new URL(url);
  } catch {
    throw new Error(`Invalid URL for environment variable: ${key}`);
  }
  return url;
};
