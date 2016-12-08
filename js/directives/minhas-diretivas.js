"use strict"; // reference: http://www.w3schools.com/js/js_strict.asp

angular.module('minhasDiretivas', [])
.directive('meuPainel', function () {
	// directive difinition object
	var ddo = {};

	ddo.restrict = 'AE' // A - attribute; E - Element

	ddo.scope = {
		titlo: '@'
	};

	ddo.template = 
			'<div data-ng-repeat="foto in fotos" class="panel panel-default">'
        +	'    <div class="panel-heading">'
        +	'        <h3 class="panel-title">{{ titulo }}</h3>'
        +	'    </div>'
        +	'    <div class="panel-body">'
        +	'    </div>'
        +	'</div>'

	return ddo;
});