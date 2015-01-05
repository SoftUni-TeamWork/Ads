'use strict';

angular.module('app.controllers')
    // Path: /
    .controller('HomeController', [
        '$scope', '$location', '$window', '$log', 'adsData', function($scope, $location, $window, $log, adsData) {
            $scope.$root.title = 'AngularJS SPA Template for Visual Studio';

            adsData.getAll().$promise.then(function(data) {
                $scope.data = data;
            }, function(error) {
                $log.error(error);
            });
        }
    ]);