import { $url } from "./url";

/**
 * Retrieves a URL string from an environment variable, validates it, and ensures it doesn't end with a trailing slash.
 * @param key - The name of the environment variable
 * @param def - Optional default URL string to use if the environment variable is not set
 * @returns The validated URL string with any trailing slash removed
 * @throws Will throw an error if the URL is invalid, or if the environment variable is missing and no default is provided
 */
export const $urlWithoutTrailingSlash = (key: string, def?: string) => {
  let url = $url(key, def);
  if (url.endsWith('/')) url = url.slice(0, -1);
  return url;
};
