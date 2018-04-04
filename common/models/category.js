'use strict';


module.exports = function (Category) {


    Category.getCategoryInRange = function (accountId, from, to, cb) {



        Category.find({ where: { id: { between: [from, to] }, accountId: accountId } }, function (err, categories) {
            if (err) {
                console.log(err);
                return "";
            };


            cb(null, categories);
        });


    };


    Category.remoteMethod('getCategoryInRange', {


        accepts: [
            { arg: 'accountId', type: 'number' },
            { arg: 'from', type: 'number' },
            { arg: 'to', type: 'number' }],


        returns: { arg: 'body', type: 'string' },


        http: { path: '/getCategory', verb: 'get' }

    });


    Category.getTopCategory = function (accountId, top, cb) {


        Category.find({ limit: top, where: { accountId: accountId } }, function (err, categories) {
            if (err) {
                console.log(err);
                return "";
            };


            cb(null, categories);

        });

    };

    Category.remoteMethod('getTopCategory', {

        accepts: [
            { arg: 'accountId', type: 'number' },
            { arg: 'top', type: 'number' }
        ],


        returns: { arg: 'body', type: 'string' },


        http: { path: '/getTopCategory', verb: 'get' }


    });


    Category.searchTypehead = function (accountId, pattern, limit, cb) {

        var lcPattern = pattern.charAt(0).toLowerCase() + pattern.substr(1);
        var ucPattern = pattern.charAt(0).toUpperCase() + pattern.substr(1);

        Category.find({
            where: {
                or: [
                    { name: { like: lcPattern + '%' } },
                    { name: { like: ucPattern + '%' } },
                    { type: { like: lcPattern + '%' } },
                    { type: { like: ucPattern + '%' } }
                ],
                accountId: accountId
            }
        }, function (err, categories) {
            if (err) {
                console.log(err);
                return "";
            };


            cb(null, categories);

        });

    }


    Category.remoteMethod('searchTypehead', {

        accepts: [
            { arg: 'accountId', type: 'number' },
            { arg: 'pattern', type: 'string' },
            { arg: 'limit', type: 'number' }
        ],


        returns: { arg: 'body', type: 'string' },


        http: { path: '/searchTypeHead', verb: 'get' }


    });
};
