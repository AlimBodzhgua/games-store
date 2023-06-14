
export const isUserLoggedIn = () => {
    if (localStorage.hasOwnProperty('user')) {
        return true;
    }
    return false;
} 