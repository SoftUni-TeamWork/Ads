'use strict';
angular.module('adsApp.controllers', [])
    .controller('AppController', [
        '$scope', '$location', 'authService', 'notifyService', function ($scope, $location, authService, notifyService) {
            $scope.authService = authService;
            $scope.currentLocation = $location.path('/');
            $scope.logout = function() {
                authService.logout();
                notifyService.showInfo("Logout successful");
                $location.path('/');
            }
        }
    ]);