var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	text: {
		type: String, 
		required: true,
		minlength: 5
	},
	author: {
		type: String,
		required: true
	},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

var Post = mongoose.model('Post', PostSchema);