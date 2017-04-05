var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 3,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	topics: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Topic'
	}],
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}],
	comments: {
		type: Number,
		default: 0
	}
}, {timestamps: true})

mongoose.model('User', UserSchema);
