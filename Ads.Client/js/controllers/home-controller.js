'use strict';

angular.module('adsApp.controllers', [])
    .controller('HomeController', [
        '$scope', 'adsService', 'notifyService', 'pageSize', function($scope, adsService, notifyService, pageSize) {
            $scope.adsParams = {
                'startPage': 1,
                'pageSize': pageSize
            };

            $scope.reloadAds = function() {
                adsService.getAds($scope.adsParams).$promise.then(
                    function success(data) {
                        $scope.data = data;
                    },
                    function error(err) {
                        notifyService.showError('Cannot load ads', err);
                    }
                );
            };

            $scope.reloadAds();

            $scope.$on('categorySelectionChanged', function (event, selecterdCategoryId) {
                $scope.adsParams.categoryId = selecterdCategoryId;
                $scope.adsParams.startPage = 1;
                $scope.reloadAds();
            });

            $scope.$on('townSelectionChanged', function (event, selectedTownId) {
                $scope.adsParams.townId = selectedTownId;
                $scope.adsParams.startPage = 1;
                $scope.reloadAds();
            });
        }
    ]);