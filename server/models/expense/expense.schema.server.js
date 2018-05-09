module.exports = function () {
    var mongoose = require("mongoose");

    var ExpenseSchema = mongoose.Schema({
        _community: {type: mongoose.Schema.Types.ObjectId, ref:"CommunityModel"},
        date: Date,
        description: String,
        amount: Number
    },{collection: "expense"});

    return ExpenseSchema;
};