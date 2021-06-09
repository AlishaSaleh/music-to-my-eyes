// multiple api routes
const User = require("../../models/User");
const express = require('express');
const router = express.Router();
const { authCheck } = require('../../middleware/authCheck');


router.get("/dashboard", authCheck, async (req, res) => {

    // console.log(req.user);

    const user = await User.findById(req.user.id);
    res.json({ user: user.name });
})


module.exports = router;