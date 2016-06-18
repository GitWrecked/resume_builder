// server ===================
// node server with express routing implementation
// used to specify configs, static files, routes, etc.
require('rootpath')();
var express = require('express'); // modules 
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var project = require('package');
var config = require('server/config');
var morgan = require('morgan');

var static = __dirname.replace('server', 'client');

mongoose.connect(process.env.MONGOLAB_URI || config.db.url); // connect to mongo lab if server config var exists
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to db successfully'); //: ' + mongoURI);
});

app.use(morgan('dev'));
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request.
app.use(express.static(static)); // set the static files location 

app.get('/', function(req, res) { // basic route to display landing
    res.sendFile(path.join(static, 'src/index.html'));
});
app.use('/api/auth', require('server/apis/auth.api')); //configure app routes for api calls
app.use('/api/message', require('server/apis/message.api'));
app.use('/api/resume', require('server/apis/resume.api')); // authenticated routes

var port = process.env.PORT || config.server.listenPort; // set our port
app.listen(port); // start app 	
console.log('view in browser at http://localhost:' + port); // inform user


exports = module.exports = app; // expose app