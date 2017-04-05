var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
	post: function(req, res){
		var post = new Post(req.body);
		post.save(function(err, doc){
			if(err){
				return res.json(err);
			}
			else{
				console.log('Created post successfully')
				return res.json(doc);
			}
		})
	},
	pull: function(req, res){
		Post.find({}, function(err, post){
			if(err){
				res.json(err)
			}
			else{
				res.json(post)
			}
		}).populate("comments")
	},
	comment: function(req, res){
		var comment = new Comment(req.body);
		comment.save(function(err, doc){
			if(err){
				return res.json(err);
			}
			else{
				Post.findById(req.body._post).exec(function(err, post){
					if(err){
						res.json(err)
					}
					else{
						post.comments.push(comment);
						post.save(post)
						res.json(doc)
					}
				})
			}
		})
	}
}