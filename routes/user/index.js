// user sign up, login and get routes
const express = require('express');
const router = express.Router();
const config = require('../../config');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

// input validation
const validateRegisterInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const { sanitiseUser } = require('../../utils/sanitiseUser');
const { authCheck } = require('../../middleware/authCheck');

// user/[route]
router.post("/signup", async (req, res) => {

    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check if username and password
    const { name, email, password, dob, gender, location, orientation, image } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
        name,
        email,
        password: hash,
        dob,
        gender,
        location,
        orientation,
        image
    });

    //console.log(newUser);

    await newUser.save();

    const token = jwt.sign({ id: newUser.id }, config.secret, { expiresIn: '24h' });

    res.json({
        token,
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            dob: newUser.dob,
            gender: newUser.gender,
            location: newUser.location,
            orientation: newUser.orientation,
            image: newUser.image,
        }
    });


    // res.status(500).json(error);

});

router.post("/login", async (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({ message: "Email or password incorrect" })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Email or password incorrect' });

    const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: "24h" });
    res.json({ user: sanitiseUser(user), token })

});

// Testing Auth in Postman
router.get("/test", authCheck, (req, res) => {
    res.json({ message: "authenticated!" })
})

// [user]/ -- GET all users for Match page
router.get("/", async (req, res) => {
    try {
        //const { user } = req.headers;
        const userData = await User.find({});
        // console.log(req.headers);
        // need to remove password before returning
        // need to remove this user from data - client or serverside?
        // findOne (the currently logged in user) - exclude from the find()
        return res.json({ users: userData })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update User with their likes 
router.put("/:id/like/", async (req, res) => {
    try {
        console.log(req.params);
        const likeData = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { likes: req.body } }, // works with id e.g. '60b602cd2c09b7409853a947' <-- format
            { new: true }
        )
        console.log(req.params.id);
        return res.json(likeData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update user with their dislikes so they are no longer returned to the user
// MIGHT NOT BE USED 
router.put("/:id/dislike/", async (req, res) => {
    try {
        console.log(req.params);
        const likeData = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { dislikes: req.body } }, // works with id e.g. '60b602cd2c09b7409853a947' <-- format
            { new: true }
        )
        console.log(req.params.id);
        return res.json(likeData)
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;