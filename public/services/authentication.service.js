'use strict';

var authApp = angular.module('AuthApp');

authApp.factory('AuthService', ['$http', '$timeout',
    function ($http, $timeout) {

        const service = {};

        service.loginUser = function (credentials, callback) {

            $timeout(function () {

                    var response = {success: credentials.username === 'test' && credentials.password === 'test'};

                    console.log(response);

                    if ((credentials.username === 'munsif' && credentials.password === '123') ||
                        (credentials.username === 'sara' && credentials.password === '123') ||
                        (credentials.username === 'kiru' && credentials.password === '123') ||
                        (credentials.username === 'sudhee' && credentials.password === '123')) {

                        console.log('in');
                        console.log(credentials);
                        response.status = 200;
                    }

                    if (!response.success) {
                        response.message = 'Username or password is incorrect';
                    }
                    callback(response);
                },
                1000
            );
        };

        // setUser()

        return {
            // get: () => $http.get('http://localhost:8081/users').then(response => response.data),

            service
        }
    }
]);