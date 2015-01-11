'use stict';

angular.module('adsApp.controllers', [])
    .controller('UserPublishNewAdController', [
        '$scope', '$location', 'townsService', 'categoriesService', 'userService', 'notifyService', function($scope, $location, townsService, categoriesService,
            userService, notifyService) {
            $scope.adData = { townId: null, categoryId: null };
            $scope.categories = categoriesService.getCategories();
            $scope.towns = townsService.getTowns();

            $scope.publishAd = function(adData) {
                userService.createNewAd(adData).then(function() {
                        notifyService.showInfo('Ad added successfuly');
                        $location.path("/user/ads");
                    },
                    function(err) {
                        notifyService.showError('Ad creation failed', err);
                    }
                );
            };
        }
    ]);