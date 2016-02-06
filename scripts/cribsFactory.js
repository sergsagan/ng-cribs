/**
 * Created by martynuk on 06.02.16.
 */
"use strict";

angular
	.module('ngCribs')
	.factory('cribsFactory', function($http){

		function getCribs() {
			return $http.get('data/data.json');
		}

		return {
			getCribs: getCribs
		}
	});