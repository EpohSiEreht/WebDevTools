//  Modules

// Object Document Mapper
var mongoose = require('mongoose');

// Schema

var ResourceSchema = mongoose.Schema({
	description: {type: String}
});

// Exports
module.exports = mongoose.model('Resource', ResourceSchema); // Create model 'Resource' and uuse ResourceSchema