app.controller('PostController', ['$scope', 'userFactory', 'postFactory', '$routeParams', '$location', '$cookies', function($scope,userFactory,postFactory,$routeParams,$location,$cookies){
	var self= this;
	
	if(!userFactory.session()){
		$location.url('/')
	}
	else {
		this.current_user = userFactory.current_user
	}

	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/')
	}
	self.post = function(newPost){
		newPost.author = userFactory.current_user.first_name
		postFactory.post(newPost, function(res){
			self.posts = res.data
			self.index();
		})
	}
	self.index = function(){
		postFactory.index(function(res){
			self.posts = res.data
		})
	}
	self.comment = function(newComment, _post){
		newComment._post = _post
		newComment.author = userFactory.current_user.username
		postFactory.comment(newComment, function(res){
			self.comments = res.data
			self.index()
		})
	}
	this.index()
}])