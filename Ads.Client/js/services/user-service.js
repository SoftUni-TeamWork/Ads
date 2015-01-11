'use strict';
angular.module('adsApp.services', [])
    .factory('userService', [
        '$resource', 'authService', 'baseServiceUrl', '$http', function ($resource, authService, baseServiceUrl, $http) {
            $http.defaults.headers.common['Authorization'] = authService.getAuthHeaders().Authorization;
            
            var userAdsResource = $resource(
                baseServiceUrl + '/api/user/ads?PageSize=:pageSize&StartPage=:startPage',
                {
                    pageSize: '@pageSize',
                    startPage: '@startPage',
                    statuts: '@status'
                }
            );

            return {
                getAds: function(params) {
                    return userAdsResource.get(params);
                }
            }
        }
    ]);