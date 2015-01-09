'use strict';
angular.module('adsApp.services', [])
    .factory('townsService', [
        '$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
            var towns = $resource(
                baseServiceUrl + '/api/towns'
            );

            return {
                getTowns: function (success, error) {
                    return towns.get(success, error);
                }
            }
        }
    ]);