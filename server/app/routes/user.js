
/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
require('rootpath');
var UserService = require('app/service/user');

var UserOperations = {
    register: register,
    login:login
}

function register(req, res) {
    console.log("<=====routes/register=======>");
    UserService.register(req.body, function (err, result) {
        if (err) {
          console.error("<=====Error routes/register=======>"+err);
            return res.status(500).json(err);
        }
        res.status(201).json(result);
    });
}

function login(req, res) {
  console.log("<=====routes/login=======>");
    UserService.login(req.body, function (err, result) {
        if (err) {
          console.error("<=====Error routes/login=======>"+err);
            return res.status(500).json(err);
        }
        res.status(200).json(result);
    });
}

module.exports = UserOperations;
