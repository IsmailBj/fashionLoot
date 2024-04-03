export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token') || '';
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const isTokenExpired = () => {
    const token = getToken();
    if (!token) return true;

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = decodedToken.exp * 1000;

    if (Date.now() >= expirationTime) {
        removeToken();
        return true;
    }
    return false;
};

export const logout = () => {
    removeToken();
    window.location.reload()
};