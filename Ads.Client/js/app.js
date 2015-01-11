'use stict';

angular.module('adsApp', [
    'ngRoute', 'ngResource', 'ui.bootstrap.pagination', 'validation.match', 'adsApp.controllers', 'adsApp.services'])
    .constant('baseServiceUrl', 'http://localhost:1337')
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
            }).when('/user/ads', {
                templateUrl: 'templates/user/user-ads.html',
                controller: 'UserAdsController'
            }).when('/user/ads/delete/:id', {
                templateUrl: 'templates/user/delete-ad.html',
                controller: 'DeleteController'
            }).when('/user/ads/publish', {
                templateUrl: 'templates/user/new-ad.html',
                controller: 'UserPublishNewAdController'
            }).otherwise(
                { redirectTo: '/' }
            );

            $locationProvider.html5Mode(true);
        }
    ]).run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$locationChangeStart', function (event) {
            var currentPath = $location.path();

            if (authService.isLoggedIn() && (currentPath == '/register' || currentPath == '/login')) {
                $location.path('/');
            } else if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
                $location.path("/");
            }
        });
    }]);
