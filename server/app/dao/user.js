
/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
var User = require('app/models').User;
// var Employee = mongoose.model("Employee");


var UserOperations = {
    register: register,
    login: login,
    findUser:findUser
}

function register(user, callback) {
    console.log("<=====dao/register=========>");
    user.save(function (err) {
        if (err) {
            console.error("<======Error in register user======>"+err);
            return callback(err);
        }
        callback(null, 'result');
    });
}
function findUser(user,callback){
  console.log("<=====dao/findUser===========>"+JSON.stringify(user));
  User.findOne(user,function(err,result){
    if(err){
      console.error("<======Error in login user=====>"+err);
      return callback(err);
    }
    callback(null,result);
  })
}

function login(user,callback){
  console.log("<=====dao/login===========>"+JSON.stringify(user));
  User.findOne({username:user.username,password:user.password},function(err,result){
    if(err){
      console.error("<======Error in login user=====>"+err);
      return callback(err);
    }
    callback(null,result);
  })
}


module.exports = UserOperations;
