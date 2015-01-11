'use strict';
angular.module('adsApp.services', [])
    .factory('categoriesService', [
        '$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
            var categoriesResource = $resource(
                baseServiceUrl + '/api/categories'
            );

            return {
                getCategories: function(success, error) {
                    return categoriesResource.query(success, error);
                }
            }
        }
    ]);