/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
'use strict'; // Always keep it strict!

//To refer different modules irrespective of where we are.
require('rootpath')();
//Setting max listeners to infinite.
process.setMaxListeners(0);

var app = require('app'),
    config = require('config'),
    argh = require('argh').argv;

    // uncaught exception
process.on('uncaughtException', function (err) {
    console.error('uncaughtException:', err.message);
    console.error(err.stack);
});

var port = +argh.port || config.app.port, //PORT
    host = +argh.host || config.app.host; //HOST

if (process.env.NODE_ENV === 'production') {
    console.info('         **** PRODUCTION MODE ****       ');
} else {
    console.info('         **** DEVELOPMENT MODE ****       ');
}

app.start(host, config.app.port);
