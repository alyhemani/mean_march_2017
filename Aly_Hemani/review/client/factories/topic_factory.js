app.factory('TopicFactory', function($http){
	var factory = {};
	factory.current_topic = {};

	factory.index = function(callback){
		$http.get('/topics').then(callback);
	}
	factory.getCategories = function(callback){
		$http.get('/categories').then(callback);
	}
	factory.create = function(newTopic, callback){
		$http.post('/topics', newTopic).then(callback);
	}
	factory.show = function(id, callback){
		$http.get('/topics/' + id).then(callback);
	}

	return factory;
})