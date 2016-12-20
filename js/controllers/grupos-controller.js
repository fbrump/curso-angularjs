// public/js/controllers/grupos-controller.js
"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('alurapic').controller('GruposController', 
	['$scope', '$http', 
	function ($scope, $http) {

	$scope.grupos = [];

	$http.get('v1/grupos')
	.success(function (grupos) {
		$scope.grupos = grupos;
	})
	.error(function(error) {
		console.error(erro);
	});

}]);
