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

	ddo.templateUrl = 'js/directives/meuPainel.html';
		

	return ddo;
}])
