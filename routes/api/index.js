// multiple api routes
const User = require("../../models/User");
const express = require('express');
const router = express.Router();
const { authCheck } = require('../../middleware/authCheck');
const { sanitiseUser } = require("../../utils/sanitiseUser");


router.get("/dashboard", authCheck, async (req, res) => {
    // console.log(req.headers);

    const user = await User.findById(req.user.id);
 
    res.json({ user: user.name });

});

router.get("/matches", authCheck, async (req, res) => {
    try {
        const userData = await User.find({});

        // remove password before returning
        const sanUsers = userData.map(users => {
           return sanitiseUser(users);
        });
        

        // console.log(sanUsers)

        // need to remove this user from data - client or serverside?
        // findOne (the currently logged in user) - exclude from the find()
        return res.json({ users: sanUsers, loggedUser: req.user.id })
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;