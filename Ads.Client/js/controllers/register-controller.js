'use strict';
angular.module('adsApp.controllers', [])
    .controller('RegisterController', [
        '$scope', '$location', 'authService', 'notifyService', 'townsService', function($scope, $location, authService, notifyService, townsService) {
            $scope.userData = { townId: null };

            townsService.getTowns(function(data) {
                $scope.towns = data;
            }, function() {
                notifyService.showError('Unable to load towns');
            });
        }
    ]);