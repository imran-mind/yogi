'use strict';


var express = require('express'),
    app = express(),
    initializedMongo = require('app/models');

var http = require('http').Server(app);

http.on('error', function (err) {
    console.log('HTTP Error', err.message);
    console.log(err.stack);
});

app.use('/', require('app/routes')(app));

module.exports.start = function (host, port) {
    http.listen(port, host, function () {
        console.log('HTTP Server is ready now @ ', host, ':', port);
    });
};
