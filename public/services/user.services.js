'use strict';

var userApp = angular.module('UserApp');

userApp.factory('UserService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('http://localhost:7070/api/users').then(response => response.data),
            post: (user) => $http.post('http://localhost:7070/api/users', user).then(response => response.data),
            getById: (id) => $http.get('http://localhost:7070/api/users/' + id).then(response => response.data)
        }
    }

]);