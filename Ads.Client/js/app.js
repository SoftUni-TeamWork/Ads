'use stict';

angular.module('adsApp', ['ngRoute', 'ngResource', 'adsApp.controllers', 'adsApp.services'])
    .constant('baseServiceUrl', 'http://localhost:1337//')
    .constant('pageSize', 2)
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        });

        // TODO: define a route for the register controller

        $routeProvider.otherwise(
            { redirectTo: '/' }
        );
    });