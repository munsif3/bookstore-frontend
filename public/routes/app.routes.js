'use strict';

var mainApp = angular.module('MainApp');

mainApp.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.when('', 'login');
    $urlRouterProvider.when('/', 'login');
    $urlRouterProvider.when('/home', 'home');
    $urlRouterProvider.when('/dashboard', 'dashboard-admin');
    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'views/main-login.html',
            controller: 'AuthController'
        })

        .state('dashboard-admin', {
            url: '/dashboard/admin',
            templateUrl: 'views/db-admin.home.html',
            controller: 'DashboardController'
        })

        .state('dashboard-admin.home', {
            url: '/home',
            templateUrl: 'views/db-dash-admin.html',
            controller: 'UserController'
        })

        .state('dashboard-admin.users-add', {
            url: '/users/add',
            templateUrl: 'views/db-users.add.html',
            controller: 'UserController'
        })

        .state('dashboard-admin.users-view', {
            url: '/users/view',
            templateUrl: 'views/db-users.view.html',
            controller: 'UserController'
        })

        .state('dashboard-admin.users-view-one', {
            url: '/users/add/{userId}',
            templateUrl: 'views/db-users.one.html',
            controller: 'UserController'
        })
});

