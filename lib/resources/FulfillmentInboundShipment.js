'use strict';

var AmazonMwsResource = require('../AmazonMwsResource');
var amazonMwsMethod = AmazonMwsResource.method;

module.exports = AmazonMwsResource.extend({

    path: 'FulfillmentInboundShipment',
    search: amazonMwsMethod({
        method: 'GET'
    })

});
