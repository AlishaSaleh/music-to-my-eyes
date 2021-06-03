import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/user");
    },
    // Gets the user with the given id
    getUser: function (id) {
        return axios.get("/user/" + id);
    },
    loginUser: function (user) {
        return axios.post("/user/login", user).then(document.location.replace('/dashboard'));
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/user/" + id);
    },
    // Saves a user to the database
    createUser: function (userData) {
        return axios.post("/user/signup", userData);
    },
    // Updaes a user in the database
    updateUser: function (id, userData) {
        return axios.put("/user/" + id, userData);
    }
};
