var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard',{
		templateUrl: 'partials/topics_index.html',
		controller: 'UsersController as UC'
	})
	.when('/topics/:id', {
		templateUrl: 'partials/show.html',
		controller: 'UsersController as UC'
	})
	.otherwise('/')
})