'use strict';
console.log("Error404Controller");

angular.module('app.controllers')
    // Path: /error/404
    .controller('Error404Controller', [
        '$scope', '$location', '$window', function ($scope, $location, $window) {
            $scope.$root.title = 'Error 404: Page Not Found';
        }
    ]);