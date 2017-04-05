app.factory('PostFactory', function($http){
	var factory = {};

	factory.create = function(newPost, callback){
		$http.post('/posts', newPost).then(callback);
	}
	factory.index = function(callback){
		$http.get('/posts').then(callback);
	}
	factory.like = function(id, callback){
		$http.put('/posts/' +id + '/like').then(callback);
	}
	factory.dislike = function(id, callback){
		$http.put('/posts/' + id+ '/dislike').then(callback);
	}
	factory.createComment = function(newComment, callback){
		console.log(newComment);
		$http.post('/comments', newComment).then(callback);
	}

	return factory;
})