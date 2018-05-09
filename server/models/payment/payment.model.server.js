module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var PaymentSchema = require("./payment.schema.server.js")();
    var PaymentModel = mongoose.model("PaymentModel", PaymentSchema);

    var api = {
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    return api;
};