angular.module('noteApp',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/pages/notes/index.html'
			})
			.when('/notes',{
				templateUrl: 'templates/pages/notes/index.html'
			})
			.when('/users',{
				templateUrl: 'templates/pages/users/index.html'
			})
			.otherwise({redirectTo: '/'});
	}]);