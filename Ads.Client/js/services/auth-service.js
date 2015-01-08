'use strict';

angular.module('adsApp.services', [])
    .factory('authService', [
        '$http', 'baseServiceUrl', function($http, basServiceUrl) {
            return {
                login: function(userData, success, error) {
                    // TODO
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