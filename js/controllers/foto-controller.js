// public/js/controllers/foto-controller.js
"use strict";

angular.module('alurapic').controller('FotoController', ['$scope', '$http', function($scope, $http){
	
	$scope.foto = { };
	$scope.mensagem = '';

	$scope.submeter = function () {
		if ($scope.formulario.$valid){
			$http.post('v1/fotos', $scope.foto)
			.success(function () {
				$scope.foto = {};
				$scope.mensagem = 'Foto incluida com sucesso';
			})
			.error(function(e) {
				/* Act on the event */
				$scope.mensagem = 'Não foi possível incluir a foto';
				console.error(e);
			});
		}else{
			console.info('O formulário não está válido.');
		}
	};

}])
