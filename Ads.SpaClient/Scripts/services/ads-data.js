'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services')
    .factory('adsData', function ($resource, $http) {
        var resource = $resource(
            'http://localhost:1337/api/ads:id?PageSize=:pageSize/:id',
            { id: '@id' },
            { pageSize: '@pageSize' },
            {
                update: {
                    method: 'PUT'
                }
            });

        function getAllAds() {
            return resource.get(/*{ pageSize: 2 }*/);
        }

        function createNewAd(ad) {
            return resource.save(ad);
        }

        function getAdById(id) {
            return resource.get({ id: id });
        }

        function editAd(id, ad) {
            return resource.update({ id: id }, ad);
        }

        function deleteAd(id) {
            return resource.delete({ id: id });
        }

        return {
            getAll: getAllAds,
            create: createNewAd,
            getById: getAdById,
            edit: editAd,
            delete: deleteAd
        }
    });