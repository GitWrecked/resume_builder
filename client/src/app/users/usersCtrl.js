// users controller ===================
// angular controller to handle user resume submissions, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
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