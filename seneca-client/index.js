#!/usr/bin/env node
'use strict';

const AMQP_URL = "192.168.99.1:5672"

const client = require('seneca')()
    .use('seneca-amqp-transport')
    .client({
        type: 'amqp',
        pin: 'cmd:salute',
        url: AMQP_URL
    });

setInterval(function() {
    client.act('cmd:salute', {
        name: 'World',
        max: 100,
        min: 25
    }, (err, res) => {
        if (err) {
            throw err;
        }
        console.log(res);
});
}, 2000);