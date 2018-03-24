
/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
var UserModel = require('app/dao/user');
var UserSchema = require('app/models/user');
var authHelper = require('app/helpers/auth');
var config = require('config');
var async = require('async');

var UserOperations = {
    register: register,
    login:login
}

function register(userInfo, callback) {
  console.log("<=====service/register=========>");
   var user = new UserSchema( userInfo );
   var condition ={
     username:userInfo.username
   }
   async.waterfall([
     function(firstCallback){
        UserModel.findUser(condition,firstCallback);
     },
     function(responseFirstCallback,secondCallback){
       if(responseFirstCallback){
         return callback(null,{message:"username already exist", userExist:true, statusCode:200});
       }else{
         UserModel.register(user, function (err, result) {
             if (err){
             console.log("<=====Error service/register=========>"+err);
                 return callback(err);
             }
             callback(null, { message: "success",  userExist:false, statusCode: 201 });
         });
       }
     }
   ]);
}

function login(userInfo, cb) {
  console.log("<=====service/login=========>");
   var user = new UserSchema( userInfo );
   async.waterfall([
           function (callback) {
               UserModel.login(userInfo, callback);
           },
           function (userDetails) {
               if (!userDetails) {
                   console.log("No User found", userDetails);
                   return cb(null, {statusCode: 200, found:false, message: "No user found"});
               }
               if (userDetails) {
                   console.log("<===User Found ==>",JSON.stringify(userDetails));
                   _generateAuthTokens(userDetails, function (err, result) {
                       if (err) {
                           console.log("<=====Error service/login=========>"+err);
                           cb({code: 500, error: err});
                       }
                       else if (result) {
                           console.log("<=====service/login=========>",JSON.stringify(userDetails));
                           return cb(null, {
                               statusCode: 200,
                               found:true,
                               message: "User Login Successfully",
                               access_token: result.token.access_token,
                               id :userDetails._id,
                               firstName:userDetails.firstName,
                               lastName:userDetails.lastName,
                               username : userDetails.username
                           });
                       }
                   });
               }
           }
       ]);
}


function _generateAuthTokens(user, callback) {
    console.log('<====generating auth token===>');
    authHelper.createJWT(user, function (err, accessToken) {
        if (err) {
            console.log('failed to create the jwt token', err);
            return callback({message: "failed to create jwt token"});
        }
        if (accessToken) {
            let generatedToken = {
                token: {
                    access_token: accessToken,
                    expiry: config.token.expiry
                }
            };
            callback(null, generatedToken);
        }
    });
}



module.exports = UserOperations;
