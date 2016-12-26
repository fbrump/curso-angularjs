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
.factory('cadastroDeFotos', ['recursoFoto', '$q', function (recursoFoto, $q) {
	
	var servico = {};

	servico.cadastrar = function (foto) {
		return $q(function (resolve, reject) {
			if (foto._id){
				
				recursoFoto.update({ fotoId: foto._id}, foto, function () {
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