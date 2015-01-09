'use strict';
angular.module('adsApp.controllers', [])
    .controller('RightSidebarController', [
        '$scope', 'categoriesService', 'townsService', function($scope, categoriesService, townsService) {
            categoriesService.getCategories().$promise.then(function(data) {
                    $scope.categories = data;
                },
                function(error) {
                    debugger;
                });

            townsService.getTowns().$promise.then(function(data) {
                    $scope.towns = data;
                },
                function(error) {
                    debugger;
                });

            $scope.categoryClicked = function (clickedCategoryId) {
                $scope.selectedCategoryId = clickedCategoryId;
            }

            $scope.townClicked = function (clickedTownId) {
                $scope.selectedTownId = clickedTownId;
            }
        }
    ]);