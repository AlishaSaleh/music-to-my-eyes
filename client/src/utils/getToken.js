export const getToken = () => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
        return accessToken;
    }
    
    return null;
}