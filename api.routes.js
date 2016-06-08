// api routes ===================
// restful api routes for any backend calls
// front end does not connect to mongo libraries, therefore api routes needed
var path 	    = require('path');
var User		= require(path.join(__dirname + '/app/models/user'));
var Resume 		= require(path.join(__dirname + '/app/models/resume'));
module.exports = function(app) {
	app.get('/', function(req, res) { // basic route to display landing
	  res.sendFile(path.join(__dirname + '/app/index.html'));
	});

	app.post('/api/user/register', function(req, res) { // takes in user details, save if email doesn't already exist
		var newUser = new User({
			email      	: req.body.email,
			password 	: req.body.password
		});
		newUser.save(function(err) {
			if (err) {
				console.error(err);
				return res.json({success: false, msg: 'Email already in use...'});
			}
			return res.json({success: true, msg: 'Successful registered user!'});
		});
    });

    app.post('/api/user/login', function(req, res) { // takes in user credentials, throw err if user doesn't exist
		User.findOne({
			email: req.body.email,
		    password: req.body.password
		}, 
		function(err, user){
			if (err) {
				console.error(err);
				return res.json({success: false, msg: 'Error on login...'});
			} 
			if (!user || !user.email || !user.password) {
				return res.json({success: false, msg: 'Check your email/password...'});
			}
			return res.json({success: true, msg: 'Logged in ' + user.email +'!'});
		});
    });

    app.post('/api/resume/upload', function(req, res) { // takes in user credentials, throw err if user doesn't exist
		var newResume = new Resume({
			email		: req.body.email,
			resume	    : JSON.stringify(req.body)
		}); 
		newResume.save(function(err) {
			if (err) {
				console.error(err);
				return res.json({success: false, msg: 'Failed to upload resume...'});
			}
			return res.json({success: true, msg: 'Resume upload successful'});
		});
    });
};