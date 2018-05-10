module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var ExpenseSchema = require("./expense.schema.server.js")();
    var ExpenseModel = mongoose.model("ExpenseModel", ExpenseSchema);

    var api = {
        createExpense: createExpense,
        findExpenseById: findExpenseById,
        findExpensesByCommunityId: findExpensesByCommunityId,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    function createExpense(communityId,expense) {
        return ExpenseModel
            .create(expense)
            .then(
                function (expenseobj) {
                    return model
                        .CommunityModel
                        .findCommunityById(communityId)
                        .then(
                            function (communityobj) {
                                expenseobj._community = communityobj;
                                return expenseobj.save();
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

    function findExpenseById(expenseId) {
        return ExpenseModel.findById(expenseId);
    }

    function findExpensesByCommunityId(communityId) {
        return model
            .CommunityModel
            .findCommunityById(communityId)
            .then(
                function (communityobj) {
                    var query = ExpenseModel.find({'_community': communityobj})
                    query.exec(
                        function (error, expenses) {
                            if (error) {
                                return error;
                            }
                            return expenses;
                        }
                    )
                },
                function (error) {
                    return error;
                }
            );
    }

    function updateExpense(expenseId, expense) {
        return ExpenseModel
            .update(
                {
                    _id: expenseId
                },
                {
                    date: expense.date,
                    description: expense.description,
                    amount: expense.amount
                }
            );
    }

    function deleteExpense(expenseId) {
        return ExpenseModel
            .remove({_id: expenseId});
    }

    return api;


    return api;


    return api;
};