var app = angular.module('myApp', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'UserController as UC'
	})
	.when('/dash', {
		templateUrl: 'partials/dash.html',
		controller: 'PostController as PC'
	})
	.otherwise('/')
})