export const API_BASE_URL = process.env.API_BASE_URL;
export const API_KEY = process.env.API_KEY;
export const fetchConfig: RequestInit = {
    cache: 'force-cache',
    next: {
        revalidate: 60
    },
}
