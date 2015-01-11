'use strict';
angular.module('adsApp.services', [])
    .factory('userService', [
        '$resource', 'authService', 'baseServiceUrl', '$http', function($resource, authService, baseServiceUrl, $http) {
            $http.defaults.headers.common['Authorization'] = authService.getAuthHeaders().Authorization;

            var userAdsResource = $resource(
                baseServiceUrl + '/api/user/ads/:id',
                {
                    id: '@id'
                }
            );

            return {
                getAds: function(params) {
                    return userAdsResource.get(params);
                },
                deactivateAd: function(id) {
                    var request = {
                        method: 'PUT',
                        url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                    };

                    return $http(request);
                },
                publishAgainAd: function(id) {
                    var request = {
                        method: 'PUT',
                        url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
                    }

                    return $http(request);
                },
                deleteAd: function (id) {
                    var request = {
                        method: 'DELETE',
                        url: baseServiceUrl + '/api/user/ads/' + id,
                    }

                    return $http(request);
                    //return userAdsResource.delete(id).$promise;
                },
                getAd: function (id) {
                    debugger;
                    return userAdsResource.get(id).$promise;
                }
            }
        }
    ]);