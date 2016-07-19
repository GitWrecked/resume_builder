angular.module('rbApp').controller('adminCtrl', [
    '$scope', 'authSvc', 'userSvc',
    function($scope, authSvc, userSvc) {
        var currentUser = authSvc.user();
    }
]);