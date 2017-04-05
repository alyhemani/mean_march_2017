var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
	.when('/users/new', {
		templateUrl: 'partials/users_new.html',
		controller: 'UsersController as UC'
	})
	.when('/users/show/:id',{
		templateUrl: 'partials/show.html',
		controller: 'UsersController as UC'
	})
	.when('/users/edit/:id',{
		templateUrl: 'partials/edit.html',
		controller: 'UsersController as UC'
	})
	.when('/success', {
		templateUrl: 'partials/users_index.html',
		controller: 'UsersController as UC'
	})
})

