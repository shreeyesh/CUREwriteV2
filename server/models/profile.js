const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: 'name'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    volume: {
        type: Number,
        default: 0
    },
    papersSold: {
        type: Number,
        default: 0
    },
    followers: {
        type: Number,
        default: 0
    },
    bio: {
        type: String,
        default: 'Researcher at CUREwrite '
    },
    licenseNumber: {
        type: String,
        default: 'License',
        required: false
    },
    profilePicture: {
        type: [String],  // this could be a URL to the image if you're storing images elsewhere
        default: ['https://storage.googleapis.com/cw-uploads/pfp-placeholder.png']
    },
    coverPicture: {
        type: [String],  // same as profilePicture
        default: ['']
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'  // assuming you have a model named 'Post' for user posts
    }]
});

module.exports = mongoose.model('Profile', ProfileSchema);
