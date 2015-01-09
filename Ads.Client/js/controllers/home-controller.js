'use strict';

angular.module('adsApp.controllers', [])
    .controller('HomeController', [
        '$scope', 'adsService', 'notifyService', function ($scope, adsService, notifyService) {
            adsService.getAds(
                null,
                function success(data) {
                    $scope.data = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        }
    ]);