﻿'use strict';
angular.module('adsApp.controllers', [])
    .controller('AppController', [
        '$scope', '$location', 'authService', 'notifyService', function($scope, $location, authService, notifyService) {
            $scope.authService = authService;
            $scope.logout = function() {
                authService.logout();
                notifyService.showInfo("Logout successful");
                $location.path('/');
            }

            $scope.$on('$routeChangeSuccess', function() {
                $scope.currentLocation = $location.path();
            });
        }
    ]);