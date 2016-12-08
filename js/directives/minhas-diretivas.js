"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('minhasDiretivas', [])
.directive('meuPainel', function () {
	// directive difinition object
	var ddo = {};

	ddo.restrict = 'AE' // A - attribute; E - Element

	return ddo;
});