module.exports = function () {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        apt_num: Number,
        _community: {type: mongoose.Schema.Types.ObjectId, ref:"CommunityModel"},
        isCashier: Boolean
    },{collection: "user"});

    return UserSchema;
};