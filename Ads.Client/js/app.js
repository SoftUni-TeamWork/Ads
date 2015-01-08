'use stict';

angular.module('adsApp', ['ngRoute', 'ngResource'])
    .constant('baseServiceUrl', 'http://localhost:1337//')
    .constant('pageSize', 2)
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'home-controller'
        });

        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'login-controller'
        });

        // TODO: define a route for the register controller

        $routeProvider.otherwise(
            { redirectTo: '/' }
        );
    });