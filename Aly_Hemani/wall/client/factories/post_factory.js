app.factory('postFactory', ['$http', '$cookies', function($http, $cookies){
	var factory = {};

	factory.index = function(callback){
		$http.get('/pull').then(function(res){
			callback(res);
		});
	}
	factory.post = function(newPost, callback){
		$http.post('/post', newPost).then(function(res){
			callback(res);
		})
	}
	factory.comment = function(newComment, callback){
		$http.post('/comment', newComment).then(function(res){
			callback(res);
		})
	}
	return factory;
}]);