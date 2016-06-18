// messages api ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var express = require('express'); // modules 
var Message = require('server/models/message');

var api = express.Router();

api.post('/save', function(req, res) { // add user message to db
    var message = new Message({
        name: req.body.name,
        email: req.body.email,
        message: JSON.stringify(req.body.message)
    });

    message.save(function(err) {
        if (err) {
            console.error(err);
            return res.json({
                msg: 'failed to send message...'
            });
        } else {
            return res.json({
                success: true,
                msg: 'message sent successfully!'
            });
        }
    });
});

module.exports = api;