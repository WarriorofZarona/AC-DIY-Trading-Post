const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    password: Schema.Types.Mixed,
    //Offerings
    offerings: Schema.Types.ObjectId,
    //Wishlist
    wishlist: Schema.Types.ObjectId

});

const User = mongoose.model("User", userSchema);

module.exports = User;
