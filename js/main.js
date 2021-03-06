"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoController'
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' })

}]);
