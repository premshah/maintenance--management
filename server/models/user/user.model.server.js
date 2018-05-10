module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server.js")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findExpensesByUserId: findExpensesByUserId,
        updateUser: updateUser,
        deleteUser: deleteUser,
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    function createUser(communityId,user) {
        return UserModel
            .create(user)
            .then(
                function (userobj) {
                    return model
                        .CommunityModel
                        .findCommunityById(communityId)
                        .then(
                            function (communityobj) {
                                userobj._community = communityobj;
                                return userobj.save();
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

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function findExpensesByUserId(userId) {
        return UserModel
            .findUserById(userId)
            .then(
                function (userobj) {
                   return model
                       .ExpenseModel
                       .findExpensesByCommunityId(userobj._community._id);
                },
                function (error) {
                    return error;
                }
            );
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {
                    _id: userId
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    apt_num: user.apt_num
                }
            );
    }

    function deleteUser(userId) {
        return UserModel
            .remove({_id: userId});
    }

    return api;


    return api;
};