/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */

//Import the mongoose module
var mongoose = require('mongoose');
var UserModel = require('./user');
var config = require('config');
var mongoDBURL = config.app.dbUrl;

 const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(mongoDBURL, options).then(
  () => {
    console.log("MongoDB connected successuflly...");
   },
  err => {
   console.log("MongoDB connected successuflly...");
 }
);
//Get the default connection
// var db = mongoose.connection;
//
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var models = {};
models.User = UserModel;
module.exports = models;
