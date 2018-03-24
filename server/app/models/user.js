/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
//Require Mongoose
var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var UserModel = new Schema({
    firstName:String,
    lastName:String,
    username: String,
    password: String
});

// Compile model from schema
var UserModel = mongoose.model('UserModel', UserModel);
module.exports = UserModel;
