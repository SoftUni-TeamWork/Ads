'use strict';
angular.module('adsApp.services', [])
    .factory('adsService', [
        '$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
            var adsResource = $resource(
                baseServiceUrl + '/api/ads?PageSize=:pageSize&StartPage:=startPage&CategoryId:=categoryId&TownId:=townId',
                {
                    pageSize: '@pageSize',
                    startPage: '@startPage',
                    categoryId: '@categoryId',
                    townId: '@townId'
                }
            );

            return {
                getAds: function(params, success, error) {
                    return adsResource.get(params, success, error);
                }
            }
        }
    ]);