// resume api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var jwt = require('jsonwebtoken');
var config = require('server/config');
var Resume = require('server/models/resume');

var api = express.Router();

// authentication block, 
// place api routes that do not need to be authenticated above this
api.use(function(req, res, next) {
    var token = req.body.token;
    if (token) {
        jwt.verify(token, config.server.secret, function(err, decoded) {
            if (err) {
                return res.json({
                    msg: 'you must register before uploading a resume...'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            msg: 'you must register before uploading a resume...'
        });
    }
});

api.post('/upload', function(req, res) {
    var newResume = new Resume({
        email: req.body.email,
        resume: JSON.stringify(req.body)
    });
    newResume.save(function(err) {
        if (err) {
            console.error(err);
            return res.json({
                msg: 'failed to upload resume...'
            });
        }
        return res.json({
            success: true,
            msg: 'resume upload successful'
        });
    });
});

module.exports = api;