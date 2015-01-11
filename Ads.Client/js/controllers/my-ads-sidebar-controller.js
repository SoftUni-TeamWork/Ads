'use strict';
angular.module('adsApp.controllers', [])
    .controller('MyAdsSidebarController', [
        '$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.statusClicked = function (selectedStatus) {
                if (selectedStatus) {
                    selectedStatus = selectedStatus.replace(' ', '');
                }
                
                $scope.selectedStatus = selectedStatus;
                $rootScope.$broadcast('adStatusSelectionChanged', selectedStatus);
            }
        }
    ]);