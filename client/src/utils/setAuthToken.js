const setAuthToken = token => {
    localStorage.setItem("access_token", token)
};

export default setAuthToken;