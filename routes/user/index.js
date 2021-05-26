// user sign up, login and get routes
const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");
// will need to require whichever middleware we use for authenticatiton here

// user/[route]
router.get('/', userController.getUser);
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;