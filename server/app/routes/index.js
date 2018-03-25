
/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */
'use strict'
require('rootpath');
var express = require('express'),
    validate = require('express-validation'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    validate = require('express-validation'),
    userValidation = require('app/validation/user'),
    router = express.Router();

var userRoute= require('app/routes/user');


router.get('/test',function(req,res){
    res.status(200).json({message:"server is up :)"});
});

router.post('/yogi/register',validate(userValidation.login),userRoute.register);
router.post('/yogi/login', validate(userValidation.login),userRoute.login);
// router.get('/',userRoute.fetchUsers);

module.exports = function (app) {
    app
        .all('/*', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Authorization', true);
            res.header('Access-Control-Allow-Headers', 'Origin,Content-type,X-Requested-With,Accept,Authorization,X-Token');
            if (req.method == 'OPTIONS') {
                res.status(200).end();
            } else {
                next();
            }
        })
        .use(express.static(path.join(__dirname, '../../public')))
        //.all('/api/v1/*', [])
        //.use(express.static(path.join(__dirname, '/../../../')))
        .use(require('morgan')('combined', { "stream": logger.stream }))
        .use(bodyParser.json({ limit: '5mb' }))
        .use(express.static('apidoc'))
        .use(bodyParser.urlencoded({ extended: false })); // persistent login sessions
    return router;
}
