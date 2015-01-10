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

            $scope.register = function(userData) {
                authService.register(userData, function() {
                    notifyService.showInfo("Succesfully registered");
                    $location.path('/');
                }, function(error) {
                    notifyService.showError("User registration failed", error);
                });
            }
        }
    ]);