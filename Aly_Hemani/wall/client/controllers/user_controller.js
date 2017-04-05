app.controller('UserController', ['$scope', 'userFactory', '$routeParams', '$location', '$cookies', function($scope, userFactory, $routeParams, $location, $cookies){
	var self = this;
	self.newUser = {};
	self.errors = [];

	if(!userFactory.session()){
		$location.url('/')
	}
	self.create = function(newUser){
		console.log(newUser);
		userFactory.create(newUser, function(res){
			if(res.data.errors){
				console.log('in the errors callback')
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			}
			else{
				console.log('did not get errors');
				$location.url('/dash');
			}
		})
	}
	self.login = function(loginUser){
		console.log(loginUser);
		userFactory.login(loginUser, function(res){
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			}
			else{
				$location.url('/dash');
			}
		})
	}
	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/')
	}
}])