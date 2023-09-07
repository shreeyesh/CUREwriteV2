const { url } = require("inspector");
const mongoose = require("mongoose");
const path = require("path");

const postSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true
    },
    abstract: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: false
    },
    pdf: {
        type: [String],
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userPfp: {
        type: [String],  // same as profilePicture
        default: ['https://storage.googleapis.com/cw-uploads/pfp-placeholder.png']
    },
    category: {
        type: String,
        required: true
    },
    Buyers: {
        type: [String]
    },
    review: {
        type: String,
        enum: ['Reviewed','forReview','unReviewed'],
        default: 'unReviewed'
    },
    type: {
        type: String,
        enum: ['verified', 'unverified'],
        default: 'unverified'
    }
});

module.exports = mongoose.model("Post", postSchema);
