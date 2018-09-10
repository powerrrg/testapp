export const login = (data) => {
    return {
        payload: data,
        type: 'LOG_IN',
    };
};