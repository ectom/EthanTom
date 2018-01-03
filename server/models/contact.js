var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
	emailAddress: String,
	firstName: [String],
	lastName: [String],
	subject: [String],
    message: [String],
}, {timestamps: true });

mongoose.model('Contact', ContactSchema);
