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
const ageValidation = require('../../validation/ageValidation');

// user/[route]
router.post("/signup", async (req, res) => {

    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    const notAdult = ageValidation(req.body.dob);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    if (notAdult) {
        return res.status(404).json({ message: "You must be over 18 to join!" }) 
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
// NOT USED
router.get("/test", authCheck, (req, res) => {
    res.json({ message: "authenticated!" })
})

// [user]/ -- GET all users for Match page
router.get("/", authCheck, async (req, res) => {
    try {
        const excluded = [req.user.id, ...req.user.likes]
        const userData = await User.find({ _id: { $nin: excluded } });
        // remove password before returning
        const sanUsers = userData.map(users => {
            return sanitiseUser(users);
        });
        // findOne (the currently logged in user) - exclude from the find()
        return res.json({ users: sanUsers })
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get User by ID --> works in Postman
router.get("/:id/", async (req, res) => {
    try {
        const userData = await User.findById(
            { _id: req.params.id }
        );

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        return res.json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update User with their likes --> works in Postman
router.put("/like/", authCheck, async (req, res) => {
    try {
        if (req.user.id === req.body.id) {
            return res.json({ message: "You can't like yourself!" })
        }

        const isLiked = req.user.likes.find(userId => userId === req.body.id);

        if (isLiked) {
            return res.json({ message: "You have already liked this user!" })
        }

        const likeData = await User.findByIdAndUpdate(
            { _id: req.user.id },
            { $push: { likes: req.body.id } }, 
            { new: true }
        );

        if (!likeData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        const likedUser = await User.findById(req.body.id)
        const likeArr = likedUser.likes;
        const isLikedUser = likeArr.find(userId =>
            userId.toString() === req.user.id.toString()
        );

        if (!isLikedUser) {
            return res.json(likeData)
        } else {
            User.updateOne(
                { _id: req.body.id },
                { $push: { matches: isLikedUser } },
                { new: true },
                function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(success);
                    }
                }
            );
            User.updateOne(
                { _id: isLikedUser },
                { $push: { matches: req.body.id } },
                { new: true },
                function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(success);
                    }
                }
            );
            return res.json(likeData)
        }

 
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update user with their dislikes so they are no longer returned to the user
// NOT USED - for future development
router.put("/:id/dislike/", async (req, res) => {
    try {
        const likeData = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { dislikes: req.body } }, // works with id e.g. '60b602cd2c09b7409853a947' <-- format
            { new: true }
        );

        if (!likeData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        return res.json(likeData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update User info - profile settings --> works in Postman
router.put("/:id/", async (req, res) => {
    try {
        if(req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const userData = await User.findByIdAndUpdate(
            { _id: req.params.id },
            // sets all the new info into the database
            { $set: req.body },
            { new: true }
        );

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        return res.json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a User --> works in Postman
router.delete("/:id", async (req, res) => {
    try {
        const userData = await User.findByIdAndRemove(
            { _id: req.params.id }
        );

        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        return res.json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;