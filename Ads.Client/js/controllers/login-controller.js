'use strict';
angular.module('adsApp.controllers', [])
    .controller('LoginController', [
        '$scope', '$location', 'authService', 'notifyService', function ($scope, $location, authService, notifyService) {
            $scope.$parent.pageTitle = 'Login';

            $scope.login = function(userData) {
                authService.login(userData, function() {
                    notifyService.showInfo("Login successfull");
                        $location.path('/');
                    },
                    function(error) {
                        notifyService.showError(error['error_description']);
                    });
            }
        }
    ]);