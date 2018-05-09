module.exports = function(app) {
    var model = require("./models/models.server")();

    require("./services/user.service.server.js")(app, model);
    require("./services/community.service.server")(app, model);
    require("./services/expense.service.server")(app, model);
    require("./services/payment.service.server")(app, model);
};