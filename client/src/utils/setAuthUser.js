export const setAuthUser = user => {
    localStorage.setItem("user", JSON.stringify(user));
};

export default setAuthUser