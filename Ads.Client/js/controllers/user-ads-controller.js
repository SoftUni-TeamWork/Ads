'use strict';
angular.module('adsApp.controllers', [])
    .controller('UserAdsController', [
        '$scope', '$location', 'userService', 'notifyService', 'pageSize', function ($scope, $location, userService, notifyService, pageSize) {
            $scope.$parent.pageTitle = 'My Ads';

            $scope.adsParams = {
                'startPage': 1,
                'pageSize': pageSize
            };

            $scope.reloadAds = function () {
                userService.getAds($scope.adsParams).$promise.then(
                    function (data) {
                        $scope.data = data;
                    },
                    function (err) {
                        notifyService.showError('Cannot load ads', err);
                    }
                );
            };

            $scope.reloadAds();

            $scope.deactivateAd = function (id) {
                userService.deactivateAdd(id).then(function () {
                    $scope.reloadAds();
                }, function(err) {
                    notifyService.showError('Cannot deactivate ad', err);
                });
            }
        }
    ]);