"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('minhasDiretivas', [])
.directive('meuPainel', [function () {
	// directive definition object
	var ddo = {};

	ddo.restrict = 'AE'; // A - attribute; E - Element

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meuPainel.html';
		

	return ddo;
}]).directive('minhaFoto', [function () {
	// directive definition object
	var ddo = {};

	ddo.restrict = 'AE'; // A - attribute; E - Element

	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/minhaFoto.html';
		

	return ddo;
}]).directive('meuBotaoPerigo', [function () {
	var ddo = {};

	ddo.restrict = 'E';

	ddo.scope = {
		nome: '@',
		acao: '&'
	};

	ddo.template = '<button data-ng-click="acao(foto)" class="btn btn-danger btn-block" title="{{ nome }}">{{ nome }}</button>';

	return ddo;
}]).directive('meuFocus', [function () {
	var ddo = {};

	ddo.restrict = "A";

	ddo.link = function (scope, element) {
		scope.$on('fotoCadastrada', function () {
			element[0].focus();
		});
	};

	return ddo;
}])