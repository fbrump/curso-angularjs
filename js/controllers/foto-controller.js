// public/js/controllers/foto-controller.js
"use strict";

angular.module('alurapic').controller('FotoController', ['$scope', function($scope){
	
	$scope.foto = { };

	$scope.submeter = function () {
		console.log($scope.foto);
	};

}])
