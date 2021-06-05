const User = require("../../models/User");
const express = require('express');
const router = express.Router();
const { authCheck } = require('../../middleware/authCheck');


router.get("/", authCheck, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json({ user: user.name });
})


module.exports = router;
