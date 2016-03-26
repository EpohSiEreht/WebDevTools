// Modules
var express = require('express');
var router = express.Router();
var Resource = require('../models/resource');

// Routing
router.get('/', function(req, res){
	Resource.find({}, function(err, dbResources){    // Get them all
		res.json( {dreams: dbResources} );
	});
});

router.post('/', function(req, res){
	var resourceData = req.body.resource; // body needs to be parsed with body-parser
	var resource = new Resource(resourceData);
	resource.save(function(err, dbResource){  // Save, if no error, response with json data
		if(err){
			console.log('error');
		}
		res.json( dbResource );
	});
});

// Exports
module.exports = router;