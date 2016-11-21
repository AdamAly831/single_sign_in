var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'loginController',
				templateUrl: "partials/users/login.html"
			})
			.when("/users/new",
			{
				controller: 'mainController',
				templateUrl: "partials/users/main.html"
			})
			.otherwise('/',
			{
				controller: 'loginController',
				templateUrl: "partials/users/login.html"
			})
	})
}());