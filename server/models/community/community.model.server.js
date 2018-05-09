module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var CommunitySchema = require("./community.schema.server.js")();
    var CommunityModel = mongoose.model("CommunityModel", CommunitySchema);

    var api = {
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    return api;
};