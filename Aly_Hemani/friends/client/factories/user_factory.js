app.factory('UserFactory',function($http, $cookies){
	var factory = {}

	factory.users = [];

	factory.index = function(callback){
		$http.get('/users').then(callback);
	};
	factory.create = function(newUser, callback){
		$http.post('/users', newUser).then(callback);
	}
	factory.destroy = function(user, callback){
		$http.delete('/users/destroy/' + user._id).then(callback);
	}
	factory.show = function(id, callback){
		$http.get('/users/show/' + id).then(callback);
	}
	factory.edit = function(user, id, callback){
		$http.post('/users/edit/' + id, user).then(callback);
	}
	factory.loginUser = function(loginUser, callback){
		$http.post('/sessions', loginUser).then(function(res){
			if(!res.data.errors){
				$cookies.put('user_id', res.data._id)
			}
			callback(res);
		});
	}
	factory.session = function(){
		if(!$cookies.get('user_id')){
			return false;
		}
		else{
			return true;
		}
	}
	return factory
})