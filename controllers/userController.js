const db = require('../models');

module.exports = {
    getUser: (req, res) => {
        if (req.user) {
            return res.json({ user: req.user });
        } else {
            return res.json({ user: null });
        }
    },
    signUp: (req, res) => {
        const { name, email, password, dob, gender, location, top_songs, image } = req.body;
        db.User.findOne({ 'email': email }, (err, emailMatch) => {
            if (emailMatch) {
                return res.json({
                    error: 'There is already an account with this email!'
                });
            }
            const newUser = new db.User({
                'name': name,
                'email': email,
                'password': password,
                'dob': dob,
                'gender': gender,
                'location': location,
                'top_songs': top_songs,
                'image': image
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                return res.json(savedUser);
            });
        });
    },
    login: (req, res) => {
        // login authentifaction here - may need middleware 
    },
    logout: (req, res) => {
        // logout route function - will need to end session?
    },
    delete: (req, res) => {
        // if option of deleting account is given
    }
}