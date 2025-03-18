export const API_BASE_URL = process.env.API_BASE_URL;
export const API_KEY = process.env.API_KEY;
export const fetchConfig: RequestInit = {
  cache: "force-cache",
  next: {
    revalidate: 60,
  },
};
export const serializeParams = (
  queryParams: Record<string, string | number | undefined> = {}
) => {
  return Object.entries(queryParams).reduce((acc: string, [key, value]) => {
    if (value !== undefined) {
      acc += `${acc === "" ? "?" : "&"}${encodeURIComponent(
        key
      )}=${encodeURIComponent(value)}`;
    }
    return acc;
  }, "");
};
