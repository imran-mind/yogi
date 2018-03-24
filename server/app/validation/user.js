/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */

var Joi = require('joi');

module.exports.register = {
    options: {
        allowUnknownBody : true,
        flatten : true
    },
   body :{
       name: Joi.string().required(),
       age: Joi.string().optional(),
       email: Joi.string().email().required(), //email validation
       mobile: Joi.string().required(), //mobile validtion
       password: Joi.string().required(), //mobile validtion
   }
};

module.exports.login = {
    options: {
        allowUnknownBody : true,
        flatten : true
    },
    body :{
        username: Joi.string().required(),
        password: Joi.string().required()
    }
};
