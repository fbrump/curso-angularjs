// public/js/controllers/foto-controller.js
"use strict";

angular.module('alurapic').controller('FotoController', ['$scope', '$http', '$routeParams', 
	function($scope, $http, $routeParams){
	
	$scope.foto = { };
	$scope.mensagem = '';

	if($routeParams.fotoId){
		console.log($routeParams.fotoId);
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function (foto) {
			console.log(foto)
			$scope.foto = foto;
		})
		.error(function(erro) {
			/* Act on the event */
			console.error(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}

	$scope.submeter = function () {
		if ($scope.formulario.$valid){
			if ($scope.foto._id){
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function () {
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
				})
				.error(function(erro) {
					/* Act on the event */
					console.error(erro);
					$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
				});

			}else{
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

			}
		}else{
			console.info('O formulário não está válido.');
		}
	};

}])
