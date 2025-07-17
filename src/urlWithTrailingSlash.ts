import { $url } from "./url";

/**
 * Retrieves a URL string from an environment variable, validates it, and ensures it ends with a trailing slash.
 * @param key - The name of the environment variable
 * @param def - Optional default URL string to use if the environment variable is not set
 * @returns The validated URL string with a guaranteed trailing slash
 * @throws Will throw an error if the URL is invalid, or if the environment variable is missing and no default is provided
 */
export const $urlWithTrailingSlash = (key: string, def?: string) => {
  let url = $url(key, def);
  if (!url.endsWith('/')) url = url + '/';
  return url;
};
