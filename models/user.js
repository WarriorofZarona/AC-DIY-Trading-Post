const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({

    //For Google Auth
    googleId: String,

    //Username of user, should match the AC name
    name: {
        type: String,
        required: true
    },
    //Island of user
    island: {
        type: String,
        required: true
    },
    //Email used to log in
    email: {
        type: String,
        required: true
    },
    //Password
    password: {
        type: Schema.Types.Mixed,
        default: "password"
    },
    //Offerings
    offerings: Schema.Types.ObjectId,
    //Wishlist
    wishlist: Schema.Types.ObjectId

});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});


const User = mongoose.model("User", userSchema);

module.exports = User;
