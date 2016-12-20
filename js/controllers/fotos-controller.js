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

	$scope.remover = function (foto) {
		$http.delete('v1/fotos/' + foto._id)
		.success(function (argument) {
			console.log('Foto ' + foto.titulo + ' foi removida com sucesso');
		})
		.error(function(erro) {
			/* Act on the event */
			console.error(erro);
			console.info('Não foi possível remover a foto ' + foto.titulo);
		});
	};

});
