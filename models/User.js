const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require('validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
        // THREE OPTIONS FOR VALIDATION ->
        // 1: validate with validator package
        //         validate: [validator.isEmail, 'invalid email'] 
        // 2: use a regex validator 
        //         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        // 3: or validate on front-end only
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    top_songs: {
        type: [String],
        required: true,
        maxItems: 3
    },
    image: {
        type: String,
        required: true
    },
    matches: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User', // does this work?
        },
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
