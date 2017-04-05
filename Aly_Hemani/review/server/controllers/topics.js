var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');

module.exports = {
	index: function(req, res){
		Topic.find({}).populate('category').exec(function(err, topics){
			if(err){
				return res.json(err);
			}
			return res.json(topics);
		})
	},
	create: function(req, res){
		console.log('req.body: ', req.body);
		var topic = new Topic(req.body);
		topic.save(function(err, topic){
			if(err){
				return res.json(err);
			}
			User.findById(req.body.user_id).exec(function(err, user){
				if(err){
					return res.json(err);
				}
				if(!user){

				}
				user.topics.push(topic._id);
				user.save(function(err, user){
					if(err){
						return res.json(err);
					}
					return res.json(topic);
				})
			})
		})
	},
	show: function(req, res){
		Topic.findById(req.params.id).populate('posts').exec(function(err, doc){
			if(err){
				return res.json({
					"errors":{
						"message": "Topic not found"
					}
				})
			}
			if(doc){
				return res.json(doc);
			}
		})
	}
}