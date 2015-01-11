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
                    return userAdsResource.delete({id: id}).$promise;
                },
                createNewAd: function(addData) {
                    return userAdsResource.save(addData).$promise;
                },
                getAd: function (id) {
                    return userAdsResource.get(id).$promise;
                }
            }
        }
    ]);