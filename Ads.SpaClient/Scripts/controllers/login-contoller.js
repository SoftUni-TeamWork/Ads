'use strict';

angular.module('app.controllers', [])
    // Path: /error/404
    .controller('LoginController', [
        '$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | Sign In';
            // TODO: Authorize a user
            $scope.login = function () {
                $location.path('/');
                return false;
            };
        }
    ]);