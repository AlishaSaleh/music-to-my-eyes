const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    },
    orientation: {
        type: String
    },
    location: {
        type: String
    },
    top_songs: [
        {
            type: String,
        },
    ],
    image: {
        type: String,
        default: 'https://commons.wikimedia.org/wiki/File:Profile_avatar_placeholder_large.png'
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    matches: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
