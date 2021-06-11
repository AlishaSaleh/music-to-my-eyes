// multiple api routes
const User = require("../../models/User");
const express = require('express');
const router = express.Router();
const { authCheck } = require('../../middleware/authCheck');
const { sanitiseUser } = require("../../utils/sanitiseUser");


router.get("/dashboard", authCheck, async (req, res) => {
    // console.log(req.headers);

    const user = await User.findById(req.user.id);
 
    res.json(sanitiseUser(user));

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

router.put("/addsongs/", authCheck, async (req, res) => {
    try {

         const songs = req.body
         console.log(songs);
        const songData = await User.findByIdAndUpdate(
            { _id: req.user.id },
            { $push: { top_songs: songs.song } }, // works with id e.g. '60b602cd2c09b7409853a947' <-- format
            { new: true }
        );

        if (!songData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        // console.log(req.params.id);
        return res.json(songData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;