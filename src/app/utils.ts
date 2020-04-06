/**
 * Build query string from js object
 * @param payload filter model
 */
export const buildQueryFromPayload = (payload: any) => {
    const str = '?' + Object.keys(payload).reduce((a, k) => {
        if (payload[k] != null && payload[k].length) {
            a.push(k + '=' + encodeURIComponent(payload[k]));
        }
        return a;
    }, []).join('&');
    return str;
};
