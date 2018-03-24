/**
 * @author: Imran Shaikh
 * @email: shaikhimran115@gmail.com
 * @Created:  23 Mar 2018
 */

require('rootpath')();
var  moment = require('moment'),
    config = require('config'),
    jwt = require('jwt-simple');


var auth = {
    ensureAuthenticated: function (req, res, next) {
        debug("header details", req.headers);
        if (!req.headers.authorization) {
            console.log('auth ---> token not present');
            return res.status(401).send({
                code: 401, message: 'Please make sure your request has an Authorization header',
                status: 'failed', reason: 'Invalid Auth header'
            });
        }
        var tokenDetail;
        if (tokenDetail = req.headers.authorization.split(' ').length !== 2) {
            console.log('Invalid token --->');
            return res.status(401).json({
                code: 401,
                message: ' Invalid token',
                status: 'failed',
                reason: 'Invalid token'
            });
        }
        auth.decodeToken(req.headers.authorization, function (err, payload) {
            if (err) {
                console.log('Invalid token --->', err);
                return res.status(401).json({
                    code: 401, message: '=>Invalid token',
                    status: 'failed', reason: 'Invalid token'
                });
            }
            console.log(">>> req.application and payload", payload);
            req.userInfo = payload;
            return next();
        });
    },

    decodeToken: function (authorization, callback) {
        var token = authorization.split(' ')[1];
        try {
            var payload = jwt.decode(token, config.token.secret);
            callback(null, payload);
        } catch (err) {
            callback({message: err.message});
        }
    },

    createJWT: function (user, callback) {
        var payload = {
            user_id: user._id,
            username: user.username,
            iat: moment().unix(),
            exp: moment().add(config.token.expiry, 'seconds').unix()
        };
        console.log('--->JWT Payload - ', payload);
        try {
            var token = jwt.encode(payload, "585b82tehfrocesecret66e0e451");
            return callback(null, token);
        } catch (err) {
            console.log("=-======> err "+err);
            console.log('--->Failed to generate encoded access token.');
            return callback({message: err.message});
        }
    }
};

module.exports = auth;
