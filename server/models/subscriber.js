const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    subscriber: {
        type: String,
        required: true,
        unique: true
    },
});
module.exports = mongoose.model('Subscriber', subscriberSchema);
