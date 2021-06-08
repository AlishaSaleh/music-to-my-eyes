export const setAuthUser = user => {
    // console.log(user);
    // console.log("GOT HERE!");
    localStorage.setItem("user", JSON.stringify(user));
};

export default setAuthUser