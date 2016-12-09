"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('alurapic').controller('FotosController', function ($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';

	var promise = $http.get('v1/fotos')
	.success(function (fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.error(erro);
	});

});
