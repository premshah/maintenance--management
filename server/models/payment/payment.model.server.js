module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var PaymentSchema = require("./payment.schema.server.js")();
    var PaymentModel = mongoose.model("PaymentModel", PaymentSchema);

    var api = {
        createPayment: createPayment,
        findPaymentById: findPaymentById,
        updatePayment: updatePayment,
        deletePayment: deletePayment,
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    function createPayment(userId,payment) {
        return PaymentModel
            .create(payment)
            .then(
                function (paymentobj) {
                    return model
                        .UserModel
                        .findUserById(userId)
                        .then(
                            function (userobj) {
                                paymentobj._user = userobj;
                                return paymentobj.save();
                            },
                            function (error) {
                                return error;
                            }
                        );
                },
                function (error) {
                    return error;
                }
            );
    }

    function findPaymentById(paymentId) {
        return PaymentModel.findById(paymentId);
    }

    function updatePayment(paymentId, payment) {
        return PaymentModel
            .update(
                {
                    _id: paymentId
                },
                {
                    month: payment.month,
                    year: payment.year,
                    amount: payment.amount,
                    isPaid: payment.isPaid
                }
            );
    }

    function deletePayment(paymentId) {
        return PaymentModel
            .remove({_id: paymentId});
    }

    return api;


    return api;

    return api;
};