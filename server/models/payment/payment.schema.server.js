module.exports = function () {
    var mongoose = require("mongoose");

    var PaymentSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
        month: Number,
        year: Number,
        amount: Number,
        isPaid: Boolean
    },{collection: "payment"});

    return PaymentSchema;
};