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
                userService.deactivateAd(id).then(function () {
                    $scope.reloadAds();
                }, function(err) {
                    notifyService.showError('Cannot deactivate ad', err);
                });
            }

            $scope.publishAgainAd = function (id) {
                userService.publishAgainAd(id).then(function() {
                    $scope.reloadAds();
                }, function(err) {
                    notifyService.showError('Cannot publish ad', err);
                });
            }

            $scope.deleteAd = function(id) {
                userService.deleteAd(id).then(function () {
                    if ($scope.data.ads.length <= 1 && $scope.adsParams.startPage > 1) {
                        $scope.adsParams.startPage--;
                    }

                    $scope.reloadAds();
                }, function(err) {
                    notifyService.showError('Cannot delete ad', err);
                });
            }
        }
    ]);