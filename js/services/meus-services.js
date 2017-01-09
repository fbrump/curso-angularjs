// public/js/services/meus-services.js
"use strict";

angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', ['$resource', function ($resource) {
	
	return $resource('v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	});
}])
.factory('cadastroDeFotos', ['recursoFoto', '$q', '$rootScope', function (recursoFoto, $q, $rootScope) {
	
	var servico = {};

	var evento = 'fotoCadastrada';

	servico.cadastrar = function (foto) {
		return $q(function (resolve, reject) {
			if (foto._id){
				
				recursoFoto.update({ fotoId: foto._id}, foto, function () {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
						inclusao: false
					});
				}, function (erro) {
					console.error(erro);
					reject({
						mensagem: 'Não foi possível alterar a foto ' + foto.titulo
					});
				});
			}else{

				recursoFoto.save(foto, function () {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
						inclusao: true
					})
				}, function (erro) {
					console.error(erro);
					reject({
						mensagem: 'Não foi possível incluir a foto + ' + foto.titulo
					});
				})

			}
		});
	};

	return servico;
}]);