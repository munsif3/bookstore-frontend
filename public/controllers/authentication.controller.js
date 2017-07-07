'use strict';

var authApp = angular.module('AuthApp');

authApp.controller('AuthController', ['$scope', 'AuthService', '$location', '$state',
    function ($scope, AuthService, $location, $state) {

        $scope.credentials = {
            username: '',
            password: '',
            role: ''
        };

        $scope.approved = false;

        // var loggedUser = localStorage.__loggedUser = document.getElementById('user').value;

        // console.log(loggedUser);

        $scope.login = function (credentials) {
            console.log($scope.credentials);
            AuthService.service.loginUser($scope.credentials, function (response) {
                if (response.status === 200) {
                    console.log('ok');
                    if (localStorage.__loggedUser === "munsif") {
                        $state.go('dashboard-admin');
                    }
                    else if (localStorage.__loggedUser === "sara") {
                        $state.go('dashboard-doctor');
                    }
                    else if (localStorage.__loggedUser === "sudhee" || localStorage.__loggedUser === "kiru") {
                        $state.go('dashboard-nurse');
                    }
                    else {
                        $state.go('login');
                    }
                    $scope.approved = true;
                } else {
                    console.log('no');
                    $scope.error = response.message;
                    console.log(response.message);
                }
            });
        };


        $scope.checkUser = () => {
            if (localStorage.__loggedUser === "munsif" || localStorage.__loggedUser === "sara" || localStorage.__loggedUser === "sudhee" || localStorage.__loggedUser === "kiru") {

            }
            else {
                $state.go('login');
            }
        }

    }
]);