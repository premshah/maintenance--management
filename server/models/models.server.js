module.exports = function () {
    var mongoose = require('mongoose');

    var connectionString = 'mongodb://localhost/web-spring-2017';
    if(process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }

    mongoose.connect(connectionString);


    var UserModel = require("./user/user.model.server")();
    var PaymentModel = require("./payment/payment.model.server")();
    var ExpenseModel = require("./expense/expense.model.server")();
    var CommunityModel = require("./community/community.model.server")();

    var model = {
        UserModel: UserModel,
        PaymentModel: PaymentModel,
        ExpenseModel: ExpenseModel,
        CommunityModel: CommunityModel
    };

    UserModel.setModel(model);
    PaymentModel.setModel(model);
    ExpenseModel.setModel(model);
    CommunityModel.setModel(model);

    return model;
}