const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, async (req, res) => {
    console.log("REACHED");

    console.log(req.session)
    try {
        const userData = await User.findById(req.session.user_id)
        if (req.session.logged_in) {
            return res.status(404).json(userData);
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;