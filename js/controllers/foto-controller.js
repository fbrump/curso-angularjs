// public/js/controllers/foto-controller.js
"use strict";

angular.module('alurapic').controller('FotoController', ['$scope', '$http', '$resource', '$routeParams', 
	function($scope, $http, $resource, $routeParams){
	
	$scope.foto = { };
	$scope.mensagem = '';

	var recursoFoto = $resource('v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	});

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
				recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, function () {
					$scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
				}, function (erro) {
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
