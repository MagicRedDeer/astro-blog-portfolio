export function getBaseUrl(): string {
  return import.meta.env.BASE_URL;
}

export function createPath(path: string): string {
  const baseUrl = getBaseUrl();
  // Remove any leading slashes from the path and trailing slashes from baseUrl
  const cleanPath = path.replace(/^\//, "");
  const cleanBase = baseUrl.replace(/\/$/, "");
  return `${cleanBase}/${cleanPath}`;
}
