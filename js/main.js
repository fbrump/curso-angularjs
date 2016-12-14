"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		//controller: 'FotosController'
	});

}]);
