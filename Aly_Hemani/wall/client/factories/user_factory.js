app.factory('userFactory', ['$http', '$cookies', function($http, $cookies){
	var factory = {};
	factory.current_user = {};

	factory.create = function(newUser, callback){
		$http.post('/create', newUser).then(callback);
	}
	factory.login = function(loginUser, callback){
		$http.post('/login', loginUser).then(function(res){
			if(!res.data.errors){
				$cookies.put('user_id', res.data._id)
				factory.current_user = res.data;
				console.log(factory.current_user);
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
}])