module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server.js")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    return api;
};