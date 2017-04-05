var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	topic_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topic'
	},
	post_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}
}, {timestamps: true})