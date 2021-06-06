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
            orientation: newUser.orientation
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

router.get("/test", authCheck, (req, res) => {
    res.json({ message: "authenticated!" })
})

// router.get("/dashboard", authCheck, async (req, res) => {
//     const user = await User.findById(req.user.id);
//     res.json({ user: user.name });
// })


// User log out route
// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

module.exports = router;