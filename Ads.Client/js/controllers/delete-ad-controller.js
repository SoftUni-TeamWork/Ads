﻿'use strict';
angular.module('adsApp.controllers', [])
    .controller('DeleteController', [
        '$scope', '$location', '$routeParams', 'userService', 'notifyService', function($scope, $location, $routeParams, userService, notifyService) {
            $scope.$parent.pageTitle = 'Delete Ad';
            userService.getAd($routeParams).then(function(parameters) {
                debugger 
            }, function(parameters) {
                debugger

            });

            $scope.deleteAd = function(id) {
                userService.deleteAd(id).then(function() {
                    notifyService.showError('Add successfuly delete');
                    $location.path('/user/ads');
                }, function(err) {
                    notifyService.showError('Cannot delete ad', err);
                });
            }

            $scope.cancelDeleteAd = function() {
                $location.path('/user/ads');
            }
        }
    ]);