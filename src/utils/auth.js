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
    if (!token) return;

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = decodedToken.exp * 1000;

    if (Date.now() >= expirationTime) {
        removeToken();
        reload()
    }
};

export const reload = () => window.location.reload()

export const logout = () => {
    removeToken();
    reload()
};