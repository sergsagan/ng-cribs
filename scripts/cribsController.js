/**
 * Created by martynuk on 06.02.16.
 */
"use strict";

angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory){

		$scope.cribs = cribsFactory.getCribs();
	});