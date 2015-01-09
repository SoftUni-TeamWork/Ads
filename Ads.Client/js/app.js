'use stict';

angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination', 'adsApp.controllers', 'adsApp.services'])
    .constant('baseServiceUrl', 'http://localhost:1337/')
    .constant('pageSize', 2)
    .config([
        '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            }).when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).when('/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterController'
            }).otherwise(
                { redirectTo: '/' }
            );

            $locationProvider.html5Mode(true);
        }
    ]);