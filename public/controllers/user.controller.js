'use strict';

var userApp = angular.module('UserApp');

userApp.controller('UserController', ['$scope', 'UserService', '$filter', '$location', '$state', '$stateParams',
    function ($scope, UserService, $filter, $location, $state, $stateParams) {

        function getUsers() {
            UserService.get().then(users => {
                $scope.users = users;
            })
        }

        getUsers();

        function getUserById() {
            UserService.getById($stateParams.userId).then(user => {
                $scope.user = user;
            })
        }

        getUserById();

        // $scope.getUserById = () => {
        //     UserService.getById($stateParams.userId).then(user => {
        //         $scope.user = user;
        //     })
        // };

        $scope.addUser = (user) => {
            console.log(user);
            UserService.post(user).then(user => {
                $scope.user = user;
                $state.go('dashboard.users-view');
            })
        }

        // $scope.goToUser = (user) => {
        //     $state.go('dashboard.users-view-one', {user: user._id});
        // }
    }
]);