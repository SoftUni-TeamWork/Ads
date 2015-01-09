'use strict';
angular.module('adsApp.services', [])
    .factory('adsService', [
        '$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
            var adsResource = $resource(
                baseServiceUrl + 'api/ads',
                null,
                {
                    'getAll': { method: 'GET' }
                }
            );

            return {
                getAds: function(params, success, error) {
                    return adsResource.getAll(params, success, error);
                }
            }
        }
    ]);