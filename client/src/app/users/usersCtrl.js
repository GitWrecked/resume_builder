angular.module('rbApp').controller('usersCtrl', [
    '$scope', 'authSvc', 'userSvc',
    function($scope, authSvc, userSvc) {
        getUsers();

        function getUsers() {
            userSvc.retrieveUsers().then(function(response) {
                $scope.users = response.data.users;
            });
        }
    }
]);