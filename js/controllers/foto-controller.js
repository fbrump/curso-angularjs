// public/js/controllers/foto-controller.js
"use strict";

angular.module('alurapic').controller('FotoController', ['$scope', 'cadastroDeFotos', 'recursoFoto', '$routeParams', 
	function($scope, cadastroDeFotos, recursoFoto, $routeParams){
	
	$scope.foto = { };
	$scope.mensagem = '';

	if($routeParams.fotoId){
		console.log($routeParams.fotoId);
		recursoFoto.get({ fotoId:$routeParams.fotoId }, function (foto) {
			console.log(foto)
			$scope.foto = foto;
		}, function (erro) {
			console.error(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}

	$scope.submeter = function () {
		if ($scope.formulario.$valid){
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function (dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.foto = {}
				$scope.focado = true;
			})
			.catch(function (dados) {
				$scope.mensagem = dados.mensagem;
			})
		}else{
			console.info('O formulário não está válido.');
		}
	};

}])
