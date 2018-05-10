module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var CommunitySchema = require("./community.schema.server.js")();
    var CommunityModel = mongoose.model("CommunityModel", CommunitySchema);

    var api = {
        createCommunity: createCommunity,
        findCommunityById: findCommunityById,
        findCommunitiesByCityAndState: findCommunitiesByCityAndState,
        updateCommunity: updateCommunity,
        deleteCommunity: deleteCommunity,
        setModel: setModel
    };

    function setModel(_model) {
        model = _model;
    }

    function createCommunity(community) {
        return CommunityModel.create(community);
    }

    function findCommunityById(communityId) {
        return CommunityModel.findById(communityId);
    }

    function findCommunitiesByCityAndState(city,state) {
        var query = CommunityModel.find({'city': city, 'state': state})
        query.exec(
            function (error, communities) {
                if (error) {
                    return error;
                }
                return communities;
            }
        )
    }

    function updateCommunity(communityId, community) {
        return CommunityModel
            .update(
                {
                    _id: communityId
                },
                {
                    name: community.name,
                    address: community.address,
                    city: community.city,
                    state: community.state,
                    country: community.country,
                    zip_code: community.zip_code
                }
            );
    }

    function deleteCommunity(communityId) {
        return CommunityModel
            .remove({_id: communityId});
    }

    return api;
};