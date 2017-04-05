var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	post: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true,
	},
	comments: [{
		type: mongoose.Schema.Types.Mixed,
		ref: 'Comment'
	}],
	likes: {
		type: Number,
		default: 0, 
		count: 0
	},
	dislikes: {
		type: Number,
		default: 0,
		count: 0
	}
}, {timestamps: true})

mongoose.model('Post', PostSchema)