'use stict';

angular.module('adsApp', ['ngRoute', 'ngResource', 'adsApp.controllers', 'adsApp.services'])
    .constant('baseServiceUrl', 'http://localhost:1337/')
    .constant('pageSize', 2)
    .config([
        '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            }).when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }).when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'
            }).otherwise(
                { redirectTo: '/' }
            );

            $locationProvider.html5Mode(true);
        }
    ]);