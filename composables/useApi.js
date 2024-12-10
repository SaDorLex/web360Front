export const useApi = () => {
    const apiBase = '/app360/laravel/public/api';

    const getCsrfToken = async () => {
        await $fetch(`/app360/laravel/public/sanctum/csrf-cookie`, { credentials: 'include' });
    };

    const get = async (endpoint, params = {}) => {
        await getCsrfToken();
        return await $fetch(`${apiBase}${endpoint}`, { 
            params,
            credentials: 'include',
        });
    };

    const post = async (endpoint, body) => {
        await getCsrfToken();
        return await $fetch(`${apiBase}${endpoint}`, {
            method: 'POST',
            body,
            headers: {
                'X-XSRF-TOKEN': getCsrfToken(),
            },
            credentials: 'include',
        });
    };

    return { get, post };
};