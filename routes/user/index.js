// user sign up, login and get routes
const express = require('express');
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const User = require("../../models/User");

// input validation
const validateRegisterInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");

// user/[route]
router.post("/signup", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    } 
    
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            // newUser not currently read with the hashing function removed
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                dob: req.body.dob,
                gender: req.body.gender,
                location: req.body.location
            });
            // Hashing already done in model but this is alternative place for it if it doesn't work
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                // const payload = {
                //     id: user.id,
                //     name: user.name
                // };
                // // Sign token
                // jwt.sign(
                //     payload,
                //     keys.secretOrKey,
                //     {
                //         expiresIn: 31556926 // 1 year in seconds
                //     },
                //     (err, token) => {
                //         res.json({
                //             success: true,
                //             token: "Bearer " + token
                //         });
                //     }
                // );
                console.log(user._id)
                req.session.save(() => {
                    req.session.user_id = user._id;
                    req.session.logged_in = true;
                    res.status(200).json(user);
                });
                console.log(req.session.logged_in);

            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

// User log out route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// router.get('/:id/dashboard', (req, res) => {

//     if {
//        return 
//     } else (err) {
//         return res.status(500).json(err);
//     }
// });

module.exports = router;