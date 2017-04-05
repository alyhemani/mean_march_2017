app.controller('UsersController',['UserFactory', '$location', '$routeParams', '$cookies', function(UserFactory, $location, $routeParams, $cookies){
	var self = this;
	self.users = [];
	self.errors = [];
	self.newUser = {};

	if(!UserFactory.session()){
		$location.url('/');
	};

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data;
		})
	}
	self.login = function(loginUser){
		UserFactory.loginUser(loginUser, function(res){
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
				self.errors.push(errors[key]['message']);
				}
			}
			else{

				$location.url('/success');
			}
		})
	}
	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/');

	}
	self.create = function(newUser){
		console.log(newUser);
		self.errors = [];
		UserFactory.create(newUser, function(res){
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			}
			else{
				$location.url('/success')
			}
		})
	}
	self.destroy = function(user){
		UserFactory.destroy(user, function(res){
			console.log(user)
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			}
			else{
				self.index();
				$location.url('/success')
			}
		});
	}

	self.show = function(){
		UserFactory.show($routeParams.id, function(res){
			self.user = res.data;
		})
	}

	self.show_redirect = function(id){
		$location.url('/users/show/' + id)
	}
	self.edit_redirect = function(id){
		$location.url('/users/edit/' + id)
	}
	self.edit = function(user){
		self.errors = [];
		console.log(user);
		console.log($routeParams.id);
		UserFactory.edit(user, $routeParams.id, function(res){
			if(res.data.errors){
				var errors = res.data.errors;
				for(key in errors){
					self.errors.push(errors[key]['message']);
				}
			}
			else{
				$location.url('/success')
			}
		})
	}
}])