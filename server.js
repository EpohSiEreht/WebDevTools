// Modules + Middleware
var express = require('express');
var app = express();

var morgan = require('morgan');  // Logging of requests
app.use(morgan('dev')); // Use dev version to see more detail

app.set('view engine', 'ejs');  // Use ejs templating engine

app.use(express.static('./public'));  // Set up default folder for static assets

var bodyParser = require('body-parser'); // Parses req.body
app.use(bodyParser.urlencoded( { extended: true } ));

var mongoPath = 'mongodb://locahost/resources';
var mongoose = require('mongoose');
mongoose.connect(mongoPath);

// Routing
app.get('/', function(req, res){
	res.render('index'); // Render the index.js file
});

var resourcesRouter = require('./routes/resources');
app.use('/api/resources', resourcesRouter);  // Set up url route for API

// Listening
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Successfully landed on port ' + port);
});