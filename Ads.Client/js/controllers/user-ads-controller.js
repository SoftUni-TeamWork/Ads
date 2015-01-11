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
                    function success(data) {
                        $scope.data = data;
                    },
                    function error(err) {
                        notifyService.showError('Cannot load ads', err);
                    }
                );
            };

            $scope.reloadAds();

            //$scope.logout = function () {
            //    authService.logout();
            //    notifyService.showInfo("Logout successful");
            //    $location.path('/');
            //}
        }
    ]);