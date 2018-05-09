module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var ExpenseSchema = require("./expense.schema.server.js")();
    var ExpenseModel = mongoose.model("ExpenseModel", ExpenseSchema);

    var api = {
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    return api;
};