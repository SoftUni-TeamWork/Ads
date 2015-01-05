'use strict';

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', [
        '$scope', '$location', '$window', 'adsData', function ($scope, $location, $window, adsData) {
            $scope.$root.title = 'AngularJS SPA Template for Visual Studio';

            adsData.getAll().$promise.then(function (data) {
                debugger;
                $scope.data = data;
            }, function(error) {
                console.error(error);
            });
        }
    ])

    // Path: /about
    .controller('AboutCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | About';
        }
    ])

    // Path: /login
    .controller('LoginCtrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'AngularJS SPA | Sign In';
            // TODO: Authorize a user
            $scope.login = function() {
                $location.path('/');
                return false;
            };
        }
    ])

    // Path: /error/404
    .controller('Error404Ctrl', [
        '$scope', '$location', '$window', function($scope, $location, $window) {
            $scope.$root.title = 'Error 404: Page Not Found';
        }
    ]);