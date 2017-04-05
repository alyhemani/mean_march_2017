app.controller('TopicsController', function(TopicFactory, UserFactory, PostFactory, $routeParams, $location){
	console.log('instanciating TopicsController...')
	var self = this;
	self.topics = [];
	self.categories = [];
	self.topic = {};

	self.create = function(newTopic){
		newTopic.author = UserFactory.current_user.name;
		newTopic.user_id = UserFactory.current_user._id;
		TopicFactory.create(newTopic, function(res){
			self.index();
		})
	}
	self.index = function(){
		TopicFactory.index(function(res){
			self.topics = res.data;
			console.log(self.topics);
		})
	}
	self.getCategories = function(){
		TopicFactory.getCategories(function(res){
			self.categories = res.data;
		})
	}
	self.show = function(){
		TopicFactory.show($routeParams.id, function(res){
			self.topic = res.data;
		})
	}
	self.show_redirect = function(id){
		$location.url('/topics/' + id)
	}
	self.createPost = function(newPost, topic_id){
		newPost.author = UserFactory.current_user.name;
		newPost.user_id = UserFactory.current_user._id;
		newPost.topic_id = topic_id;
		console.log(newPost);
		PostFactory.create(newPost, function(res){
			self.show();
		})
	}
	self.like = function(id){
		PostFactory.like(id, function(res){
			self.show();
		})
	}
	self.dislike = function(id){
		PostFactory.dislike(id, function(res){
			self.show();
		})
	}
	self.createComment = function(newComment){
		console.log(newComment);
		PostFactory.createComment(newComment, function(res){
			self.show();
		})
	}
})