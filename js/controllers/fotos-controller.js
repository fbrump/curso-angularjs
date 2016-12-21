"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('alurapic').controller('FotosController', function ($scope, $http, $resource) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	var recursoFoto = $resource('v1/fotos/:fotoId');

	recursoFoto.query(function (fotos) {
		$scope.fotos = fotos;
	}, function (erro) {
		console.error(erro);
	});

	$scope.remover = function (foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function (argument) {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function(erro) {
			/* Act on the event */
			console.error(erro);
			$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
		});
	};

});
