// auth api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var User = require('server/models/user');
var jwt = require('jsonwebtoken');
var config = require('server/config');

var api = express.Router();

api.post('/register', function(req, res) { // takes in user details, save if email doesn't already exist
    var newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save(function(err) {
        if (err) {
            console.error(err);
            return res.json({
                msg: 'email already in use...'
            });
        }
        var token = jwt.sign({
            user: newUser.email
        }, config.server.secret, { // create token from secret and user
            expiresIn: 86400
        });
        return res.json({
            success: true,
            msg: 'registered user!',
            token: token,
            email: newUser.email
        });
    });
});

api.post('/login', function(req, res) { // takes in user credentials, throw err if user doesn't exist
    User.findOne({
            email: req.body.email,
            password: req.body.password
        },
        function(err, user) {
            if (err) {
                console.error(err);
                return res.json({
                    msg: 'error on login...'
                });
            }
            if (!user || !user.email || !user.password) {
                return res.json({
                    msg: 'check your email/password...'
                });
            }
            var token = jwt.sign({
                user: user.email
            }, config.server.secret, { // create token from secret and user
                expiresIn: 86400
            });
            return res.json({
                success: true,
                msg: 'logged in ' + user.email + '!',
                token: token,
                email: user.email
            });
        });
});

module.exports = api;