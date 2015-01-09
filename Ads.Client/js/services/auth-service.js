'use strict';

angular.module('adsApp.services', [])
    .factory('authService', [
        '$http', '$window', 'baseServiceUrl', function ($http, $window, baseServiceUrl) {
            return {
                login: function(userData, success, error) {
                    var request = {
                        method: 'POST',
                        url: baseServiceUrl + '/api/user/login',
                        data: userData
                    };

                    $http(request).$promise.then(function(data) {
                        $window.sessionStorage['currentUser'] = JSON.stringify(data);
                        success(data);
                    }, error);
                },

                register: function(userData, success, error) {
                    // TODO
                },

                logout: function() {
                    // TODO
                },

                getCurrentUser: function() {
                    // TODO
                },

                isAnonymous: function() {
                    // TODO
                },

                isLoggedIn: function() {
                    // TODO
                },

                isNormalUser: function() {
                    // TODO
                },

                isAdmin: function() {
                    // TODO
                },

                getAuthHeaders: function() {
                    // TODO
                }
            }

        }
    ])