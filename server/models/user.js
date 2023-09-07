const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Assuming you will use bcrypt for hashing

const userSchema = new mongoose.Schema({
    username: { type: String, required:true },
    name: { type: String, required:true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function() {
            return this.authType === 'local'; // Only required for local authentication
        }
    },
    role: { type: String, required: true, enum: ['user', 'reviewer','editor','admin'] }, // New field
    authType: { type: String, required: true, enum: ['local', 'google'] }, // New field
}, 
{ collection: 'user-data' });

// Placeholder for password hashing (Please implement before actual use)
userSchema.pre('save', async function(next) {
    if (this.authType === 'local') {
        // Hash the password before saving
        // this.password = await bcrypt.hash(this.password, some_salt_value);
    }
    next();
});

const UserModel = mongoose.model('UserData', userSchema);

module.exports = UserModel;









// const mongoose = require("mongoose")

// const User = new mongoose.Schema({
//     name: { type:String, required: false},
//     email: {type:String, required: true, unique:true},
//     password: {type:String, required: true},
//     quote:{type:String}, 
// },

// {collection : 'user-data'}

// )

// const model = mongoose.model('UserData', User)

// module.exports = model
