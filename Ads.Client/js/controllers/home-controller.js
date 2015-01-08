'use strict';

angular.module('adsApp.controllers', [])
    .controller('HomeController', [
        '$scope', function ($scope, authService) {
            $scope.authService = authService;
        }
    ]);