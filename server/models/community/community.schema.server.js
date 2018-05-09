module.exports = function () {
    var mongoose = require("mongoose");

    var CommunitySchema = mongoose.Schema({
        name: String,
        address: String,
        city: String,
        state: String,
        country: String,
        zip_code: Number
    },{collection: "community"});

    return CommunitySchema;
};