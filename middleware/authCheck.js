const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const { sanitiseUser } = require('../utils/sanitiseUser');

module.exports.authCheck = async (req, res, next) => {
    try {
        // Check headers for "Authorization"
        const authorization = req.header('Authorization');
        if (!authorization)
            return res.status(400).json({
                success: false,
                payload: {
                    message: `Bearer token not provided in "Authorization" header`,
                },
            });
        const [type, token] = authorization.split(' ');
        if (type !== 'Bearer')
            return res.status(400).json({
                success: false,
                payload: { message: `Invalid token type, must be "Bearer"` },
            });
        if (!token)
            return res.status(400).json({
                success: false,
                payload: { message: `You must provide a token with a type of "Bearer"` },
            });
        const decoded = jsonwebtoken.verify(token, config.secret);
        const foundUser = await User.findById(decoded.id);
        if (!foundUser) return res.status(404).json({ success: false, payload: { message: 'The user for this token no longer exists' } });
        req.user = sanitiseUser(foundUser);
        next();
    } catch (error) {
        if (error instanceof jsonwebtoken.JsonWebTokenError) {
            return res.status(401).json({ success: false, payload: { message: 'Token has expired or is invalid' } });
        }
        console.error('ERROR - authCheck.js - authCheck():', error);
        res
            .status(500)
            .json({ success: false, payload: { message: 'Internal server error' } });
    }
};