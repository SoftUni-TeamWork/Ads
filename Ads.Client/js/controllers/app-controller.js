'use strict';
angular.module('adsApp.controllers', [])
    .controller('AppController', [
        '$scope', 'authService', function($scope, authService) {
            $scope.authService = authService;
            $scope.data = 'kor';
        }
    ]);