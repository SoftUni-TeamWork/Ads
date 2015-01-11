'use strict';
angular.module('adsApp.services', [])
    .factory('adsService', [
        '$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
            var adsResource = $resource(
                baseServiceUrl + '/api/ads'
            );

            return {
                getAds: function(params, success, error) {
                    return adsResource.get(params, success, error);
                }
            }
        }
    ]);