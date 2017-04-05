var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	text: {
		type: String, 
		required: true,
		minlength: 5
	},
	author: {
		type: String
	},
	_post: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Post'
	},
}, {timestamps: true})

var Comment = mongoose.model('Comment', CommentSchema);