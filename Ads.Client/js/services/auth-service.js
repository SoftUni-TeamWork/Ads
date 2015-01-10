'use strict';

angular.module('adsApp.services', [])
    .factory('authService', [
        '$http', '$window', 'baseServiceUrl', function($http, $window, baseServiceUrl) {

            function login(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };

                $http(request).success(function(data) {
                    $window.sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            }

            function logout() {
                delete $window.sessionStorage['currentUser'];
            }

            function register(userData, success, error) {
                // TODO
            }

            function getCurrentUser() {
                var currentUser = $window.sessionStorage['currentUser'];

                if (currentUser) {
                    return JSON.parse(currentUser);
                }
            }

            function isAnonymous() {
                return $window.sessionStorage['currentUser'] === undefined;
            }

            function isLoggedIn() {
                return !isAnonymous();
            }

            function isNormalUser() {
                var currentUser = getCurrentUser();

                if (currentUser) {
                    return !currentUser.isAdmin;
                }

                return false;
            }

            function isAdmin() {
                return isLoggedIn() && !isNormalUser();
            }

            function getAuthHeaders() {
                var headers = {};
                var currentUser = this.getCurrentUser();

                if (currentUser) {
                    headers.Authorization = 'Bearer ' + currentUser.access_token;
                }

                return headers;
            }

            return {
                login: login,
                logout: logout,
                getCurrentUser: getCurrentUser,
                isAnonymous: isAnonymous,
                isLoggedIn: isLoggedIn,
                isNormalUser: isNormalUser,
                isAdmin: isAdmin,
                getAuthHeaders: getAuthHeaders
            }
        }
    ])